import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faSearch, faQuestionCircle, faShoppingCart, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../CSS/Header.css';

export default function Header() {

  let _hidden = useRef();
  let _category = useRef();
  useEffect(() => {
    document.addEventListener("scroll", function () {
      let _scrollTop = document.documentElement.scrollTop;
      if (_scrollTop >= 110) {
        _hidden.current.style = ("top : 0px; transition : top 0.4s");
        _category.current.style = ("background : black; transition : background 1s;");
      } else if (_scrollTop <= 110) {
        _hidden.current.style = ("top : -120px;")
        _category.current.style = ("transition : background 0.5s;");
      }
    })
  })
  return (
    <div className="headerContainer">
      <div className="hiddenCategory" ref={_hidden}>
        <div className="hiddenWrap">
          <Link className="hiddenLogo" to="/home"><img className="headerLogoH" src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg" /></Link>
          <div className="categoryMenuH">
            <ul className="categoryWrapH">
              <li><Link to="/headphones">HEADPHONES</Link></li>
              <li><Link to="/speakers">SPEAKERS</Link></li>
              <li><Link to="/accessories">ACCESSORIES</Link></li>
              <li><Link to="/backstage">BACKSTAGE</Link></li>
            </ul>
            <div className="iconDivH">
              <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faSearch} />
              <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faQuestionCircle} />
              <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faShoppingCart} />
            </div>
          </div>
          <div className="languageDivH">
            <div className="languageWrapH">
              <span >SOUTH KOREA/EN</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="headerWrap">
        <div className="languageDiv">
          <div className="languageWrap">
            <span >SOUTH KOREA/EN</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <Link to="/home"><img className="headerLogo" src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg" /></Link>
        <div ref={_category} className="headerCategory">
          <ul className="categoryMenu">
            <li><Link to="/headphones">HEADPHONES</Link></li>
            <li><Link to="/speakers">SPEAKERS</Link></li>
            <li><Link to="/accessories">ACCESSORIES</Link></li>
            <li><Link to="/backstage">BACKSTAGE</Link></li>
          </ul>
          <div className="iconDiv">
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faSearch} />
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faQuestionCircle} />
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faShoppingCart} />
          </div>
        </div>
      </div>
    </div>
  )
}