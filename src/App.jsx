import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './components/Home'
import HairCuts from './components/HairCuts'
import BookNow from './components/BookNow'
import AboutMe from './components/AboutMe'
import Reviews from './components/Reviews'
import Calendly from './components/Calendly'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { IconContext } from "@react-icons/all-files"



import './App.css'

function App() {

  return (
    <div className="app">
      <NavBar />
      <Routes>
          <Route path="/haircuts" element={<HairCuts />} />
          <Route path="/cal" element={<Calendly />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
      </Routes>
      <div className="footer-navbar">
        <div className="footer-navbar-left">
          <div><Link className="navlink"to="/haircuts">haircuts</Link></div>
          <div><Link className="navlink" to="/cal">book now</Link></div>
          <div><Link className="navlink" to="/reviews">reviews</Link></div>
          <div><Link className="navlink" to="/aboutme">about me</Link></div>
          <div><Link className="navlink"to="/contact">contact us</Link></div>
        </div>
        <div className="vl"></div>
        <div className="footer-navbar-right">
          <div>
            <ul>
              <li> taper fades</li>
              <li> -high top fades-</li>
              <li>low top fades-</li>
              <li>southside fades-</li>
              <li>line-ups-</li>
              <li><Link className="navlink" to="/haircuts"> and more...</Link></li>
            </ul>
          </div>
          <div className="social-icons">
            <div>
              <IconContext.Provider
                value={{ color: 'blue', size: '50px' }}
              >
              <FaFacebook />
              </IconContext.Provider>
            </div>
            <div>
              <AiFillInstagram />
            </div>
          </div>
          <div><Link className="navlink"to="/cal" style={{borderRadius: "10px", border: "1px solid black", padding: "5px"}}>booknow!</Link></div>
        </div>
      </div>
    </div>
  )
}

export default App
