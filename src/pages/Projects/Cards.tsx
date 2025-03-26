import './Cards-data/Cards.scss';
import data from './Cards-data/Cards-data';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <section className="cards-component">
            <input type="text" placeholder="Vyhledání projectu" />
            <div className="cards-box">
                {data.map(({ id, name, image, created, playable }) => {
                    return (
                        <div key={id} className="one-card">
                            <div className="img-box">
                                <img src={image}></img>
                            </div>
                            <div className="text-box">
                                <h3>{name}</h3>

                                {/* přidání čarky mezi slova */}
                                <p>
                                    {created.map((item, index) => {
                                        return index === 0 ? item : ', ' + item;
                                    })}
                                </p>
                                {/* <p>{description}</p> */}
                                {playable ? (
                                    <Link className="button-open" to={`/oneproject/${id}`}>
                                        Open
                                    </Link>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Cards;
