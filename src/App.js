import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Footer from './Components/Footer';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={[<Navbar/>,< Hero />, <Services/> ,<About/>]}/>
        <Route exact path="/login" element={[<Navbar/>,<Login/>]}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
