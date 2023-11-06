import './home.css';
import Slider from '../../components/slider/Slider';
import BgHome from '../../components/bgHome/BgHome';
import HomePhotos1 from '../../components/homePhotos1/HomePhotos1';

function Home() {
    return (
        <>
            <div className='seccions seccionToWaitImages flex column'>
                <BgHome/>
                <Slider/>        
            </div>
            <HomePhotos1/>
        </>
    );
}

export default Home;