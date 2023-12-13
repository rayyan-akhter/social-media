import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import logo from "../../assets/logo-transparent.png"


const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleRegister = () => {
    if (username && email && password && rePassword) {
      if (password !== rePassword) {
        alert("Passwords do not match");
        return;
      }
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const existingEmailUser = storedUsers.find(
        (user) => user.email === email
      );
      const existingUsernameUser = storedUsers.find(
        (user) => user.username === username
      );

      if (existingEmailUser) {
        alert("Email already registered");
        return;
      }

      if (existingUsernameUser) {
        alert("Username already registered");
        return;
      }

      const newUser = {
        username,
        email,
        password,
        images: [] 
      };

      localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
      setUsername("");
      setPassword("");
      setEmail("");
      setRePassword("");
      alert("you account has been created");

      navigate("/login");
    } else {
      alert("You must fill in all fields");
    }
  };
  const navigation = () => {
    navigate("/login");
    console.log("clicked");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          {/* <h3 className="loginLogo">Social-Nest</h3> */}
          <img src={logo} alt="" className="loginLogo"/>
          <span className="loginDescriptiion">
            Connect with friends and the world around you
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form className="formBox">
              <input
                className="loginInput"
                placeholder="Username"
                value={username}
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="loginInput"
                placeholder="Email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="loginInput"
                placeholder="Password"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="loginInput"
                placeholder="Re-enter Password"
                type="password"
                value={rePassword}
                required
                onChange={(e) => setRePassword(e.target.value)}
              />
              
               <button class="loginBtn" onClick={handleRegister}>
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front">Sign Up</span>
              </button>
            </form>
            <button className="loginRegisterBtn" onClick={navigation}>
              Log into account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
