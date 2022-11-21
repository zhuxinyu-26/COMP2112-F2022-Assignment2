/* The File name: COMP2112-F2022-Assignment2
   Author's name: Xinyu Zhu
   web site name: Assignment2
   file description: the header page of the website */

import React from "react";
import logo from '../../Assets/images/favicon.jpg';
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link"
              id="homePage"
              aria-current="page"
              href="/home"
            >
              Home
            </a>
            <a
              className="nav-link"
              id="aboutPage"
              aria-current="page"
              href="/about"
            >
              About Me
            </a>
            <a
              className="nav-link"
              id="projectsPage"
              aria-current="page"
              href="/projects"
            >
              Projects
            </a>
            <a
              className="nav-link"
              id="servicePage"
              aria-current="page"
              href="/services"
            >
              Services
            </a>
            <a
              className="nav-link"
              id="contactePage"
              aria-current="page"
              href="/contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
