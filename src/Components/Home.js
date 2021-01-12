import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeMain">
        <div className="gradientDiv">
          <div className="homeWrap">
            <div className="mainText">
              <Link id="text1" to="#"><span>EMBERTON</span></Link>
              <Link id="text2" to="#">FILL YOUR HOME WITH <br></br>ABSOLUTE 360˚ SOUND</Link>
              <Link id="text3" to="#">Rock out but stay in with big-stage sound in a small frame</Link>
              <button className="button">GET IT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <article className="homeContents01">
        <div className="contentsDiv">
          <Link className="imgDiv01" to="#">
            <div className="gradientDiv">
              <div className="contentsText">
                <span>
                  ACTON II BLUETOOTH
               </span>
                <h2>
                  TAKE THE BIG STAGE HOME
               </h2>
                <button className="button">GET IT NOW</button>
              </div>
            </div>
          </Link>
          <Link className="imgDiv02" to="#">
            <div className="gradientDiv">
              <div className="contentsText">
                <span>
                  ACTON II BLUETOOTH
               </span>
                <h2>
                  BIG SOUND FOR SMALL SPACES
               </h2>
                <button className="button">GET IT NOW</button>
              </div>
            </div>
          </Link>
        </div>
      </article>
      <article className="homeContents02">
        <Link to="#" className="gradientDiv">
          <div className="contentsText">
            <span>
              MAJOR IV
            </span>
            <h2>
              AN ICON, REBORN WITH<br></br> UNRIVALLED MARHHALL SOUND
            </h2>
            <p>Take some time for yourself and your music</p>
            <button className="button">GET IT NOW</button>
          </div>
        </Link>
      </article>
      <article className="homeContents03">
        <div className="contentsDiv">
          <Link to="#" className="imgDiv01">
            <div className="gradientDiv">

            </div>
          </Link>
          <Link to="#" className="imgDiv02">
            <div className="gradientDiv">

            </div>
          </Link>
          <Link to="#" className="imgDiv03">
            <div className="gradientDiv">
              
            </div>
          </Link>
        </div>
      </article>
    </div>
  )
}