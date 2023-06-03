import { NavLink, useParams } from 'react-router-dom';
import {BackgroundImageContext} from '../../context/index';
import HeaderNextPages from '../Header/HeaderNextPages';
import Footer from '../Footer/Footer';
import img from './aromistico-big.jpg';
import styles from './ProductDetails.module.css';
import Divider from '../UI/Divider/Divider';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products[id];


    return (
        <BackgroundImageContext.Provider value={{backgroundImage: '/header-image/our-coffee.jpg'}}>
        <HeaderNextPages title={'Our Coffee'} height={{height: '260px'}} marginTop={{marginTop: '60px'}} />
            <div className='container'>
                <div className={styles.card_details}>
                    <div className={styles.img}>
                        <img src={img} alt="img" />
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>About it</h2>
                        <Divider/>
                        <p><strong>Country:</strong> {product.country}</p>
                        <p className={styles.descr}><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p><strong>Price:</strong> <span className={styles.price}>{product.price}</span></p>
                        <NavLink to='/our-coffee' className={styles.backLink}>Back to our coffee</NavLink>
                    </div>
                </div>
            </div>
        <Footer/>
        </BackgroundImageContext.Provider>
    );
};

export default ProductDetails;