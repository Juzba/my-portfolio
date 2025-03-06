import { useReducer } from "react";
import "./Email.scss";

interface State {
	name: string;
	email: string;
	tel: string;
	company: string;
	message: string;
}

const reducer = (state: State, action: { type: string; payload: string }) => {
	switch (action.type) {
		case "setName":
			return { ...state, name: action.payload };
		case "setEmail":
			return { ...state, email: action.payload };
		case "setTel":
			return { ...state, tel: action.payload };
		case "setCompany":
			return { ...state, company: action.payload };
		case "setMessage":
			return { ...state, message: action.payload };

		default:
			console.error("Chyba form Email - UseReducer -> reducer nenašel hodnotu action.type");
			return state;
	}
};

const defaultState: State = {
	name: "",
	email: "",
	tel: "",
	company: "",
	message: "",
};

const Email = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const { name, email, tel, company, message } = state;

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log(state);
	};

	return (
		<section className="email">
			<h3>Email</h3>
			<form onSubmit={submitForm}>
				<input
					value={name}
					onChange={(e) => {
						dispatch({ type: "setName", payload: e.target.value });
					}}
					type="text"
					id="input-name"
					placeholder="Jméno *"
				/>
				<input
					value={email}
					onChange={(e) => {
						dispatch({ type: "setEmail", payload: e.target.value });
					}}
					type="email"
					id="input-email"
					placeholder="Email *"
				/>
				<input
					value={tel}
					onChange={(e) => {
						dispatch({ type: "setTel", payload: e.target.value });
					}}
					type="tel"
					id="input-tel"
					placeholder="Telefon"
				/>
				<input
					value={company}
					onChange={(e) => {
						dispatch({ type: "setCompany", payload: e.target.value });
					}}
					type="text"
					id="input-company"
					placeholder="Firma"
				/>
				<textarea
					value={message}
					onChange={(e) => {
						dispatch({ type: "setMessage", payload: e.target.value });
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
