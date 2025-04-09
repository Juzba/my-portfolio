import "./scss/Resume.scss";
import ResumeHtml from "./resume/ResumeHtml";
import { useEffect } from "react";

const Resume = () => {
	
	useEffect(() => {
		window.scroll({ top: 0 });
	}, []);

	return (
		<section className="resume-page">
			<div className="header">
				<h1>Životopis</h1>
			</div>
			<div className="resume-box">
				<ResumeHtml />
			</div>
		</section>
	);
};

export default Resume;
