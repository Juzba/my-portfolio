import "./Slider.scss";
import StackIcon from "tech-stack-icons";

const Slider = () => {
	const neco = document.getElementsByName("html5");
	console.log(neco);

	return (
		<div className="slider">
			<StackIcon className="start-pos" name="html5" />
			<StackIcon className="end-pos" name="css3" />
			<StackIcon className="active" name="sass" />
			<StackIcon className="start-pos" name="reactjs" />
			<StackIcon className="start-pos" name="js" />
			<StackIcon className="start-pos" name="typescript" />
			<StackIcon className="start-pos" name="csharp" />
		</div>
	);
};

export default Slider;
