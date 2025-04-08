import useFetch from "./components/hooks/useFetch";
import "./scss/Github.scss";
import gitLogo from "../images/github-logo.png";

// const url = "https://api.github.com/users/Juzba";

const GitHub = () => {
	// const { data, loading, refetch } = useFetch(url);

	// const spustit = async () => {
	// 	refetch();
	// 	const result = await data;
	// 	console.log(result);
	// };

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

			<a href="https://github.com/Juzba" target="_blank">
				My Github
			</a>
			{/* <button onClick={() => spustit()}>Click</button> */}
		</div>
	);
};

export default GitHub;
