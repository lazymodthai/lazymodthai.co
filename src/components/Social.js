import React from "react";
import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoDiscord,
  IoMailOutline,
} from "react-icons/io5";
import '../css/Social.css'
import { NavLink } from "react-router-dom";

function Social() {
  return (
    <div className="social-container">
    <NavLink to="https://www.facebook.com/lazymodthai" target="_blank"><IoLogoFacebook className="icon"/></NavLink>
    <NavLink to="https://www.youtube.com/@Cl2zJo/" target="_blank"><IoLogoYoutube className="icon" /></NavLink>
    <NavLink to="https://discord.gg/NDxNSKWf" target="_blank"><IoLogoDiscord className="icon" /></NavLink>
    <NavLink to="mailto:lazymodthai@gmail.com"><IoMailOutline className="icon" /></NavLink>
    </div>
  );
}

export default Social;
