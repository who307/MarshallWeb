import React, { } from "react";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../CSS/Cookie.css"

export default function Cookie(props) {


  // Cookie 컴포넌트 close
  const closeBtn = () => {
    console.log(props.openCookie)
    props.setOpenCookie(!props.openCookie);
  }

  return (
    <div className="_cookieContainer">
      <div className="_cookieWrap" ><span>This site uses cookies. Some of these cookies are essential, while others help us to improve your experience by providing insights into how the site is being used. For more detailed information
        on the cookies we use, please check our </span>
        <Link className="_linkStyle" to="policy">Cookie Policy.</Link></div>
      <FontAwesomeIcon onClick={closeBtn} className="_closeBtn" icon={faTimes} />
    </div>
  )
}