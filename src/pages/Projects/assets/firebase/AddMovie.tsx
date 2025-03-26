import { useState } from 'react';
import './scss/AddMovie.scss';
import { firestoreDB } from './config';
import { addDoc, collection } from 'firebase/firestore';
import Movies from "./Movies"

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [minage, setMinAge] = useState('');
    const [time, setTime] = useState('');

    const [text, setText] = useState('');

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title && minage && time) {
            // console.log(`${title} ${minage} ${time}`);

            try {
                await addDoc(collection(firestoreDB, 'movies_two'), { title, minage: parseInt(minage), time: parseInt(time) });
            } catch (error) {
                if (error instanceof Error) {  
                    console.log(error.message); 
                } else {  
                    console.log('Unknown error', error);  
                }
            }

            setTitle('');
            setMinAge('');
            setTime('');
            setText('Film uspěšně přidán do DB.');
        } else {
            setText('Vyplň všechny položky.');
        }
    };

    return (
        <section className="add-movie">
            <h1>Přidání filmů</h1>

            <form onSubmit={submitForm}>
                <p>{text}</p>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Název filmu"
                    maxLength={22}
                    type="text"
                    id="userName"
                    name="userName"
                    autoComplete="off"
                />
                <input
                    value={minage}
                    min={0}
                    max={1000}
                    onChange={(e) => setMinAge(e.target.value)}
                    placeholder="Minimální věk"
                    type="number"
                    id="minage"
                    name="minage"
                />
                <input
                    value={time}
                    min={0}
                    max={1000}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Čas filmu"
                    type="number"
                    id="time"
                    name="time"
                />
                <input value="Přidat film" type="submit" />
            </form>
            <Movies/>
        </section>
    );
};

export default AddMovie;
