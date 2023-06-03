import React, { useContext } from 'react';
import { BackgroundImageContext } from '../../context';
import styles from './Header.module.css'
import '../../styles/App.css'
import Navbar from '../UI/Navbar/Navbar';

const Header = () => {
    const {backgroundImage} = useContext(BackgroundImageContext)
    const pageStyle = {
        backgroundImage: `url(${backgroundImage})`
    }

    return (
        <header className={styles.header} style={pageStyle}>
            <div className='container'>
                <Navbar/>
                <div className={styles.content}>
                    <h1>Everything You Love About Coffee</h1>
                    <div className={styles.divider}>
                        <div className={styles.line}></div>
                        <img src="/images/coffee-beans-white.svg" alt="coffee beans image" />
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.descr}>
                        <p>We makes every day full of energy and taste</p>
                        <p>Want to try our beans?</p>
                    </div>
                    <a className={styles.btn} href="#">More</a>
                </div>
            </div>
        </header>
    );
};

export default Header;