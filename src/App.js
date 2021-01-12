import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import './CSS/App.css';
import './CSS/reset.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
