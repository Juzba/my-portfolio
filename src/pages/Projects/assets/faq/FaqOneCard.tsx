import './Faq.scss';
import { useState } from 'react';

const FaqOneCard = ({ question, answer }: { question: string; answer: string }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="cardContainer">
            <div className="firstBox">
                <h2>{question}</h2>
                <button onClick={() => setOpen(!open)}>Odpověď</button>
            </div>
            <div className={`close ${open && 'open'}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default FaqOneCard;
