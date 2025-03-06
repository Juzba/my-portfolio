import "./scss/About.scss";
import imgBaldMan from "../../images/bman.png";

const About = () => {
	return (
		<section className="about">
			<div>
				<h1>O mně</h1>
				<p>
					Ahoj, jmenuji se Jiří Strnadel a věnuji se vývoji webových aplikací se zaměřením na React a TypeScript.
					Programování mě nadchlo natolik, že mu věnuji každý volný moment už více než rok a půl. Neustále se učím nové
					technologie a zdokonaluji své dovednosti.
				</p>
			</div>

			<img src={imgBaldMan} alt="" />

			{/* <p>
                Mám zkušenosti s JavaScriptem, SCSS, HTML, CSS, Git a databázemi jako Firebase. Zároveň si rozšiřuji znalosti v C#, kde se
                pohybuji na mírně pokročilé úrovni.
            </p>
            <p>
                Předtím jsem pracoval jako elektro údržbář a programátor průmyslových robotů Kuka, Reis, Yaskawa a PLC Simatic. Tato práce
                mě naučila analytickému myšlení a efektivnímu řešení problémů, což dnes využívám při vývoji aplikací.
            </p>
            <p>Hledám příležitost, kde bych mohl své dovednosti dále rozvíjet a přispět svým nadšením pro moderní frontendový vývoj.</p> */}
		</section>
	);
};

export default About;
