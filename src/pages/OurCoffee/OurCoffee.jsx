import {BackgroundImageContext} from '../../context';
import HeaderNextPages from '../../components/Header/HeaderNextPages';
import Footer from '../../components/Footer/Footer';
import AboutOurBeans from '../../components/Section-About-Our-Beans/AboutOurBeans';
import Filter from '../../components/Filter/Filter';


const OurCoffee = () => {
    return (
        <BackgroundImageContext.Provider value={{backgroundImage: '/header-image/our-coffee.jpg'}}>
            <HeaderNextPages title={'Our Coffee'} height={{height: '260px'}} marginTop={{marginTop: '60px'}} />
            <AboutOurBeans/>
            <Filter/>
            <Footer/>
        </BackgroundImageContext.Provider>
    );
};

export default OurCoffee;