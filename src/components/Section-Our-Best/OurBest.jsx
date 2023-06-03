import React from 'react';
import '../../styles/App.css'
import CardOurBest from '../UI/CardOurBest/CardOurBest';
import styles from './OurBest.module.css'


const OurBest = () => {
    return (
        <div className={styles.ourBest}>
            <div className='container'>
                <h2>Our Best</h2>
                <div className={styles.cardWrapper}>
                    <CardOurBest 
                        info={{ img: '/images/solimo.jpg', 
                                descr: 'Solimo Coffee Beans 2 kg', 
                                price: '10.73$'
                        }} 
                    />
                    <CardOurBest 
                        info={{ img: '/images/presto.jpg', 
                                descr: 'Presto Coffee Beans 1 kg', 
                                price: '15.99$'
                        }} 
                    />
                    <CardOurBest 
                        info={{ img: '/images/aromistico.jpg', 
                                descr: 'AROMISTICO Coffee 1 kg', 
                                price: '6.99$'
                        }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default OurBest;