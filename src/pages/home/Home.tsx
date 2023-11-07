import './home.css';
import Slider from '../../components/slider/Slider';
import HomePhotos1 from '../../components/homePhotos1/HomePhotos1';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
        <>
            <div className='seccions seccionToWaitImages flex column'>
                <Slider/>        
                <HomePhotos1/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;