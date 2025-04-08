import useFetch from "./components/hooks/useFetch";
import "./scss/Github.scss";

const git = "../images/factory.jpg";
const url = "https://api.github.com/users/Juzba";

const GitHub = () => {
	// const { data, loading, refetch } = useFetch(url);

	// const spustit = async () => {
	// 	refetch();
	// 	const result = await data;
	// 	console.log(result);
	// };

	return (
		<div className="github-page">
			<h1>GitHub</h1>
			<div>
				<img src={git} alt="" />
			</div>

			<a href="https://github.com/Juzba" target="_blank">
				My Github
			</a>
			{/* <button onClick={() => spustit()}>Click</button> */}
		</div>
	);
};

export default GitHub;
