import { useEffect, useState } from 'react';
import './SeznamNetflix.scss';
import data from './data-netflix';
import OneCard from './OneCardNetflix';

const Seznam = () => {
    const [text, setText] = useState('');
    const [newData, setNewData] = useState(data);

    // Zjistí jestli title obsahuje zadany text
    useEffect(() => {
        setNewData(data.filter(({ title }) => title.toLowerCase().includes(text.toLowerCase())));
    }, [text]);

    return (
        <div className='seznam-netflix'>
            <form action=''>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Hledaný film' />
            </form>
            <div className='film-container'>
                {newData.map((data) => {
                    return <OneCard key={data.id} {...data} />;
                })}
            </div>
        </div>
    );
};

export default Seznam;
