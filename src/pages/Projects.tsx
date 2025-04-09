import { useEffect } from "react";
import Cards from "./Projects/Cards";
import "./scss/Projects.scss";

const Projects = () => {

useEffect(()=>{
window.scroll({top:0})
},[])



	return (
		<div className="all-projects">
			<div className="projects-box">
				<h1>Projekty</h1>
			</div>
			<div className="cards-box-main">
				<Cards />
			</div>
		</div>
	);
};

export default Projects;
