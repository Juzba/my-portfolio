import { useEffect, useReducer, useState } from 'react';
import './Email.scss';

interface State {
    name: string;
    email: string;
    message: string;
}

const reducer = (state: State, action: { type: string; payload: string }) => {
    switch (action.type) {
        case 'setName':
            return { ...state, name: action.payload };
        case 'setEmail':
            return { ...state, email: action.payload };
        case 'setMessage':
            return { ...state, message: action.payload };

        default:
            console.error('Chyba form Email - UseReducer -> reducer nenašel hodnotu action.type');
            return state;
    }
};

const defaultState: State = {
    name: '',
    email: '',
    message: '',
};

const Email = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    const { name, email, message } = state;
    const [emailMessage, setEmailMessage] = useState('');

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name && email && message) {
            console.log(`Sending: ${name}, ${email}, ${message}`);



            
            fetch('https://localhost:7143/api/email', {
                method: 'POST', // nebo 'PUT', 'DELETE' atd.
                headers: {
                    'Content-Type': 'application/json', // Typ obsahu
                },
                body: JSON.stringify(state), // Převod dat na JSON
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Zpracování odpovědi
                })
                .then(() => setEmailMessage('Odesláno:'))
                .catch((error) => {
                    console.error('Error:', error);
                    setEmailMessage('Odeslání se nezdařilo.')
                });
        } else {
            setEmailMessage('Chybí údaje!');
        }
    };

    // after 5s clear error message
    useEffect(() => {
        if (emailMessage) {
            const t1 = setTimeout(() => {
                setEmailMessage('');
            }, 5000);

            return () => {
                clearTimeout(t1);
            };
        }
    }, [emailMessage]);

    return (
        <section className="email">
            <form onSubmit={submitForm}>
                <div className={emailMessage ? 'contact-me active' : 'contact-me'}>
                    {emailMessage ? <p className="message">{emailMessage}</p> : <p className="message">Kontaktní formulář</p>}
                </div>
                <input
                    value={name}
                    onChange={(e) => {
                        dispatch({ type: 'setName', payload: e.target.value });
                    }}
                    minLength={4}
                    maxLength={30}
                    type="text"
                    id="input-name"
                    placeholder="Jméno *"
                />
                <input
                    value={email}
                    onChange={(e) => {
                        dispatch({ type: 'setEmail', payload: e.target.value });
                    }}
                    minLength={4}
                    maxLength={30}
                    type="email"
                    id="input-email"
                    placeholder="Email *"
                />
                <textarea
                    value={message}
                    onChange={(e) => {
                        dispatch({ type: 'setMessage', payload: e.target.value });
                    }}
                    maxLength={800}
                    name="message"
                    id=""></textarea>
                <input type="submit" />
            </form>
        </section>
    );
};

export default Email;
