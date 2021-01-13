import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faPinterest, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../CSS/Footer.css';

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerWrap">
        <div className="newsLetterDiv">
          <div className="newLetterWrap">
            <div className="newsLetterText">
              <h2>SIGN UP FOR OUR NEWSLETTER</h2>
              <span>Get 10 % off on your first order.</span>
            </div>
            <input type="text" name="email" id="email" placeholder="Your email address goes here"></input>
            <div className="policyText">
              <h2>BY SUBSCRIBING YOU ACCEPT OUR</h2>
              <Link to="policy">PRIVACY POLICY.</Link>
            </div>
            <Link to="subscribe">
              <button className="button">SUBSCRIBE</button>
            </Link>
          </div>
        </div>
        <div className="footerMenuDiv">
          <div className="footerMenu">
            <h2>CUSTOMER SERVICE</h2>
            <Link to="#">CONTACT US</Link>
            <Link to="#">BUSINESS CUSTOMERS</Link>
            <Link to="#">DELIVERY TIMES</Link>
            <Link to="#">EXCHANGE AND RETURN</Link>
            <Link to="#">USER MANUALS</Link>
            <Link to="#">HELP CENTRE</Link>
            <Link to="#">SHIPPING UPDATE - COVID-19</Link>
          </div>
          <div className="footerMenu">
            <h2>SECURITY</h2>
            <Link to="#">TERMS OF USE</Link>
            <Link to="#">TERMS OF PURCHASE</Link>
            <Link to="#">PAYMENT METHODS</Link>
            <Link to="#">DECLARATION OF CONFORMITY</Link>
            <Link to="#">GLOBAL WARRANTY</Link>
            <Link to="#">PRIVACY POLICY</Link>
            <Link to="#">GDPR</Link>
            <Link to="#">COOKIES</Link>
          </div>
          <div className="footerMenu">
            <h2>PRESS</h2>
            <Link to="#">PRESS ROOM</Link>
          </div>
          <div className="footerLogin">
            <h1>MY ACOUNT</h1>
            <span>LOGIN OR CREATE AN ACCOUNT</span>
            <Link className="button" to="login">LOGIN</Link>
            <Link className="button" to="CreateAccount">CREATE ACCOUNT</Link>
          </div>
        </div>
        <div className="footerPaymentsDiv">
          <h2>SAFE PAYMENTS</h2>
          <span>WE PROVIE THE FOLLOWING PAYMENT<br></br>METHODS</span>
          <div className="footerPayments">
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw4e75c85b/images/payment-methods/Amex_neg.svg"></img>
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw820e0b5e/images/payment-methods/Mastercard_horizontal_neg.svg"></img>
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw04337432/images/payment-methods/Visa_neg.svg"></img>
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw17c504e2/images/payment-methods/Discover_neg.svg"></img>
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9e123cd0/images/payment-methods/Diners_horizontal_neg.svg"></img>
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb6cc1da1/images/payment-methods/Maestro_horizontal_neg.svg"></img>
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw29c26121/images/payment-methods/jcb_neg.svg"></img>
            <img src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2405c4db/images/payment-methods/PayPal_horizontal_neg.svg"></img>
          </div>
        </div>
        <div className="footerBottom">
          <div className ="footerBottomWrap">
          <div className ="footerAsset">
            <h2>©2020 ZOUND INDUSTRIES. ALL RIGHTS RESERVED. ORG. NR <br></br>5567574610</h2>
          </div>
          <div className="footerLogo">
          <Link to ="home">
            <img src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"></img>
          </Link>
          </div>
          <div className="footerIcons">
          <Link to ="spotify"><FontAwesomeIcon style={{ cursor: "pointer", }} size= "2x" icon={faSpotify} /></Link>
          <Link to ="facebook"><FontAwesomeIcon style={{ cursor: "pointer" }} size= "2x" icon={faFacebook} /></Link>
          <Link to ="instargram"><FontAwesomeIcon style={{ cursor: "pointer" }} size= "2x" icon={faInstagram} /></Link>
            <Link to ="pinterest"><FontAwesomeIcon style={{ cursor: "pointer" }} size= "2x" icon={faPinterest} /></Link>
          </div>
        </div>
        </div>
      </div>
    </div >
  )
}