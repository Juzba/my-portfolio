import './scss/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    // fill="#0099ff"
                    fill-opacity="1"
                    d="M0,160L120,138.7C240,117,480,75,720,90.7C960,107,1200,181,1320,218.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
            <div className="background">
                <p>&copy; Jiří Strnadel, 2025</p>
            </div>
        </footer>
    );
};

export default Footer;
