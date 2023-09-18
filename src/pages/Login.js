import React from "react";
import "../css/Form.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container">

      <form className="login-form">
      <h3>เข้าสู่ระบบสมาชิก</h3>
        <div className="form-control">
          <label>ชื่อสมาชิก</label>
          <input type="text" placeholder="" />
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input type="password" placeholder="" />
        </div>
        <div className="form-control">
          <button type="submit" className="btn-login">
            เข้าสู่ระบบ
          </button>
        </div>
        <div className="register"><NavLink to="/">ลืมรหัสผ่าน</NavLink> / <NavLink to="/register">สมัครสมาชิก</NavLink></div>

      </form>
    </div>
  );
}

export default Login;
