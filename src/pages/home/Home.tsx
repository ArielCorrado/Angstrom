import './home.css';
import Slider from '../../components/slider/Slider';
import BgHome from '../../components/bgHome/BgHome';

function Home() {
    return (
        <>
            <BgHome/>
            <div className='seccions flex column'>
                <Slider/>        
            </div>
        </>
    );
}

export default Home;