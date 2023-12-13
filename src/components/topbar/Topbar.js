import Drawer from "@mui/material/Drawer";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoWhiteTransparent.png";
import Sidebar from "../sidebar/sidebar";
import profilePic from "../../assets/profileImage.jpg"


import "./topbar.css";

const Topbar = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    console.log("heyy");
    if (!localStorage.isLogin) {
      navigate("/login");
    }
  });
  const navigateTpProfile = () => {
    navigate("/profile");
    console.log("clicked");
  };

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="topBarContainer">
      <RxHamburgerMenu
        onClick={toggleDrawer}
        size={25}
        className="drawerLogo"
      />
      <Drawer elevation={1} anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Sidebar />
      </Drawer>

      <div className="topBar">
        <div className="topBarLeft">
          <img src={logo} alt=""  className="topBarLogo"/>
          <span className="userName">Hey {loggedInUser.username}</span>
        </div>
        <div className="topBarCenter">
          <form class="form">
            <button>
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  stroke-width="1.333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <input
              class="input"
              placeholder="Type your text"
              required=""
              type="text"
            />
            <button class="reset" type="reset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="topBarRight" onClick={navigateTpProfile}>
          <img src={loggedInUser.profileImage || profilePic} className="topBarImg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
