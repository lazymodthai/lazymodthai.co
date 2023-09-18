import React from "react";
import imgLogo from "../assets/images/logo.png";
import "./Logo.css";

function Logo() {
  return (
    <a href="/" className="logo-container">
      <img src={imgLogo} className="img-logo" alt="Logo"/>
      <span className="logo-name">LAZYMODTHAI</span>
    </a>
  );
}

export default Logo;
