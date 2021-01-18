import React, { } from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faPinterest, faSpotify } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../CSS/Footer.css';

export default function Footer(props) {
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
          <div className="footerMenuWrap">
            <ul className="footerMenu">
              <h2>CUSTOMER SERVICE</h2>
              <li><Link to="#">CONTACT US</Link></li>
              <li><Link to="#">BUSINESS CUSTOMERS</Link></li>
              <li><Link to="#">DELIVERY TIMES</Link></li>
              <li><Link to="#">EXCHANGE AND RETURN</Link></li>
              <li><Link to="#">USER MANUALS</Link></li>
              <li><Link to="#">HELP CENTRE</Link></li>
              <li><Link to="#">SHIPPING UPDATE - COVID-19</Link></li>
            </ul>
            <ul className="footerMenu">
              <h2>POLICIES</h2>
              <li><Link to="#">SECURITY</Link></li>
              <li><Link to="#">TERMS OF USE</Link></li>
              <li><Link to="#">TERMS OF PURCHASE</Link></li>
              <li><Link to="#">PAYMENT METHODS</Link></li>
              <li><Link to="#">DECLARATION OF CONFORMITY</Link></li>
              <li><Link to="#">GLOBAL WARRANTY</Link></li>
              <li><Link to="#">PRIVACY POLICY</Link></li>
              <li><Link to="#">GDPR</Link></li>
              <li><Link to="#">COOKIES</Link></li>
            </ul>
            <ul className="footerMenu">
              <h2>PRESS</h2>
              <li><Link to="#">PRESS ROOM</Link></li>
            </ul>
          </div>
          <div className="footerLogin">
            <h1>MY ACOUNT</h1>
            <span>LOGIN OR CREATE AN ACCOUNT</span>
            <div className="footerbuttonDiv">
              <Link className="button" to="login">LOGIN</Link>
              <Link className="button" to="CreateAccount">CREATE ACCOUNT</Link>
            </div>
          </div>
        </div>
        <div className="footerPaymentsDiv">
          <h2>SAFE PAYMENTS</h2>
          <span>WE PROVIE THE FOLLOWING PAYMENT<br></br>METHODS</span>
          <div className="footerPayments">
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw4e75c85b/images/payment-methods/Amex_neg.svg"></img>
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw820e0b5e/images/payment-methods/Mastercard_horizontal_neg.svg"></img>
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw04337432/images/payment-methods/Visa_neg.svg"></img>
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw17c504e2/images/payment-methods/Discover_neg.svg"></img>
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw9e123cd0/images/payment-methods/Diners_horizontal_neg.svg"></img>
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dwb6cc1da1/images/payment-methods/Maestro_horizontal_neg.svg"></img>
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw29c26121/images/payment-methods/jcb_neg.svg"></img>
            <img alt="" src="https://www.marshallheadphones.com/on/demandware.static/-/Library-Sites-SharedLibrary-Marshall/default/dw2405c4db/images/payment-methods/PayPal_horizontal_neg.svg"></img>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerBottomWrap">
            <div className="footerAsset">
              <h2>©2020 ZOUND INDUSTRIES. ALL RIGHTS RESERVED. ORG. NR 5567574610</h2>
            </div>
            <div className="footerLogo">
              <Link to="/">
                <img src="https://www.marshallheadphones.com/on/demandware.static/Sites-Marshall-SK-Site/-/default/dw5b5a3521/images/marshall-logo-white.svg"></img>
              </Link>
            </div>
            <div className="footerIcons">
              <Link to="/MarshallWeb"><div><FontAwesomeIcon style={{ cursor: "pointer", }} icon={faSpotify} /></div></Link>
              <Link to="/MarshallWeb"><FontAwesomeIcon style={{ cursor: "pointer" }} icon={faFacebook} /></Link>
              <Link to="/MarshallWeb"><FontAwesomeIcon style={{ cursor: "pointer" }} icon={faInstagram} /></Link>
              <Link to="/MarshallWeb"><FontAwesomeIcon style={{ cursor: "pointer" }} icon={faPinterest} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}