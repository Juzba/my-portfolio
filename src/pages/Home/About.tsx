import React from "react";
import "./About-First-Box.scss";
import "./About-Second-Box.scss";
import "./About-Third-Box.scss";
import myPhoto from "../../images/bman.png";
import robot from "../../images/kuka.png";
import comp from "../../images/comp.png";
import lines from "../../images/lines.png"
import hands from "../../images/hands.png"
import StackIcon from "tech-stack-icons";
import { useEffect, useState } from "react";

const TechBars = React.lazy(() => import("../components/tech_bars/TechBars"));
const Slider = React.lazy(() => import("../components/slider/Slider"));
const Email = React.lazy(() => import("../components/email/Email"));

const About = () => {
	const [animation0, setAnimation0] = useState(false);
	const [animation1, setAnimation1] = useState(false);
	const [animation2, setAnimation2] = useState(false);
	const [animation3, setAnimation3] = useState(false);
	const [animation4, setAnimation4] = useState(false);
	const [animation5, setAnimation5] = useState(false);
	const [animation6, setAnimation6] = useState(false);

	useEffect(() => {
		window.scroll({ top: 0 });
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.target.id === "text0") setAnimation0(true);
				else if (entry.isIntersecting && entry.target.id === "text1") setAnimation1(true);
				else if (entry.isIntersecting && entry.target.id === "text2") setAnimation2(true);
				else if (entry.isIntersecting && entry.target.id === "text3") setAnimation3(true);
				else if (entry.isIntersecting && entry.target.id === "text4") setAnimation4(true);
				else if (entry.isIntersecting && entry.target.id === "text5") setAnimation5(true);
				else if (entry.isIntersecting && entry.target.id === "text6") setAnimation6(true);
			});
		});

		const text0 = document.getElementById("text0");
		const text1 = document.getElementById("text1");
		const text2 = document.getElementById("text2");
		const text3 = document.getElementById("text3");
		const text4 = document.getElementById("text4");
		const text5 = document.getElementById("text5");
		const text6 = document.getElementById("text6");

		if (text0) {
			observer.observe(text0);
		} else console.error("text0 nenalezen observerem! Coponent-About");

		if (text1) {
			observer.observe(text1);
		} else console.error("text1 nenalezen observerem! Coponent-About");

		if (text2) observer.observe(text2);
		else console.error("text2 nenalezen observerem! Coponent-About");

		if (text3) observer.observe(text3);
		else console.error("text3 nenalezen observerem! Coponent-About");

		if (text4) observer.observe(text4);
		else console.error("text4 nenalezen observerem! Coponent-About");

		if (text5) observer.observe(text5);
		else console.error("text3 nenalezen observerem! Coponent-About");

		if (text6) observer.observe(text6);
		else console.error("text4 nenalezen observerem! Coponent-About");
	}, []);

	return (
		<section className="about">
			<div className="header">
				<h1>About me</h1>
			</div>
			<div className="first-block">
				<div className="box">
					<div className="text-icon-box">
						<div className="text-box">
							<p className={animation0 ? "t1 active" : "t1"}>
								Jmenuji se <span>Jiří Strnadel</span>
							</p>
							<p className={animation0 ? "t2 active" : "t2"} id="text0">
								Věnuji se vývoji webových aplikací, přičemž se zaměřuji především na technologie React a TypeScript.
							</p>
						</div>
						<div className={"icons-box"}>
							<StackIcon className={animation0 ? "react-icon react active" : "react-icon react"} name={"reactjs"} />
							<StackIcon className={animation0 ? "react-icon active" : "react-icon"} name={"typescript"} />
							<StackIcon className={animation0 ? "react-icon active" : "react-icon"} name={"csharp"} />
						</div>
					</div>
					<div className="box-myphoto">
						<img className="me" src={myPhoto} alt="" />
						<img className="me2" src={lines} alt="" />
					</div>
				</div>
			</div>

			<div className="second-block">
				<div className="box">
					<div className="box-workingimg">
						<img className={animation1 ? "working active" : "working"} id="text1" src={comp} alt="" />
					</div>
					<div className="box-text">
						<p className={animation2 ? "active" : ""} id="text2">
							V současnosti také aktivně pracuji s jazykem C#, kde se nacházím na středně pokročilé úrovni. Zaměřuji se
							na rozšiřování svých znalostí, zejména v oblasti Web API, což považuji za klíčové pro usnadnění komunikace
							mezi front-endem a back-endem mých aplikací. I když se teprve učím nové koncepty a techniky, jsem nadšený
							z toho, jak tyto znalosti mohou obohatit můj přístup k vývoji sofistikovaných webových řešení.
						</p>
					</div>
				</div>
			</div>

			<div className="third-block">
				<Slider />
			</div>

			<div className="fourth-block">
				<div className="box-tech-bars">
					<TechBars />
				</div>
				<div className="box-text">
					<h2 className={animation3 ? "active" : ""} id="text3">
						Zkušenosti
					</h2>
					<p className={animation4 ? "active" : ""} id="text4">
						Programování mě natolik nadchlo, že mu věnuji každý volný moment již více než rok a půl. Neustále se učím
						nové technologie a snažím se neustále zdokonalovat své dovednosti. Mám zkušenosti s JavaScriptem,
						SCSS, HTML a CSS, stejně jako s verzovacím nástrojem Git a databází Firebase.
					</p>
				</div>
			</div>

			<div className="fifth-block">
				<div className="box-text">
					<p className={animation5 ? "active" : ""} id="text5">
						Kromě toho pracuji jako elektro údržbář a programátor průmyslových robotů od značek Kuka, Reis, Yaskawa a
						PLC Simatic. Tato pozice mi poskytla cenné zkušenosti v analytickém myšlení a efektivním řešení problémů,
						což dnes aplikuji při vývoji aplikací. Moje práce v technických oborech mě naučila důležitosti detailu a
						preciznosti, které jsou klíčové při programování a vývoji softwarových řešení.
					</p>
				</div>
				<div className="box-robot">
					<div className="robot-div">
						<img className="robot" src={robot} alt="" />
					</div>
				</div>
			</div>

			<div className="sixth-block">
				<p className={animation6 ? "text6 active" : "text6"} id="text6">
					Hledám příležitost, kde bych mohl své dovednosti dále rozvíjet a přispět svým nadšením pro moderní frontendový
					vývoj. Věřím, že s mojí vášní a odhodláním mohu přinést hodnotu vašemu týmu a zapojit se do zajímavých
					projektů, které posunou moje schopnosti na novou úroveň.
				</p>
			</div>

			<div className="seven-block">
				<div className="box-email">
					<Email />
				</div>
				<div className="box-text">

					<img src={hands} alt="" />
				</div>
			</div>
		</section>
	);
};

export default About;
