import { useState } from 'react'
import { BrowserRouter as  Router, Route, Routes, useNavigate, useParams } from "react-router-dom";
import {} from 'react-icons/rx'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Aboutus from './Components/About/Aboutus';
import Contact from './Components/Contact/Contact';
import Singlevilla from './Components/Vilas/Singlevilla';
import Villas from './Components/Vilas/Villas';
import './App.css'

function App() {
 
  return (
    <>
          <Router>
            <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/aboutus' element={<Aboutus/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/villas' element={<Villas/>}/>
                  <Route path='/villa/:id' element={<Singlevilla/>}/>
              </Routes>
              <Footer/>
          </Router>
    </>
  )
}

export default App
