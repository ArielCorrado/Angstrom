import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar';
import "./styles/generalStyles.css";
import "./styles/animations.css";
import { SpinnerContext } from './context/spinnerContext';
import { SpinnerContextType } from './types/types';
import { useContext } from 'react';
import Team from './pages/team/Team';

function App() {
    const { spinner } = useContext <SpinnerContextType> (SpinnerContext);

    return (
        <BrowserRouter>
            {spinner}
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/team" element={<Team/>}/>     
                <Route path="*" element={<Home/>}/>            
            </Routes>
        </BrowserRouter>
    );
}

export default App;
