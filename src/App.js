import React, { useState } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Country from './Components/Country';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import './CSS/App.css';
import './CSS/reset.css';

function App() {
  // Country컴포넌트에서 국가 선택한 데이터 Header컴포넌트로 props전달
  let [country, setCountry] = useState({
    country: "SOUTH KOREA",
    language: "ENGLISH"
  })
  
  console.log(country.language);
  // Country 컴포넌트 온오프
  let [openCountry, setOpenCountry] = useState(false)

  return (
    <Router>
      <div className="App">
        <Header openCountry={openCountry}
          setOpenCountry={setOpenCountry}
          country={country} />
        {openCountry === true && (
          <Country openCountry={openCountry}
            setOpenCountry={setOpenCountry}
            setCountry={setCountry}/>
        )}
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
