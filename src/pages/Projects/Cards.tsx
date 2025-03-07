import './scss/Cards.scss';
import data from './Cards-data/Cards-data';

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
                            <p>{created}</p>
                            <p>{description}</p>
                            <p>{`Playeble: ${playable}`}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Cards;
