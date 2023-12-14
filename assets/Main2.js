import React from 'react';
import {StrictMode } from "react";
import {createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployee from "./pages/Employee/ListEmployee"
import AddEmployee from "./pages/Employee/AddEmployee"
import EditEmployee from "./pages/Employee/EditEmployee"
import ViewEmployee from "./pages/Employee/ViewEmployee"

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/list_employee"  element={<ListEmployee/>} />
                <Route path="/addEmployee"  element={<AddEmployee/>} />
                <Route path="/editEmployee/:id"  element={<EditEmployee/>} />
                <Route path="/showEmployee/:id"  element={<ViewEmployee/>} />
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