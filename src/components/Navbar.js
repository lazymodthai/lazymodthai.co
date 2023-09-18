import React from "react";
import Logo from "./Logo"
import "../css/Navbar.css";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className="nav-container">
        <Logo />
        <NavItem />
    </div>
  );
}

export default Navbar;
