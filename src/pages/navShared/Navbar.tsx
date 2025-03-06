import { NavLink } from "react-router-dom";
import "./scss/Navbar.scss";
import { AiTwotoneHome } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState("");
	console.log(openMenu);

	return (
		<header>
			<nav className={`navbar ${openMenu}`}>
				<button onClick={() => setOpenMenu(() => (openMenu ? "" : "open"))}>
					<AiTwotoneHome />
				</button>
				<NavLink className={`link ${openMenu}`} to="/" end>
					Home
				</NavLink>
				<NavLink className={`link ${openMenu}`} to="/projects">
					Projects
				</NavLink>
				<NavLink className={`link ${openMenu}`} to="/gallery">
					Gallery
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
