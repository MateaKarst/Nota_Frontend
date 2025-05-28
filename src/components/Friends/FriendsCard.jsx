import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import { useAuth } from "../../context/AuthProvider";
import API_ENDPOINTS from "../../routes/apiEndpoints";

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
  const { user } = useAuth();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      if (!user) return;

      try {
        // Step 1: Fetch friend IDs
        const res = await fetch(API_ENDPOINTS.CONNECTIONS(user.id));
        const connections = await res.json();

        if (!res.ok) throw new Error("Failed to fetch connections");

        // Step 2: Fetch user details for each friend
        const details = await Promise.all(
          connections.map(async (conn) => {
            const res = await fetch(API_ENDPOINTS.USER(conn.friend_id)); // Adjust key if needed
            const data = await res.json();
            return data;
          })
        );

        setFriends(details);
      } catch (err) {
        console.error("Error fetching friend details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [user]);

  if (loading) return <div className="friends-section">Loading...</div>;
  if (!friends.length) return <div className="friends-section">No friends found.</div>;

  return (
    <div className="friends-section">
      <h2 className="friends-heading">Connections</h2>
      <div className="friends-row">
        {friends.map((friend, index) => (
          <Friend
            key={friend.id}
            id={friend.id}
            name={friend.name}
            ProfilePicture={() =>
              friend.avatar ? (
                <img src={friend.avatar} alt={friend.name} className="avatar-img" />
              ) : (
                <div className="default-avatar" />
              )
            }
            hasNewPosts={friend.hasNewPosts}
            newPostsCount={friend.newPostsCount}
          />
        ))}
      </div>
    </div>
  );
};


export default FriendsCard;
