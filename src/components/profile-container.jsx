import React from "react";
import "../styles/components/profile-container.css";
import BasicBtn from "../components/Buttons/BasicBtn"
import ConnectBtn from "../components/Buttons/ConnectBtn"
import { useNavigate} from "react-router-dom";

const ProfileCard = ({ image, name, tagline, connections, btns }) => {
    console.log("image path:", image);
    const navigate = useNavigate();
  return (
    <div className="profile-card">
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", alignContent: "space-between", width: "100%"}}>
      <img src={image} alt={`${name}'s profile`} className="profile-img-top" />
      {btns && (
          <div className="profile-buttons">
            
            <ConnectBtn></ConnectBtn>
            <BasicBtn type="mediumOutline" text="Message"  onClick={() => navigate("/chat")}/>
            
          </div>
        )}
        </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-tagline">{tagline}</p>
        <p className="profile-connections">{connections} Connections</p>
        
      </div>
    </div>
  );
};

export default ProfileCard;
