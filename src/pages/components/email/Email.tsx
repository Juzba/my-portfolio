import { useEffect, useState } from "react";
import "./Email.scss";
import UseAxios from "../hooks/UseAxios";
import { MdOutlineMailOutline } from "react-icons/md";

// const url = "https://localhost:7143/Email/send";
const url = "https://portfolio-backend-juzba-h7dtdva0fvadach3.westeurope-01.azurewebsites.net/Email/send";

const Email = () => {
	const { error, fetchData } = UseAxios(url);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [emailInfo, setEmailInfo] = useState("");

	const sendEmail = async () => {
		const data = await fetchData({ name, message: `From email: ${email}. Message: ${message}` });
		const result = data as string;

		if (error) {
			setEmailInfo("Odeslání se nezdařilo.");
		} else {
			setEmailInfo(result);
			setMessage("");
			setEmail("");
			setName("");
		}
	};

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (name && email && message) {
			sendEmail();
			setEmailInfo("Odesílám...");
		} else {
			setEmailInfo("Chybné zadání!");
		}
	};

	// after 5s clear error message
	useEffect(() => {
		if (emailInfo) {
			const t1 = setTimeout(() => {
				setEmailInfo("");
			}, 5000);

			return () => {
				clearTimeout(t1);
			};
		}
	}, [emailInfo]);

	return (
		<section className="email-form">
			<form onSubmit={submitForm}>
				<div className={emailInfo ? "contact-me active" : "contact-me"}>
					{emailInfo ? <p className="message">{emailInfo}</p> : <p className="message">Kontaktní formulář</p>}
				</div>
				<div className="main-box">
					<div className="box-inputs">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							minLength={4}
							maxLength={30}
							type="text"
							className="inp-text"
							id="input-name"
							placeholder="Jméno *"
						/>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							minLength={4}
							maxLength={30}
							type="email"
							className="inp-text"
							id="input-email"
							placeholder="Email *"
						/>
					</div>
					<MdOutlineMailOutline className="email-icon" />
				</div>

				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					maxLength={800}
					name="message"
					id=""></textarea>
				<input className="send-button" type="submit" />
			</form>
		</section>
	);
};

export default Email;
