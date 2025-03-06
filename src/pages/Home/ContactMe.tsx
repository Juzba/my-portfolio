import './scss/ContactMe.scss';
import Email from '../components/email/Email';

const ContactMe = () => {
    return (
        <section className="contact-me">
            <h1>Contact me</h1>
            <Email />
        </section>
    );
};

export default ContactMe;
