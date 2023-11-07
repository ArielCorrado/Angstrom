import './home.css';
import Slider from '../../components/slider/Slider';
import HomePhotos1 from '../../components/homePhotos1/HomePhotos1';

function Home() {
    return (
        <>
            <div className='seccions seccionToWaitImages flex column'>
                <Slider/>        
                <HomePhotos1/>
            </div>
        </>
    );
}

export default Home;