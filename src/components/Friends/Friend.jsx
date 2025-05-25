import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/variables.css";
import "../../styles/components/friend.css";

const Friend = ({ name, ProfilePicture, hasNewPosts, newPostsCount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profilefriend");
  };

  return (
    <div className="friend-profile" onClick={handleClick}>
      <div className="profile-picture-container">
        <ProfilePicture className="profile-picture" />
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
