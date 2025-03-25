import { useState } from 'react';
import data from './dataFaq';
import './Faq.scss';

const Card = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="appContainer">
            {data.map((item, index) => {
                const { question, answer } = item;
                return (
                    <div key={index} className="cardContainer">
                        <div className="firstBox">
                            <h2>{question}</h2>
                            <button onClick={() => setOpen(!open)}>Odpověď</button>
                        </div>
                        <div className={`close ${open && 'open'}`}>
                            <p>{answer}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
