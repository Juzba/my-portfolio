import "./Cards-data/Cards.scss";
import data from "./Cards-data/Cards-data";
import { Link } from "react-router-dom";

const Cards = () => {

	////////////////////
	if (!data) return <p>Data nejsou nalezena</p>;
	///////////////////////////////////////
	
	return (
		<section className="cards-box">
			{data.map(({ id, name, image, created }) => {
				return (
					<Link to={`/oneproject/${id}`} key={id} className="one-card">
						<div className="img-box">
							<img src={image}></img>
						</div>
						<div className="text-box">
							<h3>{name}</h3>

							{/* přidání čarky mezi slova */}
							<p>
								{created.map((item, index) => {
									return index === 0 ? item : ", " + item;
								})}
							</p>
							{/* <p>{description}</p> */}
						</div>
					</Link>
				);
			})}
		</section>
	);
};

export default Cards;
