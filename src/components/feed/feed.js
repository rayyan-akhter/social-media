import React from 'react';
import "./feed.css";
import Share from '../share/share';
import Post from '../post/post';

const Feed = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />

       

         {users.map(user => (
          <div key={user.username}>
            {user.images && user.images.length > 0 && (
              user.images.map((image, index) => (
                <Post
                  key={index}
                  userImage={image}
                  username={user.username}
                  profileImage={user.profileImage} 
                />
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
