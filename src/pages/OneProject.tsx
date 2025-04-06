import { useParams } from "react-router-dom";
import Snake from "./Projects/assets/snake/Snake";
import AdvencedSlider from "./Projects/assets/advenced-slider/AdvencedSlider";
import Faq from "./Projects/assets/faq/Faq";
import "./scss/OneProject.scss";
import { Link } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";
import FirebaseProject from "./Projects/assets/firebase/AddMovie";
import Coordinates from "./Projects/assets/issCoordinates/Coordinates";
import SudokuSolver from "./Projects/assets/sudoku-solver/SudokuSolver";
import EmailProject from "./Projects/assets/email-form/EmailProject";
import cardsData from "./Projects/Cards-data/Cards-data";

interface type {
	id: number;
	name: string;
	image: string;
	created: string[];
	description: string;
	description2: string;
	description3: string;
	playable: boolean;
}

const OneProject = () => {
	const { id } = useParams();

	if (id === undefined) {
		return <div>Id Nenalezeno!</div>;
	}

	const {name, description, description2, description3 } = cardsData.find((_, index) => index == +id) as type;

	return (
		<section className="one-project">
			<div className="description">
				<h1>{name}</h1>
				<p>{description}</p>
				<p>{description2}</p>
				<p>{description3}</p>
			</div>
			{/* <h1>One Project</h1> */}
			{id === "0" && <SudokuSolver />}
			{id === "1" && <FirebaseProject />}
			{id === "2" && <AdvencedSlider />}
			{id === "3" && <Faq />}
			{id === "4" && <Snake />}
			{id === "5" && <Coordinates />}
			{id === "6" && <EmailProject />}

			<div>
				<Link to={"/projects"}>
					<TfiControlBackward className="icon" />
					Zpět
				</Link>
			</div>
		</section>
	);
};

export default OneProject;
