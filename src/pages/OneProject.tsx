import { useParams } from "react-router-dom";
import Snake from "./Projects/assets/snake/Snake";
import AdvencedSlider from "./Projects/assets/advenced-slider/AdvencedSlider";
import "./scss/OneProject.scss"

const OneProject = () => {
	const {id} = useParams();
	console.log(id);


	return (
		<section className="one-project">
			{/* <h1>One Project</h1> */}
			{id === "0" && <Snake/>}
			{id === "1" && <AdvencedSlider/>}
		</section>
	);
};

export default OneProject;
