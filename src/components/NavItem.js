import React from "react";
import './NavItem.css'

function NavItem() {
    const link = [{
        page: "หน้าแรก",
        href: "/"
    },{
        page: "โดเนท",
        href: "donate"
    },{
        page: "เข้าสู่ระบบ",
        href: "login"
    }]
  return (
      <ul className="nav-item">
        <li>โดเนท</li>
        <li>เข้าสู่ระบบ</li>
      </ul>
  );
}

export default NavItem;
