import useFetch from "./components/hooks/useFetch";
const url = "https://api.github.com/users/Juzba";
const img = "https://api.github.com/users/Juzba/orgs"

const GitHub = () => {
	const { data, loading, refetch } = useFetch(url);

	const spustit = async () => {
		refetch();
		const result = await data;
		console.log(result);
	};

	return (
		<div>
			<h1>GitHub</h1>
            <div id="https://api.github.com/users/Juzba/orgs"></div>
			<button onClick={() => spustit()}>Click</button>
		</div>
	);
};

export default GitHub;
