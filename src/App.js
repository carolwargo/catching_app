import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Train from './pages/Train';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/Signup'
import Login from './pages/Login';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/train" element={<Train />} />
        <Route path="/login" element={<Login />} /> {/* Add the login route */}
        <Route path="/signup" element={<SignUp />} /> {/* Add the sign-up route */}
      </Routes>
      <Footer />
    </Router>
  );
}
