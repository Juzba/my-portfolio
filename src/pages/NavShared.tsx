import { Outlet } from 'react-router-dom';
import Footer from './navShared/Footer';
import Navbar from './navShared/Navbar';

const NavShared = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default NavShared;
