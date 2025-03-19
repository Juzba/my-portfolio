import "./About-First-Box.scss";
import "./About-Second-Box.scss";
import "./About-Third-Box.scss";
import TechBars from "../components/tech_bars/TechBars";
import Slider from "../components/slider/Slider";
import imgBaldMan from "../../images/bman.png";
import light from "../../images/light.png";
import robot from "../../images/kuka.png";
import circle from "../../images/circle.png";
import comp from "../../images/comp.png";
import Email from "../components/email/Email";
import StackIcon from "tech-stack-icons";
import { useEffect, useState } from "react";

const About = () => {
	const [animationText1, setAnimationText1] = useState(false);
	const [animationImg1, setAnimationImg1] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// console.log(entry.target.id)
				if (entry.isIntersecting && entry.target.id === "text1") setAnimationText1(true);
				else if (entry.isIntersecting && entry.target.id === "img1") setAnimationImg1(true);
			});
		});

		const textP1 = document.getElementById("text1");
		const img1 = document.getElementById("img1");

		if (textP1) observer.observe(textP1);
		else console.error("text 1 nenalezen observerem!");

		if (img1) observer.observe(img1);
		else console.error("img 1 nenalezen observerem!");
	}, []);

	// if (loading) return <h1>Loading...</h1>;

	return (
		<section className="about">
			{/* <img className="wave" src={light} alt="" /> */}
			<div className="first-block">
				<div className="box">
					<div className="nadpis">
						<h1>O mně</h1>
						<p className="text1">Jmenuji se Jiří Strnadel</p>
						<p className="text2">a věnuji se vývoji webových aplikací se zaměřením na React a TypeScript.</p>
						<StackIcon className="react-icon react" name={"reactjs"} />
						<StackIcon className="react-icon typescript" name={"typescript"} />
						<StackIcon className="react-icon csharp" name={"csharp"} />
					</div>
					<img className="me" src={imgBaldMan} alt="" />
				</div>
			</div>

			<div className="second-block">
				<div className="box">
					<img className={animationImg1 ? "working active" : "working"} id="img1" src={comp} alt="" />
					<p className={animationText1 ? "active" : ""} id="text1">
						Programování mě nadchlo natolik, že mu věnuji každý volný moment už více než rok a půl. Neustále se učím
						nové technologie a zdokonaluji své dovednosti.
					</p>
				</div>
			</div>

			<div className="third-block">
				<Slider />
			</div>

			<div className="fourth-block">
				<h2>Zkušenosti</h2>
				<p>
					Mám zkušenosti s JavaScriptem, SCSS, HTML, CSS, Git a databázemi jako Firebase. Zároveň si rozšiřuji znalosti
					v C#, kde se pohybuji na mírně pokročilé úrovni.
				</p>
				<TechBars />
			</div>

			<div className="fifth-block">
				<p>
					Nyní pracuji jako elektro údržbář a programátor průmyslových robotů Kuka, Reis, Yaskawa a PLC Simatic. Tato
					práce mě naučila analytickému myšlení a efektivnímu řešení problémů, což dnes využívám při vývoji aplikací.
				</p>
				<div className="robot-div">
					<img className="robot" src={robot} alt="" />
				</div>
			</div>

			<div className="sixth-block">
				<p>
					Hledám příležitost, kde bych mohl své dovednosti dále rozvíjet a přispět svým nadšením pro moderní frontendový
					vývoj.
				</p>

				<Email />
			</div>
		</section>
	);
};

export default About;
