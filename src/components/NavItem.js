import React from "react";
import './NavItem.css'
import { NavLink } from "react-router-dom";

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
  return (
      <ul className="nav-item">
        {link.map((link)=><li key={link.page}><NavLink to={link.href}>{link.page}</NavLink></li>)}
      </ul>
  );
}

export default NavItem;
