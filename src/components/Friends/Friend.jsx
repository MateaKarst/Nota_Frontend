import React from "react";

import "../../styles/variables.css";
import "../../styles/components/friend.css";

const Friend = ({ name, ProfilePicture, hasNewPosts, newPostsCount }) => {
  return (
    <div className="friend-profile">
      <div className="profile-picture-container">
        <ProfilePicture className="profile-picture"/>
        {/* Conditionally render the notification circle based on hasNewPosts */}
        {hasNewPosts && newPostsCount > 0 && (
          <div className="notification-circle">
            {newPostsCount}
          </div>
        )}
      </div>
      <p className="friend-name">{name}</p>
    </div>
  );
};

export default Friend;
