import React from 'react';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pics from './components/Pics';
import Pics2 from './components/Pics2';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './components/About';
import AboutTeam from './components/AboutTeam';
import Contact from './components/Contact';
import { HashRouter } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = " #1a1a1a";
      document.body.style.color = 'white';
      // showAlert(" Dark mode has been enabled ","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      // showAlert(" Light mode has been enabled ","success");
    }
  }

  return (
    <HashRouter>
      <div className="app-container"> 
        <Navbar title="TextVerse" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className='one'>
                <Pics />
                <div className="heading">
                  <h1>Welcome into the Text Verse</h1>
                </div>
                <div className="explore-container">
                  <a href="#explore"><h2>Explore</h2></a>
                  
                </div>
                <div id='explore' className="card-container-heading">
                  <h1>Our Services</h1>
                </div>
                <div>
                  <Cards />
                </div>
              </div>
            }/>
          <Route exact path="/about" element={
            <>
            <div className="about">
            <h2>About</h2>
            </div>
            <div className="container my-4">
            <About/>
            </div>
            <div className="about-team">
              <h2>Our Dedicated Team</h2>
            </div>
            <AboutTeam/>
            </>
          }/>
          <Route exact path='/contact' element={
            <>
            <div className="contact-content">
              <Contact/>
              <Pics2/>
              </div>
            </>
          }
          />
        </Routes>
        <Footer mode={mode}/>
      </div>
    </HashRouter>
  );
}

export default App;

