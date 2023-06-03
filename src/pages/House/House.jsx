import Header from '../../components/Header/Header';
import { BackgroundImageContext } from '../../context';
import About from '../../components/Section-AboutUs/About';
import OurBest from '../../components/Section-Our-Best/OurBest';
import Footer from '../../components/Footer/Footer';


const House = () => {
    return (
        <BackgroundImageContext.Provider value={{backgroundImage: '/header-image/main-bg.jpg'}}>
            <Header/>
            <About/>
            <OurBest/>
            <Footer/>
        </BackgroundImageContext.Provider>
    );
};

export default House;