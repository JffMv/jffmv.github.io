// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
      <div className="App">
        <Header />
          <Home />
          <AboutMe />
      </div>
  );
}

export default App;
