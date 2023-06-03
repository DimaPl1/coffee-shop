import React, { useContext } from 'react';
import { BackgroundImageContext } from '../../context';
import Navbar from '../UI/Navbar/Navbar';
import styles from './Header.module.css';

const HeaderNextPages = (props) => {

    const {backgroundImage} = useContext(BackgroundImageContext)
    const {height} = props.height;
    const pageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        height: height
    }


    return (
        <header className={styles.header} style={pageStyle}>
            <div className='container'>
                <Navbar/>
                <div className={styles.content} style={props.marginTop}>
                    <h1>{props.title}</h1>
                </div>
            </div>
        </header>
    );
};

export default HeaderNextPages;