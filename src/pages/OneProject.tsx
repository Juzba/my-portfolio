import { useParams } from "react-router-dom";
import Snake from "./Projects/assets/snake/Snake";
import AdvencedSlider from "./Projects/assets/advenced-slider/AdvencedSlider";
import Faq from "./Projects/assets/faq/Faq"
import "./scss/OneProject.scss"
import { Link } from "react-router-dom";
import { TfiControlBackward } from "react-icons/tfi";
import FirebaseProject from "./Projects/assets/firebase/AddMovie";
import Coordinates from "./Projects/assets/issCoordinates/Coordinates";

const OneProject = () => {
	const {id} = useParams();
	// console.log(id);


	return (
		<section className="one-project">
			{/* <h1>One Project</h1> */}
			{id === "0" && <FirebaseProject/>}
			{id === "1" && <AdvencedSlider/>}
			{id === "2" && <Faq/>}
			{id === "3" && <Snake/>}
			{id === "4" && <Coordinates/>}




			<Link to={"/projects"}>< TfiControlBackward className="icon"/>Zpět</Link>
		</section>
	);
};

export default OneProject;
