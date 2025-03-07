import { useParams } from "react-router-dom";
// import SnakeApp from "./Projects/assets/snake/SnakeApp.css";

const OneProject = () => {
	const {id} = useParams();
	console.log(id);


	return (
		<section>
			<h1>One Project</h1>
			{id === "0" ? <p>snake</p> : <></>}
		</section>
	);
};

export default OneProject;
