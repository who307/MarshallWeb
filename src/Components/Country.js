import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../CSS/Country.css"

export default function Coutry(props) {

   // 드롭메뉴 CountrySelect
   let [country, setCountry] = useState("SOUTH KOREA");
   let countryOpen = useRef();
   let [openCountry, setOpenCountry] = useState();
   const countryOpenFunc = () => {
     if (!openCountry) {
       countryOpen.current.style = ("display : flex");
       setOpenCountry(true);
     } else{
       countryOpen.current.style = ("display : none");
       setOpenCountry(false);
     }
   }
   const clickCountry = (e) => {
     countryOpenFunc();
     setCountry(e.target.value);
   }
   // 드롭메뉴 LanguageSelect
   let [language, setLanguage] = useState("ENGLISH");
   let languageOpen = useRef();
   let [openLang, setOpenLang] = useState();
   const languageOpenFunc = () => {
     if (!openLang) {
       languageOpen.current.style = ("display : flex");
       setOpenLang(true);
     } else{
       languageOpen.current.style = ("display : none");
       setOpenLang(false);
     }
   }
   const clickLanguage = (e) => {
     languageOpenFunc();
     setLanguage(e.target.value);
   }
   const clickConfirm = ()=>{
     if(openCountry && openLang){
       setOpenCountry(false);
       setOpenLang(false);
       countryOpenFunc();
       languageOpenFunc();
     }else if(openCountry){
       setOpenCountry(false);
       countryOpenFunc();
     }else if(openLang){
       setOpenLang(false);
       languageOpenFunc();
     }
   }
   const closeBtn = () =>{
    props.setOpenCountry(false);
   }
  return (

    <div className="countryDiv">
      <FontAwesomeIcon onClick ={closeBtn} style={{ cursor : "pointer", color: "white", fontSize: "2vw", position: "absolute", right: "1.5vw", top: "1vw" }} icon={faTimes} />

      <div className="countryWrap">
        <h2>SELECT COUNTRY AND LANGUAGE</h2>
        <span>COUNTRY, SHIPPING DESTINATIONS AND FREIGHT COSTS ARE<br></br> DETERMINED BY YOUR COUNTRY SELECTION.</span>
        <div className="selectDiv">
          <div className="selectCountry">
            <div className="selectWrap" onClick={countryOpenFunc}>{country}
              <FontAwesomeIcon style={openCountry ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} icon={faChevronDown} />
            </div>
            <div className="countryDropDown" ref={countryOpen} style={{ display: "none" }}>
              <button onClick={clickCountry} value="CANADA">CANADA</button>
              <button onClick={clickCountry} value="FRANCE">FRANCE</button>
              <button onClick={clickCountry} value="GERMANY">GERMANY</button>
              <button onClick={clickCountry} value="ITALY">ITALY</button>
              <button onClick={clickCountry} value="NETHERLANDS">NETHERLANDS</button>
              <button onClick={clickCountry} value="SOUTH KOREA">SOUTH KOREA</button>
              <button onClick={clickCountry} value="SPAIN">SPAIN</button>
              <button onClick={clickCountry} value="SWEDEN">SWEDEN</button>
              <button onClick={clickCountry} value="UNITED KINGDOM">UNITED KINGDOM</button>
              <button onClick={clickCountry} value="USA">USA</button>
              <button onClick={clickCountry} value="">SHOW ALL</button>
            </div>
          </div>

          <div className="selectLanguage">
            <div className="selectWrap" onClick={languageOpenFunc}>{language}
              <FontAwesomeIcon style={openLang ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} icon={faChevronDown} />
            </div>
            <div className="languageDropDown" ref={languageOpen} style={{ display: "none" }}>
              <button onClick={clickLanguage} value="ENGLISH">ENGLISH</button>
              <button onClick={clickLanguage} value="SPANISH">SPANISH</button>
            </div>
          </div>
          <button onClick={clickConfirm} className="button">CONFIM</button>
        </div>
        <Link to="#"><span>IF YOUR COUNTRY IS NOT VISIBLE IN THE LIST CLICK HERE TO VISIT OUR COUNTRY <br></br>DIRECTORY</span></Link>
      </div>
    </div>
  )
}