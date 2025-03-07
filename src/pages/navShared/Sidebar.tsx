import { NavLink } from 'react-router-dom';
import './scss/Sidebar.scss';
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState('');

    return (
        <header>
            <nav className={`sidebar ${openMenu}`}>
                <button onClick={() => setOpenMenu(() => (openMenu ? '' : 'open'))}>
                    <IoMenuSharp />
                </button>
                <NavLink className={`link ${openMenu}`} to="/" end>
                    About me
                </NavLink>
                <NavLink className={`link ${openMenu}`} to="/projects">
                    Projects
                </NavLink>
                <NavLink className={`link ${openMenu}`} to="/gallery">
                    Gallery
                </NavLink>
                <NavLink className={`link ${openMenu}`} to="/resume">
                    Životopis
                </NavLink>
                <NavLink className={`link ${openMenu}`} to="/github">
                    Github
                </NavLink>
            </nav>
        </header>
    );
};

export default Sidebar;
