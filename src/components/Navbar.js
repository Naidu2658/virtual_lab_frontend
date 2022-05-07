import React, { useState,useEffect,useRef } from "react";
import "./navbar.css";


import { NavLink } from "react-router-dom";








const Navbar = () => {



  return (
    <>
      <nav className="main-nav">

        <div className="logo">
          <h2>
            <span>V</span>irtual
            <span>L</span>ab
          </h2>
        </div>


       
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login-Faculty">Faculty Login</NavLink>
            </li>
            <li>
              <NavLink to="/login-Student">Student Login</NavLink>
            </li>
            <li>
              <NavLink to="/register-faculty">Faculty Registration</NavLink>
            </li>
            <li>
              <NavLink to="/register-student">Student Registration</NavLink>
            </li>

          </ul>
       
      </nav>
    </>
  ) 
  
  


/*
    return (
      <>
        <nav className="main-nav">
          
          <div className="logo">
            <h2>
              <span>H</span>ospital
              <span>A</span>pp
            </h2>
          </div>
  
          
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login-doctor">Doctor Login</NavLink>
              </li>
              <li>
                <NavLink to="/login-admin">Admin Login</NavLink>
              </li>

              <li>
                <NavLink to="/logout-admin">Admin Logout</NavLink>
              </li>
              <li>
                <NavLink to="/granted-consents">Granted Consents</NavLink>
              </li>
              <li>
                <NavLink to="/request-consents">Request Consents</NavLink>
              </li>
            </ul>
          </div>
  
          
        </nav>
      </>
    );
*/

};

export default Navbar;
