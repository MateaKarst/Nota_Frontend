import React from "react";
import Buttons from "../../components/Buttons/BasicBtn";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import ProfileSVG from "../../components/Navigation/SVGcode/ProfileSvg";

import "../../styles/pages/personalisation/account-personalisation.css";

import backgroundImg from "../../assets/backgrounds/headphones-image.jpg";

const PersonalizationAccount = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // base64 URL
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="onboarding-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="personalisation-block">
        <h2 className="heading-primary">Congratulations!</h2>
        <p className="subheading">Let’s get to know you a bit better</p>
      </div>

      <div
        className="personalisation-block profile-picture-section"
        onClick={triggerFileInput}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />

        <div className="profile-picture-upload">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : (
            <ProfileSVG />
          )}

          {/* Plus icon overlay */}
          <div className="plus-icon">+</div>
        </div>

        <p className="add-picture-text">Add profile picture</p>
      </div>

      <div className="personalisation-block">
        <h3 className="name-prompt">How should we call you?</h3>
        <div className="form-section">
          <input type="text" placeholder="Username" className="input-field" />
          <textarea
            placeholder="Introduce yourself..."
            className="textarea-field"
          />
        </div>
      </div>

      <div className="personalisation-block">
        <Buttons
          type="default"
          text="Save"
          onClick={() => navigate("/personalisation1-filters")}
        />
      </div>
    </div>
  );
};

export default PersonalizationAccount;
