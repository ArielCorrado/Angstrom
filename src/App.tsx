import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar';
import "./styles/generalStyles.css";
import "./styles/animations.css";
import "./pages/team/team.css";
import { SpinnerContext } from './context/spinnerContext';
import { SpinnerContextType } from './types/types';
import { useContext } from 'react';
import Team from './pages/team/Team';
import "./components/cv/cv.css";
import { Navigate } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import WsFloating from './components/wsFloating/WsFloating';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
    const { spinner } = useContext <SpinnerContextType> (SpinnerContext);

    return (
        <BrowserRouter>
            {spinner}
            <NavBar/>
            <Routes>
                <Route path="/home" element={<Home/>}/> 
                <Route path="/team" element={<Team/>}/>     
                <Route path="/contact" element={<Contact/>}/>     
                <Route path="/about" element={<About/>}/>  
                <Route path="/portfolio" element={<Portfolio/>}/>  
                <Route path="*" element={<Navigate to="/home"/>}/>            
            </Routes>
            <WsFloating/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
