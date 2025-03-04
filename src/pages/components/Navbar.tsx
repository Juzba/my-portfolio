import { NavLink } from 'react-router-dom';
import './scss/Navbar.scss';
import { AiTwotoneHome } from 'react-icons/ai';
import { AiTwotoneFolder } from "react-icons/ai";
import { AiTwotonePicture } from "react-icons/ai";
import { IconType } from 'react-icons';

const Navbar = () => {
  const icon :IconType = AiTwotoneHome
    return (
        <nav className="navbar">
            <NavLink className={'link'} to="/" end>
            {icon}
            </NavLink>
            <NavLink className={'link'} to="/projects">
                {AiTwotoneFolder}Projects
            </NavLink>
            <NavLink className={'link'} to="/gallery">
                {AiTwotonePicture}Gallery
            </NavLink>
        </nav>
    );
};

export default Navbar;
