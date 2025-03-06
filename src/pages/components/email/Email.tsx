import './Email.scss';

const Email = () => {
    return (
        <section className='email'>
            <h3>Email</h3>
            <form action="">
                <input type="text" id="input-name" />
                <input type="email" id="input-email"/>
                <input type="tel" id="input-tel"/>
                <input type="text" id="input-company" />
                <input type="text" id="input-message"/>
                <input type="submit" />
            </form>
        </section>
    );
};

export default Email;
