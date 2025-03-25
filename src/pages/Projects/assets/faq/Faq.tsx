import FaqOneCard from './FaqOneCard';
import data from './dataFaq';
import './Faq.scss';

const Card = () => {
    

    return (
        <div className="appContainer">
            {data.map(({id, question, answer}) => {
                return <FaqOneCard key={id} question={question} answer={answer}/>;
            })}
        </div>
    );
};

export default Card;
