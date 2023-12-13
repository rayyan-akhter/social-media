import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-transparent.png";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email && password) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      console.log(storedUsers);
      const existingUser = storedUsers.find((user) => user.email === email);
      if (!existingUser) {
        alert("No user found with this email");
        return;
      }
      if (existingUser.email === email && existingUser.password === password) {
        console.log("Login successful!");
        navigate("/home");
        localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
        localStorage.setItem("isLogin", true);
      } else if (existingUser.password !== password) {
        console.log("incorrect");
        return alert("Incorrect password");
      }
    } else {
      alert("Please enter email and password");
    }

    setEmail("");
    setPassword("");
  };
  const navigation = () => {
    navigate("/register");
    console.log("clicked");
  };

  console.log(password, email);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img src={logo} alt="" className="loginLogo" />
          <span className="loginDescriptiion">
            Connect with freinds and world around Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className="formBox" onSubmit={handleLogin}>
              <input
                className="loginInput"
                placeholder="email"
                value={email}
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              
              <input
                className="loginInput"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
              <button class="loginBtn" onClick={handleLogin}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front">Log In</span>
              </button>
            </form>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegisterBtn" onClick={navigation}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
