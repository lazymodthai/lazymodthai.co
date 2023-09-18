import React from "react";
import '../css/NavItem.css'
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";



function NavItem() {
    const link = [{
        page: "หน้าแรก",
        href: "/"
    },{
        page: "โดเนท",
        href: "/Donation"
    },{
        page: "เข้าสู่ระบบ",
        href: "/Login"
    }]

    const showNavItem = () =>{

    }
  return (
      <ul className="nav-item res">
        {link.map((link)=><li key={link.page}><NavLink to={link.href}>{link.page}</NavLink></li>)}
        <li className="open-menu-icon" onClick={showNavItem}><FaBars /></li>
      </ul>
  );
}

export default NavItem;
