import { NavLink } from "react-router-dom";
import rainbow2 from "../../images/rainbow2.png";
import "./scss/Sidebar.scss";
import { IoMenuSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FiHome } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiImage } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";

const Sidebar = () => {
	const [openMenu, setOpenMenu] = useState("");
	const sidebar = useRef<HTMLDivElement | null>(null);


	const sidebarCloseOnClickOnWindow = (e: MouseEvent) => {
		console.log("click");
		if (sidebar.current && !sidebar.current.contains(e.target as Node)) {
			setOpenMenu("");
		}
	};

	useEffect(() => {
		if (openMenu) {
			document.addEventListener("mousedown", sidebarCloseOnClickOnWindow);

			return () => document.removeEventListener("mousedown", sidebarCloseOnClickOnWindow);
		}
	});

	
	return (
		<header>
			<nav ref={sidebar} className={`sidebar ${openMenu}`} id="sidebar">
				<button onClick={() => setOpenMenu(() => (openMenu ? "" : "open"))}>
					<IoMenuSharp />
				</button>
				<NavLink className={`link ${openMenu}`} to="/" end>
					<FiHome className="icon" />
					<p>About me</p>
				</NavLink>
				<NavLink className={`link ${openMenu}`} to="/projects">
					<FiCoffee className="icon" />
					<p>Projects</p>
				</NavLink>
				{/* <NavLink className={`link ${openMenu}`} to="/gallery">
					<FiImage className="icon" />
					<p>Gallery</p>
				</NavLink> */}
				<NavLink className={`link ${openMenu}`} to="/resume">
					<FiFileText className="icon" />
					<p>Životopis</p>
				</NavLink>
				<NavLink className={`link ${openMenu}`} to="/github">
					<FiGithub className="icon" />
					<p>Github</p>
				</NavLink>
				<img className="rainbow" src={rainbow2} alt="" />
			</nav>
		</header>
	);
};

export default Sidebar;
