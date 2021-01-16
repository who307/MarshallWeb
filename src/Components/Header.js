import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faSearch, faQuestionCircle, faShoppingCart, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../CSS/Header.css';

export default function Header(props) {

  //Country(지역 선택) 컴포넌트 오픈, 스크롤위치 최상단이동
  const openBtn = () => {
    props.setOpenCountry(!props.openCountry);
    document.querySelector("html").scrollTo(0, 0);
  }

  // 네비게이션 표시 Country캄포넌트가 오픈상태면 함수실행x
  // 스크롤메소드 useEffect() clean-up
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent)
  });

  let _hidden = useRef();
  let _category = useRef();
  const scrollEvent = () => {
    let _scroll = document.documentElement.scrollTop;

    if (_scroll === 0) {
      _hidden.current.style = ("top : -120px;")
      _category.current.style = ("");
    }
    if (props.openCountry === false) {
      if (_scroll >= 110) {
        _hidden.current.style = ("top : 0px;");
        _category.current.style = ("background : black;");
      } else if (_scroll <= 110) {
        _hidden.current.style = ("top : -120px;")
        _category.current.style = ("");
      }
    }
  }
  return (
    <div className="headerContainer" style={props.openCountry ? { position: "absolute", top: "19vw", zIndex : "99" } : { position: "absolute", top: "-1.5vw", zIndex : "9999" }}>
      <div className="hiddenCategory" ref={_hidden}>
        <div className="hiddenWrap">
          <Link className="hiddenLogo" to="/home"><img className="headerLogoH" src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg" /></Link>
          <div className="categoryWrapH">
            <ul className="categoryMenuH">
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
            <div className="languageWrapH" onClick={openBtn}>
              <span >{props.country.country} / {props.country.language}</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="headerWrap">
        <div className="languageDiv">
          <div className="languageWrap" onClick={openBtn}>
            <span >{props.country.country} / {props.country.language}</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <Link to="/home"><img className="headerLogo" src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg" /></Link>
        <div ref={_category} className="headerCategory">
          <div className="categoryWrap">
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
    </div>
  )
}