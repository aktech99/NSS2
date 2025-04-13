import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Teams from "../Teams/Teams";
import Projects from "../Projects/Projects";
import About from "../About/About";
import ServicesPage from "../ServicesPage/ServicesPage";

function Routing(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
      </Routes>
    </>
  )
}

export default Routing;