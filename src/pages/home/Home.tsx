import './home.css';
import Slider from '../../components/slider/Slider';
import BgHome from '../../components/bgHome/BgHome';

function Home() {
    return (
        <>
            <div className='seccions seccionToWaitImages flex column'>
                <BgHome/>
                <Slider/>        
            </div>
        </>
    );
}

export default Home;