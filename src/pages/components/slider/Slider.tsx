import { useEffect, useState } from "react";
import "./Slider.scss";
import StackIcon from "tech-stack-icons";

const iconArrey: string[] = [
	"html5",
	"css3",
	// "github",
	"sass",
	"reactjs",
	"js",
	"typescript",
	"csharp",
	"git",
	"tailwindcss",
	"vitejs",
	"vscode"
];

const Slider = () => {
	const [position, setPosition] = useState<number>(0);

	// console.log(position);

	useEffect(() => {
		let count: number = 0;
		setPosition(++count);

		setInterval(() => {
			if (++count > iconArrey.length - 1) count = 0;
			setPosition(count);
		}, 4000);
	}, []);

	// tri ikony
	// 	const classNameFunction = (index: number) => {
	// 	if (index === position) return "icon pos3";
	// 	else if (index === position - 1 || (position === 0 && index === iconArrey.length - 1)) return "icon pos4";
	// 	return "icon pos2";
	// };

	// pet ikon
	const classNameFunction = (index: number) => {
		if (index === position) return "icon pos3";
		else if (index === position - 1 || (position === 0 && index === iconArrey.length - 1)) return "icon pos2";
		else if (
			index === position - 2 ||
			(position === 0 && index === iconArrey.length - 2) ||
			(position === 1 && index === iconArrey.length - 1)
		)
			return "icon pos1";
		else if (index === position + 1 || (position + 1 > iconArrey.length - 1 && index === 0)) return "icon pos4";
		return "icon pos5";
	};

	return (
		<div className="slider">
			{iconArrey.map((item: string, index: number) => {
				return <StackIcon key={index} className={classNameFunction(index)} name={item} />;
			})}
		</div>
	);
};

export default Slider;
