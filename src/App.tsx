/* The File name: COMP2112-F2022-Assignment2
   Author's name: Xinyu Zhu
   web site name: Assignment2
   file description: the app.tsx file of the website */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//common components
import Header from "./Views/components/header";
import Footer from "./Views/components/footer";
//content
import Home from "./Views/content/home";
import About from "./Views/content/about";
import Contact from "./Views/content/contact";
import Services from "./Views/content/services";
import Projects from "./Views/content/projects";
//styles and fonts
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
//JS libraries
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route> 
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
