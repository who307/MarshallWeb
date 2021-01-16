import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Country from './Components/Country';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import Cookie from "./Components/Cookie"
import './CSS/App.css';
import './CSS/reset.css';

function App() {
  // Country컴포넌트에서 국가 선택한 데이터 Header컴포넌트로 props전달
  let [country, setCountry] = useState({
    country: "SOUTH KOREA",
    language: "ENGLISH"
  })

  // Country 컴포넌트 온오프
  let [openCountry, setOpenCountry] = useState(true);

  // Cookie 컴포넌트 온오프
  let [openCookie, setOpenCookie] = useState(true);

  // 모바일 메뉴 오픈
  let [openMobile, setOpenMobile] = useState(false);
  useEffect( () =>{
    if(openMobile === true)
    document.querySelector("html").style = ("overflow-y : hidden")
    else
    document.querySelector("html").style = ("")

  })
  
  return (
    <Router>
      <div className="App">
        <Header openCountry={openCountry}
          setOpenCountry={setOpenCountry}
          country={country}
          openMobile={openMobile}
          setOpenMobile={setOpenMobile} />

        <Country openCountry={openCountry}
          setOpenCountry={setOpenCountry}
          setCountry={setCountry} />

        <Home
          openCountry={openCountry} />

        {openCookie === true && (
          <Cookie
            openCookie={openCookie}
            setOpenCookie={setOpenCookie} />
        )}
        <Footer
          openCountry={openCountry} />
      </div>
    </Router>
  );
}

export default App;
