import './Email.scss';

const defaultState: {name: string, email: string, tel: string, company: string, message: string} = {
    name: '',
    email: '',
    tel: "",
    company: '',
    message: '',
};

const Email = () => {
    return (
        <section className="email">
            <h3>Email</h3>
            <form action="">
                <input type="text" id="input-name" placeholder="Jméno *" />
                <input type="email" id="input-email" placeholder="Email *" />
                <input type="tel" id="input-tel" placeholder="Telefon" />
                <input type="text" id="input-company" placeholder="Firma" />
                <textarea maxLength={800} name="message" id=""></textarea>
                <input type="submit" />
            </form>
        </section>
    );
};

export default Email;
