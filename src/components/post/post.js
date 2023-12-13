import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import commentIcon from "../../assets/comment.png";
import heartICon from "../../assets/heart.png";
import "./post.css";
import profilePic from "../../assets/profileImage.jpg"

const Post = ({ userImage, username, profileImage }) => {

  const [liked, setLiked] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLiked(isLiked ? liked - 1 : liked + 1);
    setIsLiked(!isLiked);
    console.log(liked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={profileImage || profilePic} alt="" />
            <span className="postUsername">{username}</span>
          </div>
          <div className="postTopRight">
            <MdMoreVert />
          </div>
        </div>
        <div className="postCenter">
          
          <img src={userImage} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={heartICon}
              alt=""
              onClick={likeHandler}
            />
            <img className="likeIcon" src={commentIcon} alt="" />
            <span className="postLikeCount">{liked} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">0 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
