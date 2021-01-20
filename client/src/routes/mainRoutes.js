import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import About from "../pages/about/index";
import OneMovie from "../pages/oneMovie/index";


function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/:id" element={<OneMovie/>}/>
        </Routes>
    )
}

export default MainRoutes;