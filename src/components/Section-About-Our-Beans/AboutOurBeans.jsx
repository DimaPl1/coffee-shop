import React from 'react';
import styles from './AboutOurBeans.module.css';
import '../../styles/App.css';
import Divider from '../UI/Divider/Divider';

const AboutOurBeans = () => {
    return (
        <div className={styles.aboutOurBeans}>
            <div className='container'>
                <div className={styles.aboutWrapper}>
                    <img src="/images/about-our-beans.jpg" alt="about our beans" />
                    <div className={styles.content}>
                        <h2>About our beans</h2>
                        <Divider/>
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        </p>
                        <p>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. <br /> As greatly removed calling pleased improve an. Last ask him cold feel <br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                    </div>
                </div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
};

export default AboutOurBeans;