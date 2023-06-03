import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navbar__links}>
                <NavLink to='/'>
                    <img src="/nav-logo/coffee-beans.svg" alt="Logo" />
                    Coffee house
                </NavLink>
                <NavLink to="/our-coffee">Our Coffee</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;