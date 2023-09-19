import React from "react";
import imgLogo from "../assets/images/logo.png";
import "../css/Logo.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to='/' className="logo-container"><img src={imgLogo} className="img-logo" alt="Logo"/><span className="logo-name">LAZYMODTHAI</span></NavLink>
  );
}

export default Logo;
