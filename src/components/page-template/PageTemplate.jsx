import React from "react";
import './page-template.styles.css'
export default function PageTemplate({ imgSrc, headLine, subHead, button=<></> }) {
  return (
    <div id="container">
      <img id="main-photo" src={imgSrc} alt="welcome" />
      <div id="">
        <h2 id="headline">{headLine}</h2>
        <p id="sub-head">{subHead}</p>
      </div>
      {button}
    </div>
  );
}
