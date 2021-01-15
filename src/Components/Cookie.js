import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Cookie(props) {

  const _cookieContainer = {
    width : "100%",
    heigth : "10vw",
    position: "fixed",
    bottom: "0",
    textAlign: "center",
    background: "white",
    fontWeight: "",
    fontSize: "1.1vw",
    lineHeight: "1.4vw"
  }
  const _cookieWrap = {
    padding : "1.3vw 3vw",
  }
  const _linkStyle = {
    textDecoration: "underline"
  }
  const _closeBtn = {
    cursor: "pointer",
    fontWeight: "100",
    color: "black",
    fontSize: "2vw",
    position: "absolute",
    right: "2vw",
    top: "1vw"
  }
  // Cookie 컴포넌트 close
  const closeBtn = () => {
    console.log(props.openCookie)
    props.setOpenCookie(!props.openCookie);
  }

  return (
    <div style={_cookieContainer}>
      <div style ={_cookieWrap} ><span>This site uses cookies. Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used. For more detailed information
        on the cookies we use, please check our </span>
        <Link style={_linkStyle} to="policy">Cookie Policy.</Link></div>
      <FontAwesomeIcon onClick = {closeBtn} style={_closeBtn} icon={faTimes} />
    </div>
  )
}