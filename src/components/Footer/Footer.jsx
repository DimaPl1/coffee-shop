import React from 'react';
import styles from './Footer.module.css'
import Divider from '../UI/Divider/Divider';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <nav className={styles.nav}>
                    <div className={styles.navbar__links}>
                        <NavLink to="/">
                            <img src="/nav-logo/coffee-beans-black.svg" alt="Logo" />
                            Coffee house
                        </NavLink>
                        <NavLink to="/our-coffee">Our Coffee</NavLink>
                    </div>
                </nav>
                <Divider margin={{marginBottom: '20px'}} />
            </div>
        </footer>
    );
};

export default Footer;