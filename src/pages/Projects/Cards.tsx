import "./Cards-data/Cards.scss";
import data from "./Cards-data/Cards-data";

const Cards = () => {


	return (
		<section className="cards-box">
			{data.map(({ id, name, image, created }) => {
				return (
					<a href={`/oneproject/${id}`} key={id} className="one-card">
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
					</a>
				);
			})}
		</section>
	);
};

export default Cards;
