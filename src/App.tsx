import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar';
import "./styles/generalStyles.css";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>     
                <Route path="*" element={<Home/>}/>            
            </Routes>
        </BrowserRouter>
    );
}

export default App;
