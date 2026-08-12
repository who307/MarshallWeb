import React, { useEffect, useState } from 'react';
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

  // 지역선택과 언어선택시 선택한 값으로 state변경
  // 버튼태그에 onClick 함수 추가, name 속성 값 설정
  useEffect(() => {

    let buttonCountry = document.querySelectorAll(".countryDropDown button, .languageDropDown button")
    // querySelectorAll 로 가져온 nodeList를 forEach문으로 해당 elements를 반환하고 onclick 이벤트 추가
    buttonCountry.forEach((countryBtn) => {
      countryBtn.onclick = (e) => {
        const { name, value } = e.target;
        setDropMenu({
          ...dropMenu,
          [name]: value
        });
        if (openCountry && !openLang) {
          countryOpenFunc()
        } else if (!openCountry && openLang) {
          languageOpenFunc()
        } else {
          countryOpenFunc()
          languageOpenFunc()
        }
      }
      // forEach문으로 반환한 elements의 부모요소의 className의 따라 name 속성 값 설정
      if(countryBtn.parentElement.className === "countryDropDown"){
        countryBtn.name = "country"
      }else if(countryBtn.parentElement.className === "languageDropDown"){
        countryBtn.name = "language"
      }
    });
  }, [openCountry, openLang]);


  // Country 컴포넌트 close
  const closeBtn = () => {
    props.setOpenCountry(!props.openCountry);
    if (openLang || openCountry) {
      setOpenLang(false);
      setOpenCountry(false);
    }
  }

  const confirmBtn = () => {
    props.setCountry(dropMenu)
    props.setOpenCountry(!props.openCountry);
    alert(`국가 : ${dropMenu.country} 언어 : ${dropMenu.language} 입니다.`)
    if (openCountry && !openLang) {
      countryOpenFunc()
    } else if (!openCountry && openLang) {
      languageOpenFunc()
    } else if (openCountry && openLang) {
      countryOpenFunc()
      languageOpenFunc()
    }
  }

  return (

    <div className="countryDiv" style={props.openCountry ? {} : { height: "0" , visibility : "hidden"}}>
      <FontAwesomeIcon className="_closeBtn" onClick={closeBtn} icon={faTimes} />

      <div className="countryWrap">
        <h2>SELECT COUNTRY AND LANGUAGE</h2>
        <span>COUNTRY, SHIPPING DESTINATIONS AND FREIGHT COSTS ARE<br></br> DETERMINED BY YOUR COUNTRY SELECTION.</span>
        <div className="selectDiv">
          <div className="selectCountry">
            <div className="selectWrap" onClick={countryOpenFunc}>{dropMenu.country}
              <FontAwesomeIcon style={openCountry ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} icon={faChevronDown} />
            </div>
            <div className="countryDropDown" style={openCountry ? { zIndex: "99" } : { display: "none" }}>
              <button value="CANADA">CANADA</button>
              <button value="FRANCE">FRANCE</button>
              <button value="GERMANY">GERMANY</button>
              <button value="ITALY">ITALY</button>
              <button value="NETHERLANDS">NETHERLANDS</button>
              <button value="SOUTH KOREA">SOUTH KOREA</button>
              <button value="SPAIN">SPAIN</button>
              <button value="SWEDEN">SWEDEN</button>
              <button value="UNITED KINGDOM">UNITED KINGDOM</button>
              <button value="USA">USA</button>
              <button value="SHOW ALL">SHOW ALL</button>
            </div>
          </div>

          <div className="selectLanguage">
            <div className="selectWrap" onClick={languageOpenFunc}>{dropMenu.language}
              <FontAwesomeIcon style={openLang ? { transform: "rotate(180deg)" } : { transform: "rotate(0deg)" }} icon={faChevronDown} />
            </div>
            <div className="languageDropDown" style={openLang ? { zIndex: "99" } : { display: "none" }}>
              <button value="ENGLISH">ENGLISH</button>
              <button value="SPANISH">SPANISH</button>
            </div>
          </div>
          <button onClick={confirmBtn} className="button">CONFIRM</button>
        </div>
        <Link to="#"><span>IF YOUR COUNTRY IS NOT VISIBLE IN THE LIST CLICK HERE TO VISIT OUR COUNTRY <br></br>DIRECTORY</span></Link>
      </div>
    </div>
  )
}