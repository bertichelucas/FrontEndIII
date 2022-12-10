
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/dentist/:id" element={<Detail/>}/>
                <Route path="/contacto" element={<Contact/>}/>
                <Route path="/destacados" element={<Favs/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
