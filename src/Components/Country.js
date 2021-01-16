import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../CSS/Country.css"

export default function Coutry(props) {

  let [dropMenu, setDropMenu] = useState({
    country: "SOUTH KOREA",
    language: "ENGLISH"
  })

  // 드롭메뉴 CountrySelect 온오프
  let [openCountry, setOpenCountry] = useState();
  const countryOpenFunc = () => {
    if (!openCountry) {
      setOpenCountry(true);
    } else {
      setOpenCountry(false);
    }
  }
  // 드롭메뉴 LanguageSelect 온오프
  let [openLang, setOpenLang] = useState();
  const languageOpenFunc = () => {
    if (!openLang) {
      setOpenLang(true);
    } else {
      setOpenLang(false);
    }
  }
  const selectCountry = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDropMenu({
      ...dropMenu,
      [name]: value
    });
    if (openCountry && !openLang)
      countryOpenFunc()
    else if (!openCountry && openLang)
      languageOpenFunc()
    else {
      countryOpenFunc()
      languageOpenFunc()
    }
  };
  // Country 컴포넌트 close
  const closeBtn = () => {
    props.setOpenCountry(!props.openCountry);
  }
  const confirmBtn = () => {
    props.setCountry(dropMenu)
    props.setOpenCountry(!props.openCountry);
    alert(`국가 : ${dropMenu.country} 언어 : ${dropMenu.language} 입니다.`)
    if (openCountry && !openLang)
      countryOpenFunc()
    else if (!openCountry && openLang)
      languageOpenFunc()
    else if(openCountry && openLang){
      countryOpenFunc()
      languageOpenFunc()
    }
  }
  
  return (

    <div className="countryDiv" style ={props.openCountry ? {} : {height : "0"}}>
      <FontAwesomeIcon className ="_closeBtn" onClick={closeBtn} icon={faTimes} />

      <div className="countryWrap">
        <h2>SELECT COUNTRY AND LANGUAGE</h2>
        <span>COUNTRY, SHIPPING DESTINATIONS AND FREIGHT COSTS ARE<br></br> DETERMINED BY YOUR COUNTRY SELECTION.</span>
        <div className="selectDiv">
          <div className="selectCountry">
            <div className="selectWrap" onClick={countryOpenFunc}>{dropMenu.country}
              <FontAwesomeIcon style={openCountry ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} icon={faChevronDown} />
            </div>
            <div className="countryDropDown" style={openCountry ? props.openCountry ? {zIndex : "99", opacity : "1", transition : "opacity 0.3s"} : {opacity : "0"} : {display :"none"}}>
              <button name="country" onClick={selectCountry} value="CANADA">CANADA</button>
              <button name="country" onClick={selectCountry} value="FRANCE">FRANCE</button>
              <button name="country" onClick={selectCountry} value="GERMANY">GERMANY</button>
              <button name="country" onClick={selectCountry} value="ITALY">ITALY</button>
              <button name="country" onClick={selectCountry} value="NETHERLANDS">NETHERLANDS</button>
              <button name="country" onClick={selectCountry} value="SOUTH KOREA">SOUTH KOREA</button>
              <button name="country" onClick={selectCountry} value="SPAIN">SPAIN</button>
              <button name="country" onClick={selectCountry} value="SWEDEN">SWEDEN</button>
              <button name="country" onClick={selectCountry} value="UNITED KINGDOM">UNITED KINGDOM</button>
              <button name="country" onClick={selectCountry} value="USA">USA</button>
              <button name="country" onClick={selectCountry} value="">SHOW ALL</button>
            </div>
          </div>

          <div className="selectLanguage">
            <div className="selectWrap" onClick={languageOpenFunc}>{dropMenu.language}
              <FontAwesomeIcon style={openLang ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} icon={faChevronDown} />
            </div>
            <div className="languageDropDown" style={openLang ? props.openCountry ? {zIndex : "99", opacity : "1", transition : "opacity 0.3s"} : {opacity : "0"} : {display :"none"} }>
              <button name="language" onClick={selectCountry} value="ENGLISH">ENGLISH</button>
              <button name="language" onClick={selectCountry} value="SPANISH">SPANISH</button>
            </div>
          </div>
          <button onClick={confirmBtn} className="button">CONFIRM</button>
        </div>
        <Link to="#"><span>IF YOUR COUNTRY IS NOT VISIBLE IN THE LIST CLICK HERE TO VISIT OUR COUNTRY <br></br>DIRECTORY</span></Link>
      </div>
    </div>
  )
}