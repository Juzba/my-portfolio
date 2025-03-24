import './AdvencedSlider.scss';
import data from './data';
import { useEffect, useState } from 'react';
import { FaAnglesLeft } from 'react-icons/fa6';
import { FaAnglesRight } from 'react-icons/fa6';

function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        console.log('useeffect 1');
        if (index > data.length - 1) setIndex(0);
        else if (index < 0) setIndex(data.length - 1);

        const t1 = setInterval(() => setIndex(index + 1), 5000);
        return () => clearInterval(t1);
    }, [index]);

    return (
        <section className="advenced-slider">
            {data.map((oneMovie, indexMovie) => {
                const { id, image, title, age, description, tags } = oneMovie;

                let position = 'nextPosition';

                if (indexMovie === index) position = 'position';

                if (indexMovie === index - 1 || (index === 0 && indexMovie === data.length - 1)) position = 'lastPosition';

                return (
                    <div className="card" id={position} key={id}>
                        <img src={image} alt=""></img>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>{tags}</p>
                        <p>{age}</p>
                    </div>
                );
            })}
            <div className="buttons">
                <button onClick={() => setIndex(index - 1)}>
                    <FaAnglesLeft />
                </button>
                <button onClick={() => setIndex(index + 1)}>
                    <FaAnglesRight />
                </button>
            </div>
        </section>
    );
}

export default Slider;
