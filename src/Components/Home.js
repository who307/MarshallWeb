import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

export default function Home(props) {
  return (
    <div className="homeContainer">
      <div className="homeContainerWrap" style ={props.openCountry ? {position : "relative", top : "20vw"} : {position : "relative", top : "0", zIndex : "999"} }>
        <div className="homeMain">
          <div className="homeWrap">
            <Link to="#" className="mainText">
              <Link id="text1" to="#"><span>EMBERTON</span></Link>
              <Link id="text2" to="#">FILL YOUR HOME WITH <br></br>ABSOLUTE 360˚ SOUND</Link>
              <Link id="text3" to="#">Rock out but stay in with big-stage sound in a small frame</Link>
              <button className="button">GET IT NOW</button>
            </Link>
          </div>
          <div className="gradientDiv">
          </div>
        </div>
        <article className="homeContents01">
          <div className="contentsDiv01">
            <Link className="imgDiv01" to="#">
              <div className="gradientDiv">
              </div>
              <div className="contentsText">
                <span>
                  ACTON II BLUETOOTH
               </span>
                <h2>
                  TAKE THE BIG STAGE HOME
               </h2>
                <button className="button">GET IT NOW</button>
              </div>
            </Link>
            <Link className="imgDiv02" to="#">
              <div className="gradientDiv">
              </div>
              <div className="contentsText">
                <span>
                  ACTON II BLUETOOTH
               </span>
                <h2>
                  BIG SOUND FOR SMALL SPACES
               </h2>
                <button className="button">GET IT NOW</button>
              </div>
            </Link>
          </div>
        </article>
        <article className="homeContents02">
          <Link to="#" className="contentsText">
            <span>
              MAJOR IV
          </span>
            <h2>
              AN ICON, REBORN WITH<br></br> UNRIVALLED MARHHALL SOUND
            </h2>
            <p>Take some time for yourself and your music</p>
            <button className="button">GET IT NOW</button>
          </Link>
          <Link to="#" className="gradientDiv">
          </Link>
        </article>
        <article className="homeContents03">
          <div className="contentsDiv03">
            <Link to="#" className="imgDiv01">
              <div className="contentsText">
                <span>MAJOR III BLUETOOTH</span>
                <h2>THE MODERN GO-<br></br>TO CLASSIC</h2>
              </div>
              <div className="gradientDiv">
              </div>
            </Link>
            <Link to="#" className="imgDiv02">
              <div className="contentsText">
                <span>SPEAKER POWER CABLE</span>
                <h2>PLUG IN AND <br></br> CHILL OUT</h2>
              </div>
              <div className="gradientDiv">
              </div>
            </Link>
            <Link to="#" className="imgDiv03">
              <div className="contentsText">
                <span>MONITOR II A.N.C.</span>
                <h2>RETREAT INTO<br></br> YOUR MUSIC</h2>
              </div>
              <div className="gradientDiv">
              </div>
            </Link>
          </div>
        </article>
        <article className="homeContents04">
          <div className="contentsTitle">
            <h2>MOST POPULAR ITEMS</h2>
            <span>Award winning products for your home or on the go</span>
          </div>
          <div className="contentsDiv04">
            <div className="contentsWrap">
              <Link className="imgLink" to="#">
                <div className="imgDiv01">

                </div>
              </Link>
              <Link to="#" className="contentsText">
                <div className="productName">
                  <h2>MONITOR II A.N.C.</h2>
                </div>
                <div className="priceText">
                  <i>$</i>
                  <span>359.00</span>
                </div>
              </Link>
            </div>
            <div className="contentsWrap">
              <Link className="imgLink" to="#">
                <div className="imgDiv02">

                </div>
              </Link>
              <Link to="#" className="contentsText">
                <div className="productName">
                  <h2>EMBERTON</h2>
                  <h3>PORTABLE</h3>
                </div>
                <div className="priceText">
                  <div>From</div>
                  <i>$</i>
                  <span>179.00</span>
                </div>
                <div className="colorSelect">
                  <Link to="color"> <span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #000000 50%" }}></span></Link>
                  <Link to="color"> <span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #b9935e 50%" }}></span></Link>
                </div>
              </Link>
            </div>
            <div className="contentsWrap">
              <Link className="imgLink" to="#">
                <div className="imgDiv03">

                </div>
              </Link>
              <Link to="#" className="contentsText">
                <div className="productName">
                  <h2>STOCKWELL II</h2>
                  <h3>PORTABLE</h3>
                </div>
                <div className="priceText">
                  <div>From</div>
                  <i>$</i>
                  <span>239.00</span>
                </div>
                <div className="colorSelect">
                  <Link to="color"><span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #000000 50%" }}></span></Link>
                  <Link to="color"><span style={{ background: "linear-gradient(90deg, #3F5364, #3F5364 50%, #3F5364 50%" }}></span></Link>
                  <Link to="color"><span style={{ background: "linear-gradient(90deg, #50294c, #50294c 50%, #50294c 50% " }}></span></Link>
                  <Link to="color"><span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #b9935e 50%" }}></span></Link>
                </div>
              </Link>
            </div>
            <div className="contentsWrap">
              <Link className="imgLink" to="#">
                <div className="imgDiv04">

                </div>
              </Link>
              <Link to="#" className="contentsText">
                <div className="productName">
                  <h2>KILBURN II</h2>
                  <h3>PORTABLE</h3>
                </div>
                <div className="priceText">
                  <div>From</div>
                  <i>$</i>
                  <span>309.00</span>
                </div>
                <div className="colorSelect">
                  <Link to="color"><span style={{ background: "linear-gradient(90deg, #000000, #000000 50%, #000000 50%" }}></span></Link>
                  <Link to="color"><span style={{ background: "linear-gradient(90deg, #AFAEAA, #AFAEAA 50%, #AFAEAA 50%" }}></span></Link>
                  <Link to="color"><span style={{ background: "linear-gradient(90deg, #50294c, #50294c 50%, #50294c 50% " }}></span></Link>
                </div>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}