import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App

