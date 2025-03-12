import "./About-First-Box.scss";
import "./About-Second-Box.scss";
import "./About-Third-Box.scss";
import Slider from "../components/slider/Slider";
import imgBaldMan from "../../images/bman.png";
import robot from "../../images/kuka.png";
import circle from "../../images/circle.png";
import comp from "../../images/comp.png";
import Email from "../components/email/Email";
import StackIcon from "tech-stack-icons";

const About = () => {
	return (
		<section className="about">
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
					<img className="working" src={comp} alt="" />
					<p>
						Programování mě nadchlo natolik, že mu věnuji každý volný moment už více než rok a půl. Neustále se učím
						nové technologie a zdokonaluji své dovednosti.
					</p>
				</div>
					<Slider />
			</div>

			<div className="third-block">
				<p>
					Mám zkušenosti s JavaScriptem, SCSS, HTML, CSS, Git a databázemi jako Firebase. Zároveň si rozšiřuji znalosti
					v C#, kde se pohybuji na mírně pokročilé úrovni.
				</p>
				<img src={robot} alt="" />
				<p>
					Nyní pracuji jako elektro údržbář a programátor průmyslových robotů Kuka, Reis, Yaskawa a PLC Simatic. Tato
					práce mě naučila analytickému myšlení a efektivnímu řešení problémů, což dnes využívám při vývoji aplikací.
				</p>
			</div>

			<div className="fourth-block">
				<h1>Contact me</h1>

				<p>
					Hledám příležitost, kde bych mohl své dovednosti dále rozvíjet a přispět svým nadšením pro moderní frontendový
					vývoj.
				</p>

				<img src={circle} className="circle-icon" alt="" />
				<Email />
			</div>
		</section>
	);
};

export default About;
