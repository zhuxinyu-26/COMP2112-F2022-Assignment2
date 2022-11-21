import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home.html">
          Assignment2
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
              className="nav-link active"
              id="homePage"
              aria-current="page"
              href="/home.html"
            >
              Home
            </a>
            <a
              className="nav-link"
              id="aboutPage"
              aria-current="page"
              href="/about.html"
            >
              About Me
            </a>
            <a
              className="nav-link"
              id="projectsPage"
              aria-current="page"
              href="/projects.html"
            >
              Projects
            </a>
            <a
              className="nav-link"
              id="servicePage"
              aria-current="page"
              href="/services.html"
            >
              Services
            </a>
            <a
              className="nav-link"
              id="contactePage"
              aria-current="page"
              href="/contact.html"
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
