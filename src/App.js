import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import './CSS/App.css';
import './CSS/reset.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
