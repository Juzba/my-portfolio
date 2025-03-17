import { useEffect, useState } from "react";
import "./TechBars.scss";
import StackIcon from "tech-stack-icons";

const bars: string[] = ["reactjs", "sass", "typescript", "csharp"];

const TechBars = () => {
	const [animation, setAnimation] = useState("");
console.log(animation);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setAnimation("active");
			});
		});

		const bars = document.getElementById("bars");
		if (bars) observer.observe(bars);
	}, []);

	return (
		<div className="bars" id={"bars"}>
			{bars.map((item, index) => {
				return (
					<div key={index} className="box">
						<div className="circle">
							<StackIcon className="icon" name={item} />
						</div>
						<div className={`bar ${item} ${animation}`}></div>
					</div>
				);
			})}
		</div>
	);
};

export default TechBars;
