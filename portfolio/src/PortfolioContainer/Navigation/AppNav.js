import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../AboutMe/AboutMe";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import Testimonial from "../Testmonial/Testimonial";
import Navigation from "./Navigation";

export default function AppNav() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/Testimonial" element={<Testimonial/>} />
      </Routes>
    </div>
  );
}
