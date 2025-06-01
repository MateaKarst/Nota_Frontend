import React, { useEffect, useState } from "react";
import Friend from "./Friend";
import { useAuth } from "../../context/AuthProvider";
import API_ENDPOINTS from "../../routes/apiEndpoints";
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

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
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    if (user?.access_token) {
      Cookies.set("access_token", user.access_token, { expires: 7, sameSite: "lax" });
    }

    const userId = user.id;
    console.log("user on friendcard:", user);
    console.log("user on friendcard userId:", userId);

    const fetchFriends = async () => {
      setLoading(true);
      setError(null);

      try {
        const accessToken = await Cookies.get("access_token") || user.access_token;
        if (!accessToken) throw new Error("No access token available");


        const res = await fetch(API_ENDPOINTS.CONNECTIONS(userId), {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch connections");

        const connections = await res.json();
        console.log("connections fetched:", connections);

        // Filter out connections missing connection_id
        const validConnections = connections.filter(conn => {
          if (!conn.connection_id) {
            console.warn("Skipping connection without connection_id:", conn);
            return false;
          }
          return true;
        });

        // Fetch friend details only for valid connection_ids
        const details = await Promise.all(
          validConnections.map(async (conn) => {
            const res = await fetch(API_ENDPOINTS.USER(conn.connection_id), {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
            console.log("details res", res)

            if (!res.ok) {
              console.error(`Failed to fetch friend data for id: ${conn.connection_id}`, await res.text());
              return null;
            }

            const data = await res.json();
            console.log("details data", data)
            console.log("Fetched friend data:", data);
            return data;
          })
        );


        // Filter out nulls from failed fetches
        setConnections(details.filter(Boolean));

      } catch (err) {
        console.error("Error fetching friend details:", err);
        setError(err.message || "Failed to load friends");
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [user]);

  if (loading) return <div className="friends-section">Loading...</div>;
  if (error) return <div className="friends-section error">Error: {error}</div>;
  if (!connections.length) return <div className="friends-section">No friends found.</div>;

  return (
    <div className="friends-section">
      <h2 className="friends-heading">Connections</h2>
      <div className="friends-row">
        {connections.map((connection, index) => {
          if (!connection.user.user?.id) {
            console.warn("Missing user ID for connection:", connection);
            return null; // Skip rendering this item
          }

          const userId = connection.user.user?.id;
          console.log("userId on friend card", userId);

          return (
            <Link key={userId || index} to={`/profilefriend/${userId}`}>
              <Friend
                id={userId}
                name={`${connection.user_details.first_name} ${connection.user_details.last_name}`}
                ProfilePicture={() =>
                  connection.user_details.avatar ? (
                    <img src={connection.user_details.avatar} alt={connection.user_details.first_name} className="avatar-img" />
                  ) : (
                    <div className="default-avatar" />
                  )
                }
                hasNewPosts={connection.user_details.hasNewPosts}
                newPostsCount={connection.user_details.newPostsCount}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};


export default FriendsCard;
