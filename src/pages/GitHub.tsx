import "./scss/Github.scss";
import gitLogo from "../images/github-logo.png";

const GitHub = () => {
	return (
		<div className="github-page">
			<div className="first-block">
				<div className="box-text">
					<h1>GitHub</h1>
				</div>
				<div className="box-logo">
					<img src={gitLogo} alt="" />
				</div>
			</div>

			<div className="second-block">
				<a href="https://github.com/Juzba" target="_blank">
					My Github
				</a>
			</div>
		</div>
	);
};

export default GitHub;
