import { NavLink } from "react-router-dom";
import rainbow2 from "../../images/rainbow2.png";
import "./scss/Sidebar.scss";
import { IoMenuSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FiHome } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import { SiServerless } from "react-icons/si";
import UseGetAxios from "../components/hooks/UseGetAxios";

const url = "https://portfolio-backend-juzba-h7dtdva0fvadach3.westeurope-01.azurewebsites.net/api/Online";

const Sidebar = () => {
	const { fetchData } = UseGetAxios(url);
	const [openMenu, setOpenMenu] = useState("");
	const [serverStatus, setServerStatus] = useState(false);
	const sidebar = useRef<HTMLDivElement | null>(null);

	const sidebarCloseOnClickOnWindow = (e: MouseEvent) => {
		if (sidebar.current && !sidebar.current.contains(e.target as Node)) {
			setOpenMenu("");
		}
	};

	useEffect(() => {
		if (openMenu) {
			document.addEventListener("click", sidebarCloseOnClickOnWindow);

			return () => document.removeEventListener("click", sidebarCloseOnClickOnWindow);
		}
	});

	useEffect(() => {
		fetchData().then((data) => {
			if (data) {
				if (data === "Server je online!") setServerStatus(true);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<header>
			<nav ref={sidebar} className={`sidebar ${openMenu}`} id="sidebar">
				<button onClick={() => setOpenMenu(() => (openMenu ? "" : "open"))}>
					<IoMenuSharp />
				</button>

				<div className="nav-box">
					<NavLink onClick={() => setOpenMenu("")} className={`link ${openMenu}`} to="/" end>
						<FiHome className="icon" />
						<p>About me</p>
					</NavLink>
					<NavLink onClick={() => setOpenMenu("")} className={`link ${openMenu}`} to="/projects">
						<FiCoffee className="icon" />
						<p>Projects</p>
					</NavLink>
					{/* <NavLink onClick={()=>setOpenMenu("")} className={`link ${openMenu}`} to="/gallery">
					<FiImage className="icon" />
					<p>Gallery</p>
					</NavLink> */}
					<NavLink onClick={() => setOpenMenu("")} className={`link ${openMenu}`} to="/resume">
						<FiFileText className="icon" />
						<p>Životopis</p>
					</NavLink>
					<NavLink onClick={() => setOpenMenu("")} className={`link ${openMenu}`} to="/github">
						<FiGithub className="icon" />
						<p>Github</p>
					</NavLink>
				</div>
				<div className="server-stat">
					<SiServerless className={serverStatus ? "icon active" : "icon"} />
					<p>online</p>
				</div>

				<img className="rainbow" src={rainbow2} alt="" />
			</nav>
		</header>
	);
};

export default Sidebar;
