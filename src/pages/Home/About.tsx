import "./About.scss";
import Slider from "../components/slider/Slider";
import imgBaldMan from "../../images/bman.png";
import robot from "../../images/kuka.png";
import working from "../../images/working.png";
import Email from "../components/email/Email";

const About = () => {
	return (
		<section className="about">
			{/* /////////////////////// 1 */}
			<div className="about-me">
				<div className="box">
					<div className="nadpis">
						<h1>O mně</h1>
						<p>
							Jmenuji se Jiří Strnadel a věnuji se vývoji webových aplikací se zaměřením na React a TypeScript.
							Programování mě nadchlo natolik, že mu věnuji každý volný moment už více než rok a půl. Neustále se učím
							nové technologie a zdokonaluji své dovednosti.
						</p>
					</div>
					<img className="me" src={imgBaldMan} alt="" />
				</div>

				<div className="box">
					<img className="working" src={working} alt="" />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptatem cumque illum enim doloremque
						incidunt laborum sunt nulla a molestiae iure maiores, culpa nesciunt ex, unde consectetur repellat et hic.
					</p>
				</div>
			</div>

			{/* /////////////////////////  2 */}
			<div className="technologies">
				<h1>Technologies</h1>
				<Slider />
				<p>
					Mám zkušenosti s JavaScriptem, SCSS, HTML, CSS, Git a databázemi jako Firebase. Zároveň si rozšiřuji znalosti
					v C#, kde se pohybuji na mírně pokročilé úrovni.
				</p>
			</div>

			{/* ///////////////////// 3 */}

			<div className="now">
				<img src={robot} alt="" />
				<p>
					Nyní pracuji jako elektro údržbář a programátor průmyslových robotů Kuka, Reis, Yaskawa a PLC Simatic. Tato
					práce mě naučila analytickému myšlení a efektivnímu řešení problémů, což dnes využívám při vývoji aplikací.
				</p>
			</div>

			{/* ////////////////////////// 4 */}
			<div className="contact-me">
				<h1>Contact me</h1>

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
