import React from "react";
import { Router,Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Teams from "../Teams/Teams";
import Projects from "../Projects/Projects";
import About from "../About/About";

function Routing(){
    return (    
        <>
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/teams" element = {<Teams/>}/>
            <Route path="/projects" element = {<Projects/>}/>
            <Route path="/about" element = {<About/>}/>
        </Routes>
        </>
    )

}

export default Routing;