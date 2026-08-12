import React from 'react';
import { Link } from "react-router-dom";
import "../CSS/NoMatch.css";

export default () => (

  <div className = "notFound">
    <div className ="noFoundWrap">
    <h1 className ="_h1">DAZED AND CONFUSED</h1>
    <p className = "_p">(404 - PAGE DOESN'T EXIST)</p>
    <button className ="button"><Link to ="/MarshallWeb"> BACK TO SHOP</Link></button>
    </div>
  </div>
);