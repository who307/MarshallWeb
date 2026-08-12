import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter, Switch, browserHistory } from "react-router-dom";
import NoMatch from "./Components/NoMatch"
import Country from './Components/Country';
import Header from './Components/Header';
import Home from './Components/Home';
import Headphones from "./Components/Headphones/Headphones";
import Speakers from "./Components/Speakers/Speakers";
import Accessories from "./Components/Accessories/Accessories";
import Backstage from "./Components/Backstage/Backstage";
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
  useEffect(() => {
    if (openMobile === true)
      document.querySelector("html").style = ("width : 100%; height : 100%; overflow-y : hidden; touch-action : none;")
    else
      document.querySelector("html").style = ("position: relative;")

  }, [openMobile])

  return (
    <div className="App">
      <BrowserRouter>
        <Header openCountry={openCountry}
          setOpenCountry={setOpenCountry}
          country={country}
          openMobile={openMobile}
          setOpenMobile={setOpenMobile} />

        <Country openCountry={openCountry}
          setOpenCountry={setOpenCountry}
          setCountry={setCountry} />

        <Switch>
          <Route exact path="/MarshallWeb" component={Home}
            render={() => <Home openCountry={openCountry} />}
          />
          <Route path="/headphones" component={Headphones}
            render={() => <Headphones openCountry={openCountry} />}
          />
          <Route path="/speakers" component={Speakers}
            render={() => <Speakers openCountry={openCountry} />}
          />
          <Route path="/accessories" component={Accessories}
            render={() => <Accessories openCountry={openCountry} />}
          />
          <Route path="/backstage" component={Backstage}
            render={() => <Backstage openCountry={openCountry} />}
          />
          <Route component={NoMatch} />

        </Switch>

        {openCookie === true && (
          <Cookie
            openCookie={openCookie}
            setOpenCookie={setOpenCookie} />
        )}
        <Footer
          openCountry={openCountry} />
      </BrowserRouter>
    </div>
  );
}

export default App;
