import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Category from "./pages/Category"
import Menu from "./pages/Menu"
import Testimonial from "./pages/Testimonial"
import NotFound from "./pages/NotFound"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"

function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Home/>} />
                <Route path="/about"  element={<About/>} />
                <Route path="/category"  element={<Category/>} />
                <Route path="/menu"  element={<Menu/>} />
                <Route path="/testimonial"  element={<Testimonial/>} />
                <Route path="/contact"  element={<Contact/>} />
                <Route path="/login"  element={<Login/>} />
                <Route path="/register"  element={<Register/>} />
                <Route path="/dashboard"  element={<Dashboard/>} />
                <Route element={<NotFound/>} />
            </Routes>
        </Router>
    );
}

export default Main;

if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}