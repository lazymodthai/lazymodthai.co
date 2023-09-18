import React from "react";
import "../css/Form.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="container">

      <form className="login-form">
      <h3>สมัครสมาชิก</h3>
      <div className="form-control">
          <label>อีเมลสมาชิก</label>
          <input type="email" placeholder="" />
        </div>
        <div className="form-control">
          <label>ตั้งชื่อสมาชิก</label>
          <input type="text" placeholder="" />
        </div>
        <div className="form-control">
          <label>ตั้งรหัสผ่าน</label>
          <input type="password" placeholder="" />
        </div>
        <div className="form-control">
          <label>ใส่รหัสผ่านอีกครั้ง</label>
          <input type="password" placeholder="" />
        </div>
        <div className="form-control">
          <button type="submit" className="btn-login">
            สมัครสมาชิก
          </button>
        </div>
        <div className="register"><NavLink to="/login">เข้าสู่ระบบหากเป็นสมาชิกอยู่แล้ว</NavLink></div>
      </form>
    </div>
  );
}

export default Register;
