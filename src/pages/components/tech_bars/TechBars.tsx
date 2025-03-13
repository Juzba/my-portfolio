import "./TechBars.scss";
import StackIcon from "tech-stack-icons";

const bars: string[] = ["reactjs", "sass","typescript", "csharp"];

const TechBars = () => {
	return (
			<div className="bars">
				{bars.map((item, index) => {
					return (
						<div key={index} className="box">
							<div className="circle">
								<StackIcon className="icon" name={item} />
							</div>
							<div className={`bar ${item}`}></div>
						</div>
					);
				})}
			</div>
	);
};

export default TechBars;
