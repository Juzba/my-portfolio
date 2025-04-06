import { useParams } from "react-router-dom";
import Snake from "./Projects/assets/snake/Snake";
import AdvencedSlider from "./Projects/assets/advenced-slider/AdvencedSlider";
import Faq from "./Projects/assets/faq/Faq"
import "./scss/OneProject.scss"
import { Link } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";
import FirebaseProject from "./Projects/assets/firebase/AddMovie";
import Coordinates from "./Projects/assets/issCoordinates/Coordinates";
import SudokuSolver from "./Projects/assets/sudoku-solver/SudokuSolver";
import EmailProject from "./Projects/assets/email-form/EmailProject"

const OneProject = () => {
	const {id} = useParams();
	// console.log(id);


	return (
		<section className="one-project">
			{/* <h1>One Project</h1> */}
			{id === "0" && <SudokuSolver/>}
			{id === "1" && <FirebaseProject/>}
			{id === "2" && <AdvencedSlider/>}
			{id === "3" && <Faq/>}
			{id === "4" && <Snake/>}
			{id === "5" && <Coordinates/>}
			{id === "6" && <EmailProject/>}




			<Link to={"/projects"}>< TfiControlBackward className="icon"/>Zpět</Link>
		</section>
	);
};

export default OneProject;
