import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import './App.css';

export default function App() {
  return(
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />   
      </Routes>
      <Footer />
    </Router>
  ) 
}