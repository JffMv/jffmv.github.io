// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience_and_skills from "./components/Experience_and_skills";

function App() {
  return (
      <div className="App">
        <Header />
          <Home />
          <AboutMe />
          <Experience_and_skills />
      </div>
  );
}

export default App;
