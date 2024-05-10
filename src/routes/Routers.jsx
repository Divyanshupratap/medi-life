import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors";
import DoctorsDerails from "../pages/Doctors/DoctorsDetails";
import { Routes,Route } from "react-router-dom";
const Routers=()=>{
    return(
        <>
            <Routes>
                <Route path="/"element={<Home/>}/>
                <Route path="/home"element={<Home/>}/>
                <Route path="/login"element={<Login/>}/>
                <Route path="/contact"element={<Contact/>}/>
                <Route path="/signin"element={<Signin/>}/>
                <Route path="/signup"element={<Signup/>}/>
                <Route path="/services"element={<Services/>}/>
                <Route path="/doctors"element={<Doctors/>}/>
                <Route path="/doctorsdetails"element={<DoctorsDerails/>}/>
                <Route path="/"element={<Home/>}/>
                
            </Routes>
        </>
    )
}
export default Routers