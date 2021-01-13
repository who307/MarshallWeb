import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Country from './Components/Country';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import './CSS/App.css';
import './CSS/reset.css';

function App() {

  let [openCountry, setOpenCountry] = useState(false)

  return (
    <Router>
      <div className="App">
        {openCountry === true &&(
          <Country setOpenCountry={setOpenCountry} />
        )} 
        <Header openCountry={openCountry} setOpenCountry ={setOpenCountry} />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
