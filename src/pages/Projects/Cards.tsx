import './scss/Cards.scss';
import data from './Cards-data/Cards-data';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <section className="cards-component">
            <input type="text" placeholder="Vyhledání projectu" />
            <div className="cards-box">
                {data.map(({ id, name, image, created, description, playable }) => {
                    return (
                        <div key={id} className="one-card">
                            <img src={image}></img>
                            <h3>{name}</h3>
                            <p>{created.map((item, index)=>{ return index === 0 ? item : ", " + item})}</p>
                            <p>{description}</p>
                            {playable? <Link to={`/oneproject/${id}`}>Spustit</Link> : <></>}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Cards;
