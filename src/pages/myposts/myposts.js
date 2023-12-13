import React from "react";
import Post from "../../components/post/post";
import Share from "../../components/share/share";
import Topbar from "../../components/topbar/Topbar";
import "./myposts.css";

const MyPost = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  return (
    <>
      <Topbar profile={true} />
      <div className="myPostContainer">
        <Share />
        
        {loggedInUser.images &&
          loggedInUser.images.length > 0 &&
          loggedInUser.images.map((image, index) => (
            <Post
              key={index}
              userImage={image}
              username={loggedInUser.username}
              profileImage={loggedInUser.profileImage}
            />
          ))}
      </div>
    </>
  );
};

export default MyPost;
