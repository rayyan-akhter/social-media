import React from "react";
import "./sidebar.css";
import { MdBookmarkBorder, MdOutlineHome, MdSettings } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { AiOutlinePicture } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isFlex }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login");
  };
  const navigateTpProfile = () => {
    navigate("/profile");
    console.log("clicked");
  };
  const navigateToMyPosts = () => {
    navigate("/myPost");
    console.log("clicked");
  };
  const backToHome = () => {
    navigate("/home");
  };
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="btn-container" onClick={backToHome}>
          <MdOutlineHome size={23} />
          Home
        </div>
        <div className="btn-container">
          <FcLike size={22} />
          My Likes
        </div>
        <div className="btn-container">
          <MdBookmarkBorder size={22} />
          My Bookmark
        </div>
        <div className="btn-container" onClick={navigateToMyPosts}>
          <AiOutlinePicture size={22} />
          My Posts
        </div>
        <div className="btn-container" onClick={navigateTpProfile}>
          <CgProfile size={22} />
          My Profile
        </div>
        <div className="btn-container" onClick={logout}>
          <MdSettings size={22} />
          Logout
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
