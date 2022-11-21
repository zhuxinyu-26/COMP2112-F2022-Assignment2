/* The File name: COMP2112-F2022-Assignment2
   Author's name: Xinyu Zhu
   web site name: Assignment2
   file description: the home page of the website */

import React from "react";
import cloud from '../..//Assets/images/cloud.png';
function Home() {
  return (
    
    <div className="top-container">
      <img
        className="top-cloud"
        src={cloud}
        alt="cloud-img"
      />
      <h1>I'm Xinyu.</h1>

      <h2>a programmer and a web designer.</h2>

      <a href="/about">
       <button className="button-55" role="button">
          Click to know more about me.
        </button> 
      </a>

      <img
        className="bottom-cloud"
        src={cloud}
        alt="cloud-img"
      />
    </div>
  );
}
export default Home;
