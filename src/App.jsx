import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from './components/Home/About';


import Sectors from './pages/Sectors';
import Aboutus from './pages/Aboutus';

const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/Aboutus" element={<Aboutus />} />

    </Routes>
  </Router>
  <Footer/>
  </>
  
  )
}

export default App
