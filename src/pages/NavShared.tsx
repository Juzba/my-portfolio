import { Outlet } from 'react-router-dom';
import Footer from './navShared/Footer';
import Sidebar from './navShared/Sidebar';
import "./scss/NavShared.scss"

const NavShared = () => {
    return (
        <section className='navigation-shared'>
            <Sidebar/>
            <div className='right-side'>
                <Outlet />
                <Footer />
            </div>
        </section>
    );
};

export default NavShared;
