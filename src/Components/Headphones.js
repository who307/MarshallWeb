import React, { } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Headphones.css"

export default function Headphones(props) {
  return (
    <div className="headPhoneContainer">
        <div className="headPhoneMain" style={props.openCountry ? { zIndex: "" } : { zIndex: "9" }}>
          <div className="headPhoneWrap">
            <div className="mainText">
              <Link id="text1" to="#">LEND US YOUR EARS AND WE’LL PLAY YOU A SONG</Link>
            </div>
          </div>
          <div className="gradientDiv">
          </div>
        </div>

        <div className ="headPhoneContants">
          <div className ="headPhoneCategory">
            <h3>SHOP BY CATEGORY</h3>
            <div><span>ALL</span></div>
            <div><span>OVER-EAR</span></div>
            <div><span>ON-EAR</span></div>
            <div><span>IN-EAR</span></div>
            <div><span>BLUETOOTH</span></div>
            <div><span>VOICE</span></div>
            <div><span>NOISE CANCELLING</span></div>
          </div>
          <div className = "headPhoneProduct">
            <div className ="headPhoneTitle">

            </div>
            <div className ="headPhoneList">

            </div>
          </div>
        </div>
      </div>
  )
};