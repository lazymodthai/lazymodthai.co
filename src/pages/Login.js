import React, { useState } from "react";
import "../css/Form.css";
import { NavLink } from "react-router-dom";

function Login() {
  const [userName, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userNameHandler = (e) => {
    const txt = e.target.value;
    setUsername(txt);
  };
  const userPasswordHandler = (e) => {
    const txt = e.target.value;
    setUserPassword(txt);
  };
  const sendForm = (e) => {
    e.preventDefault();
    console.log(
      `
      Username : ${userName}
      Password : ${userPassword}
      `
    );
    setUsername("")
    setUserPassword("")
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={sendForm}>
        <h3>เข้าสู่ระบบสมาชิก</h3>
        <div className="form-control">
          <label>ชื่อสมาชิก</label>
          <input
            type="text"
            placeholder=""
            value={userName}
            onChange={userNameHandler}
          />
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            placeholder=""
            value={userPassword}
            onChange={userPasswordHandler}
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn-login">
            เข้าสู่ระบบ
          </button>
        </div>
        <div className="register">
          <NavLink to="/">ลืมรหัสผ่าน</NavLink> /{" "}
          <NavLink to="/register">สมัครสมาชิก</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
