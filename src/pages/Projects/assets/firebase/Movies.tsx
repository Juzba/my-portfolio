import Loading from '../../../components/loading/Loading';
import './scss/Movies.scss';
import './scss/MovieInfo.scss';
import { firestoreDB } from './config';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

interface MovieData {
    title: string;
    minage: number;
    time: number;
}

interface DocumentWithId extends MovieData {
    id: string;
}

const Movies = () => {
    const [error, setError] = useState('');
    const [dataDB, setDataDB] = useState<DocumentWithId[] | null>(null);
    const [openInfo, setOpenInfo] = useState<string | null>(null);

    const openMovieInfo = () => {
        const oneMovie = dataDB?.find((item) => {
            if (!openInfo) return;
            return item.id === openInfo;
        });
        if (oneMovie)
            return (
                <div className="movie-card">
                    <h2>{oneMovie.title}</h2>

                    <table>
                        <thead>
                            <tr>
                                <th className="left">Dostupné od věku:</th>
                                <th className="right">{oneMovie.minage + ' let'}</th>
                            </tr>
                            <tr>
                                <th className="left">Délka filmu:</th>
                                <th className="right">{oneMovie.time + ' min'}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            );
        return;
    };

    const DeleteMovie = async (id: string) => {
        await deleteDoc(doc(firestoreDB, 'movies_two', id));
    };

    useEffect(() => {
        const unsub = onSnapshot(collection(firestoreDB, 'movies_two'), (snapshot) => {
            if (snapshot.empty) {
                setError('Databáze je prázdná');
                setDataDB([]);
            } else {
                const newData: DocumentWithId[] = [];
                snapshot.docs.forEach((oneDoc) => {
                    const data = oneDoc.data() as MovieData;
                    newData.push({ id: oneDoc.id, ...data });
                });
                setDataDB(newData);
                setError('');
            }
        });
        return () => unsub();
    }, []);

    useEffect(() => {
        if (openInfo) document.addEventListener('mousedown', () => setOpenInfo(null));
        return () => document.removeEventListener('mousedown', () => setOpenInfo(null));
    }, [openInfo]);

    return (
        <section className="movies">
            <h1>Aktuální Firebase DB.</h1>
            {openInfo && openMovieInfo()}

            {dataDB && dataDB.length > 0 && !error ? (
                dataDB.map(({ id, title }) => {
                    return (
                        <div key={id} className="one-movie">
                            <h3>{title}</h3>
                            <div className="info-smazat-box">
                                <button onClick={() => setOpenInfo(id)} className="info-btn">
                                    Více info.
                                </button>
                                <button className="delete-btn" onClick={() => DeleteMovie(id)}>
                                    Smazat
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Loading />
            )}
        </section>
    );
};

export default Movies;
