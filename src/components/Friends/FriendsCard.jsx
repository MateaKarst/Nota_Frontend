import React from "react";
import Friend from "./Friend";

import '../../styles/components/friend.css';

import { ReactComponent as Violeta } from "../../assets/avatars/violeta.svg";
import { ReactComponent as Sofiia } from "../../assets/avatars/sofiia.svg";
import { ReactComponent as Petra } from "../../assets/avatars/petra.svg";
import { ReactComponent as Matea } from "../../assets/avatars/matea.svg";

const friendsData = [
  { name: "Violeta", ProfilePicture: Violeta, hasNewPosts: true, newPostsCount: 1 },
  { name: "Sofiia", ProfilePicture: Sofiia, hasNewPosts: true, newPostsCount: 3 },
  { name: "Petra", ProfilePicture: Petra, hasNewPosts: false, newPostsCount: 0 },
  { name: "Matea", ProfilePicture: Matea, hasNewPosts: false, newPostsCount: 0 },
];

const FriendsCard = () => {
  return (
    <div className="friends-section">
      <h2 className="friends-heading">Connections</h2>
      <div className="friends-row">
        {friendsData.map((friend, index) => (
          <Friend
            key={index}
            name={friend.name}
            ProfilePicture={friend.ProfilePicture}
            hasNewPosts={friend.hasNewPosts}
            newPostsCount={friend.newPostsCount}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsCard;
