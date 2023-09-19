import React, { useState, useEffect } from "react";
import "../css/Form.css";
import { NavLink } from "react-router-dom";

function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [pdpa, setPdpa] = useState(false);

  const [userCheck, setUserCheck] = useState("");

  const userEmailHandler = (e) => {
    const txt = e.target.value;
    setUserEmail(txt);
  };
  const userNameHandler = (e) => {
    const txt = e.target.value;
    setUsername(txt);
  };
  const userPasswordHandler = (e) => {
    const txt = e.target.value;
    setUserPassword(txt);
  };
  const userPasswordConfirmHandler = (e) => {
    const txt = e.target.value;
    setUserPasswordConfirm(txt);
  };
  const pdpaCheck = () => {
    setPdpa(!pdpa);
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log(
      `
      Email : ${userEmail}
      Username : ${userName}
      Password : ${userPassword}
      Password2 : ${userPasswordConfirm}
      PDPA : ${pdpa}
      `
    );
    setUserEmail("");
    setUsername("");
    setUserPassword("");
    setUserPasswordConfirm("");
  };

  useEffect(() => {
    if (userName !== "") {
      if (userName.length <= 8) {
        setUserCheck("ต้องมีมากกว่า 8 ตัวอักษร");
      } else if (!userName.match(/^[a-z0-9_.,'"!?;:& ]+$/i)) {
        setUserCheck("ต้องเป็นภาษาอังกฤษ/ตัวเลข/อักขระ");
      } else setUserCheck("");
    } else setUserCheck("");
  }, [userName]);

  return (
    <div className="container">
      <form className="login-form" onSubmit={sendForm}>
        <h3>สมัครสมาชิก</h3>
        <div className="form-control">
          <label>อีเมลสมาชิก</label>
          <input
            type="email"
            placeholder=""
            value={userEmail}
            onChange={userEmailHandler}
          />
        </div>
        <div className="form-control">
          <label>
            ตั้งชื่อสมาชิก <span className="check">{userCheck}</span>
          </label>
          <input
            type="text"
            placeholder=""
            value={userName}
            onChange={userNameHandler}
          />
        </div>
        <div className="form-control">
          <label>ตั้งรหัสผ่าน</label>
          <input
            type="password"
            placeholder=""
            value={userPassword}
            onChange={userPasswordHandler}
          />
        </div>
        <div className="form-control">
          <label>ใส่รหัสผ่านอีกครั้ง</label>
          <input
            type="password"
            placeholder=""
            value={userPasswordConfirm}
            onChange={userPasswordConfirmHandler}
          />
        </div>
        <div className="form-control checkbox">
          <input type="checkbox" onChange={pdpaCheck} checked={pdpa} />{" "}
          <span>
            ได้อ่านและยอมรับ<NavLink to="/">เงื่อนไขการเก็บข้อมูล</NavLink>
          </span>
        </div>
        <div className="form-control">
          <button type="submit" className="btn-login">
            สมัครสมาชิก
          </button>
        </div>
        <div className="register">
          <NavLink to="/login">เข้าสู่ระบบหากเป็นสมาชิกอยู่แล้ว</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Register;
