import React from "react";
import "./login.css";
import logo from "../images/lms-logo.png";
import tuitImg from "../images/tuit_2.jpg";

const Login = (props) => {
  const {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    handleLogin,
  } = props;

  return (
    <div className="d-flex min-vh-100">
      <div className="col-sm-12 w-300 h-100 pt-3">
        <div className="container-fluid pt-3">
          <div className="logo w-100 text-center pb-4">
            <img src={logo} alt="lms logo" />
          </div>
          <h4 className="mb-2">Войти</h4>
          {/* form */}
          <div>
            <div className="form-group">
              <label htmlFor="name" className="col-sm-1-12 col-form-label">
                Логин
              </label>
              <input
                type="email"
                className="form-control"
                name="name"
                id="name"
                value={email}
                autoFocus
                placeholder="Введите логин"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p style={{ color: "red" }}>{emailError} </p>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-1-12 col-form-label">
                Пароль
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Введите пароль"
                value={password}
                autoComplete="true"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: "red" }}>{passwordError}</p>
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>
              Войти
            </button>
          </div>
        </div>
      </div>
      <div className="tuitImg">
        <img src={tuitImg} alt="img tuit" />
      </div>
    </div>
  );
};

export default Login;
