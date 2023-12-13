import React from "react";
import Feed from "../../components/feed/feed";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import profilePic from "../../assets/profileImage.jpg"
import Post from "../../components/post/post";
import { useRef } from "react";


const Profile = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const fileInputRef = useRef(null);

  const handleImageClick = (fileType) => {
    fileInputRef.current.click();
    fileInputRef.current.onchange = (event) => handleFileChange(event, fileType);
  };

  const handleFileChange = async (event, fileType) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const dataUrl = await readFileAsDataURL(file);

        loggedInUser[fileType] = dataUrl;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        const updatedUsers = users.map((user) =>
          user.username === loggedInUser.username ? { ...user, [fileType]: dataUrl } : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));
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
    <>
      <Topbar profile={true}/>
      <div className="profile">
        <div className="profleRight">
          <div className="profileRightTop">
          <div className="profileCover">
              <img
                className="proflieCoverImg"
                src={loggedInUser.coverImage || profilePic}
                alt=""
                onClick={() => handleImageClick("coverImage")}
              />
              <img
                className="proflieUserImg"
                src={loggedInUser.profileImage || profilePic}
                alt=""
                onClick={() => handleImageClick("profileImage")}
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{loggedInUser.username}</h4>
                <span className="profileInfoDescription">my profile</span>
            </div>
          </div>
          <div className="profileRightBottom">
            
          {loggedInUser.images &&
        loggedInUser.images.length > 0 &&
        loggedInUser.images.map((image, index) => (
          <Post
          key={index}
          userImage={image}
          profileImage={loggedInUser.profileImage} 
        />
        ))}       
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Profile;
