import pdfResume from "../assets/Zivotopis 2025.pdf"
import "./scss/Resume.scss"

const Resume = () => {
    return (
        <section className="resume-page">
            <h1>Životopis</h1>
            <iframe className="resume" src={pdfResume}></iframe>
        </section>
    );
};

export default Resume;
