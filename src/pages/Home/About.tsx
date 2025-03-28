import './About-First-Box.scss';
import './About-Second-Box.scss';
import './About-Third-Box.scss';
import './About-Responsivity-Width.scss';
import TechBars from '../components/tech_bars/TechBars';
import Slider from '../components/slider/Slider';
import imgBaldMan from '../../images/bman.png';
import robot from '../../images/kuka.png';
import comp from '../../images/comp.png';
import Email from '../components/email/Email';
import StackIcon from 'tech-stack-icons';
import { useEffect, useState } from 'react';


const About = () => {
    // const [animation, setAnimation] = useState({
    //     text0: false,
    //     text1: false,
    //     text2: false,
    //     text3: false,
    //     text4: false,
    //     text5: false,
    //     text6: false,
    // });
    const [animation0, setAnimation0] = useState(false)
    const [animation1, setAnimation1] = useState(false)
    const [animation2, setAnimation2] = useState(false)
    const [animation3, setAnimation3] = useState(false)
    const [animation4, setAnimation4] = useState(false)
    const [animation5, setAnimation5] = useState(false)
    const [animation6, setAnimation6] = useState(false)

    // console.log(animation);
    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
				
                if (entry.isIntersecting && entry.target.id === 'text0') setAnimation0(true);
                else if (entry.isIntersecting && entry.target.id === 'text1') setAnimation1(true);
                else if (entry.isIntersecting && entry.target.id === 'text2') setAnimation2(true);
                else if (entry.isIntersecting && entry.target.id === 'text3') setAnimation3(true);
                else if (entry.isIntersecting && entry.target.id === 'text4') setAnimation4(true);
                else if (entry.isIntersecting && entry.target.id === 'text5') setAnimation5(true);
                else if (entry.isIntersecting && entry.target.id === 'text6') setAnimation6(true);
            });
        });

        const text0 = document.getElementById('text0');
        const text1 = document.getElementById('text1');
        const text2 = document.getElementById('text2');
        const text3 = document.getElementById('text3');
        const text4 = document.getElementById('text4');
        const text5 = document.getElementById('text5');
        const text6 = document.getElementById('text6');

        if (text0) {
            observer.observe(text0);
        } else console.error('text0 nenalezen observerem! Coponent-About');

        if (text1) {
            observer.observe(text1);
        } else console.error('text1 nenalezen observerem! Coponent-About');

        if (text2) observer.observe(text2);
        else console.error('text2 nenalezen observerem! Coponent-About');

        if (text3) observer.observe(text3);
        else console.error('text3 nenalezen observerem! Coponent-About');

        if (text4) observer.observe(text4);
        else console.error('text4 nenalezen observerem! Coponent-About');

        if (text5) observer.observe(text5);
        else console.error('text3 nenalezen observerem! Coponent-About');

        if (text6) observer.observe(text6);
        else console.error('text4 nenalezen observerem! Coponent-About');
    }, []);

    // if (loading) return <h1>Loading...</h1>;

    return (
        <section className="about">
            <div className="first-block">
                <div className="box">
                    <div className="nadpis">
                        <h1 className={animation0 ? 'active t0' : 't0'}>O mně</h1>
                        <p className={animation0 ? 't1 active' : 't1'}>Jmenuji se Jiří Strnadel</p>
                        <p className={animation0 ? 't2 active' : 't2'} id="text0">
                            a věnuji se vývoji webových aplikací se zaměřením na React a TypeScript.
                        </p>
                        <div className={animation0 ? 'icons-box active' : 'icons-box'}>
                            <StackIcon className="react-icon react" name={'reactjs'} />
                            <StackIcon className="react-icon typescript" name={'typescript'} />
                            <StackIcon className="react-icon csharp" name={'csharp'} />
                        </div>
                    </div>
                    <img className="me" src={imgBaldMan} alt="" />
                </div>
            </div>

            <div className="second-block">
                <div className="box">
                    <img className={animation1 ? 'working active' : 'working'} id="text1" src={comp} alt="" />
                    <p className={animation2 ? 'active' : ''} id="text2">
                        Programování mě nadchlo natolik, že mu věnuji každý volný moment už více než rok a půl. Neustále se učím nové
                        technologie a zdokonaluji své dovednosti.
                    </p>
                </div>
            </div>

            <div className="third-block">
                <Slider />
            </div>

            <div className="fourth-block">
                <h2 className={animation3 ? 'active' : ''} id="text3">
                    Zkušenosti
                </h2>
                <p className={animation4 ? 'active' : ''} id="text4">
                    Mám zkušenosti s JavaScriptem, SCSS, HTML, CSS, Git a databázemi jako Firebase. Zároveň si rozšiřuji znalosti v C#, kde
                    se pohybuji na mírně pokročilé úrovni.
                </p>
                <TechBars />
            </div>

            <div className="fifth-block">
                <p className={animation5 ? 'active' : ''} id="text5">
                    Nyní pracuji jako elektro údržbář a programátor průmyslových robotů Kuka, Reis, Yaskawa a PLC Simatic. Tato práce mě
                    naučila analytickému myšlení a efektivnímu řešení problémů, což dnes využívám při vývoji aplikací.
                </p>
                <div className="robot-div">
                    <img className="robot" src={robot} alt="" />
                </div>
            </div>

            <div className="sixth-block">
                <p className={animation6 ? 'text6 active' : 'text6'} id="text6">
                    Hledám příležitost, kde bych mohl své dovednosti dále rozvíjet a přispět svým nadšením pro moderní frontendový vývoj.
                </p>

                <Email />
            </div>
        </section>
    );
};

export default About;
