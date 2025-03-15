// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience_and_skills from "./components/Experience_and_skills";
import FeaturedProject from "./components/FeaturedProject";
import ContactInfo from './components/ContactInfo';
import './styles/global.css';

function App() {
  return (
      <div className="App">
        
        <Header />
          <Home />
          <AboutMe />
          {/* eslint-disable-next-line react/jsx-pascal-case */}
          <Experience_and_skills />
          <FeaturedProject />
          <ContactInfo/>
      </div>
  );
}

export default App;
