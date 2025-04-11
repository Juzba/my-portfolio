import './OneCardNetflix.scss';
// import PropTypes from 'prop-types';


interface states {
    id: number;
    image: string;
    title: string;
    age: string;
    tags: string;
    description: string;
}


const OneCard = ({ image, title, age, tags, description }: states) => {
    return (
        <div className='one-card-netflix'>
            <img src={image} alt='' />
            <h3>{title}</h3>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
        </div>
    );
};

// OneCard.propTypes = {
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     tags: PropTypes.number.isRequired,
//     description: PropTypes.number.isRequired,
// };

export default OneCard;
