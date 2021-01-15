import React, { useState, useRef, useEffect } from 'react';
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
  let countryOpen = useRef();
  let [openCountry, setOpenCountry] = useState();
  const countryOpenFunc = () => {
    if (!openCountry) {
      countryOpen.current.style = ("display : flex");
      setOpenCountry(true);
    } else {
      countryOpen.current.style = ("display : none");
      setOpenCountry(false);
    }
  }
  // 드롭메뉴 LanguageSelect 온오프
  let languageOpen = useRef();
  let [openLang, setOpenLang] = useState();
  const languageOpenFunc = () => {
    if (!openLang) {
      languageOpen.current.style = ("display : flex");
      setOpenLang(true);
    } else {
      languageOpen.current.style = ("display : none");
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
    console.log(dropMenu)
    alert(`국가 : ${dropMenu.country} 언어 : ${dropMenu.language} 입니다.`)
  }
// colose버튼 스타일
  const _closeBtn = {
    cursor: "pointer",
    color: "white",
    fontSize: "2vw",
    position: "absolute",
    right: "3vw",
    top: "1vw"
  }
  return (

    <div className="countryDiv">
      <FontAwesomeIcon onClick={closeBtn} style={_closeBtn} icon={faTimes} />

      <div className="countryWrap">
        <h2>SELECT COUNTRY AND LANGUAGE</h2>
        <span>COUNTRY, SHIPPING DESTINATIONS AND FREIGHT COSTS ARE<br></br> DETERMINED BY YOUR COUNTRY SELECTION.</span>
        <div className="selectDiv">
          <div className="selectCountry">
            <div className="selectWrap" onClick={countryOpenFunc}>{dropMenu.country}
              <FontAwesomeIcon style={openCountry ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} icon={faChevronDown} />
            </div>
            <div className="countryDropDown" ref={countryOpen} style={{ display: "none" }}>
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
            <div className="languageDropDown" ref={languageOpen} style={{ display: "none" }}>
              <button name="language" onClick={selectCountry} value="ENGLISH">ENGLISH</button>
              <button name="language" onClick={selectCountry} value="SPANISH">SPANISH</button>
            </div>
          </div>
          <button onClick={confirmBtn} className="button">CONFIM</button>
        </div>
        <Link to="#"><span>IF YOUR COUNTRY IS NOT VISIBLE IN THE LIST CLICK HERE TO VISIT OUR COUNTRY <br></br>DIRECTORY</span></Link>
      </div>
    </div>
  )
}