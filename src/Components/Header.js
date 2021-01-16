import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faSearch, faQuestionCircle, faShoppingCart, faChevronDown, faTimes, faBars } from "@fortawesome/free-solid-svg-icons"
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
    let _scrollWidth = document.documentElement.scrollWidth;

    if (_scroll === 0 && _scrollWidth > 1000) {
      _hidden.current.style = ("top : -120px;")
      _category.current.style = ("");
    }
    if (_scrollWidth < 1000) {
      _hidden.current.style = ("top : px;")
    }
    if (props.openCountry === false && _scrollWidth > 1000) {
      if (_scroll >= 110) {
        _hidden.current.style = ("top : 0px;");
        _category.current.style = ("background : black;");
      } else if (_scroll <= 110) {
        _hidden.current.style = ("top : -120px;")
        _category.current.style = ("");
      }
    }
  }

  const mobileOpen = () => {
    props.setOpenMobile(!props.openMobile)
    props.setOpenCountry(false)
  }
  
  const mobileCountry = () => {
    props.setOpenMobile(!props.openMobile)
    props.setOpenCountry(!props.openCountry)
  }
  return (
    <div className="header">
      {/* PC 버전  start*/}
      <div className="headerContainer" style={props.openCountry ? { position: "absolute", top: "19vw", zIndex: "99" } : { position: "absolute", top: "-1vw", zIndex: "9999" }}>
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
      {/* PC 버전  end*/}

      {/* 모바일 버전  start */}
      <div className="headerMobile" >
        <div className="headerMobileWrap" style={props.openCountry ? { position: "absolute", top: "29vw" } : { position: "fixed", top: "0vw" }}>
          <Link className="hiddenLogoM" to="/home"><img className="headerLogoH" src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg" /></Link>
          <div className="iconDivH">
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faSearch} />
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faQuestionCircle} />
            <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faShoppingCart} />
            <FontAwesomeIcon onClick={mobileOpen} style={{ cursor: "pointer" }} icon={faBars} />
          </div>
        </div>
        <div className="headerMobileMenu" style={props.openMobile ? {} : { display: "none" }}>
          <div onClick={mobileOpen} className="closeBtn"><FontAwesomeIcon icon={faTimes} /></div>
          <div className="categoryWrapH">
            <ul className="categoryMenuH">
              <li><Link to="/home">HOME</Link></li>
              <li><Link to="/headphones">HEADPHONES</Link></li>
              <li><Link to="/speakers">SPEAKERS</Link></li>
              <li><Link to="/accessories">ACCESSORIES</Link></li>
              <li><Link to="/backstage">BACKSTAGE</Link></li>
              <li><Link to="/login">LOGIN</Link></li>
            </ul>
            <div className="languageDivH">
              <div className="languageWrapH" onClick={mobileCountry}>
                <span >{props.country.country} / {props.country.language}</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /*모바일 버전 end */
  )
}