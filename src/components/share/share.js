import React from "react";
import "./share.css";
import {
  MdPermMedia,
  MdLabel,
  MdLocationOn,
  MdEmojiEmotions,
} from "react-icons/md";
import { useRef } from "react";
import profilePic from "../../assets/profileImage.jpg"
const Share = () => {
  const fileInputRef = useRef(null);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const handleMediaClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const dataUrl = await readFileAsDataURL(file);

        loggedInUser.images = loggedInUser.images || [];
        loggedInUser.images.push(dataUrl);
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const loggedInUserIndex = users.findIndex((user) => user.username === loggedInUser.username);

        if (loggedInUserIndex !== -1) {
          users[loggedInUserIndex].images = users[loggedInUserIndex].images || [];
          users[loggedInUserIndex].images.push(dataUrl);
          localStorage.setItem("users", JSON.stringify(users));
        }

      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={loggedInUser.profileImage || profilePic} alt="" />
          <input className="shareInput" placeholder="whats in your mind??" />
        </div>

        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption" onClick={handleMediaClick}>
              <MdPermMedia color="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdLabel color="blue" className="shareIcon" />
              <span className="shareOptionText">tag</span>
            </div>
            <div className="shareOption">
              <MdLocationOn color="green" className="shareIcon" />
              <span className="shareOptionText">location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions color="goldenrod" className="shareIcon" />
              <span className="shareOptionText">feelings</span>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <button className="shareBtn">share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
