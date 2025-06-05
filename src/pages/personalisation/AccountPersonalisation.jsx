import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Cookies from "js-cookie";
import API_ENDPOINTS from "../../routes/apiEndpoints";

import Buttons from "../../components/Buttons/BasicBtn";
import ProfileSVG from "../../components/Navigation/SVGcode/ProfileSvg";
import backgroundImg from "../../assets/backgrounds/headphones-image.jpg";

import "../../styles/pages/personalisation/account-personalisation.css";

const PersonalizationAccount = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    if (user?.access_token) {
      Cookies.set("access_token", user.access_token, { expires: 7, sameSite: "lax" });
      console.log("accessToken", user.access_token)
    }
  }, [user]);

  if (!user) return null;

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


  const handleSave = async () => {
    try {
      const accessToken = user?.access_token || Cookies.get("access_token");
      if (!accessToken) throw new Error("No access token");

      const payload = {
        name,
        profile_description: description,
        avatar: profileImage,
      };
      console.log(payload)
      
      const userId = user.id;
      const res = await fetch(API_ENDPOINTS.USER(userId), {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Update failed:", errorData.message);
        return;
      }

      const result = await res.json();
      console.log("Updated successfully:", result);
      navigate("/personalisation1-filters");
    } catch (err) {
      console.error("Unexpected error:", err);
    }
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
          <div className="plus-icon">+</div>
        </div>

        <p className="add-picture-text">Add profile picture</p>
      </div>

      <div className="personalisation-block">
        <h3 className="name-prompt">How should we call you?</h3>
        <div className="form-section">
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Introduce yourself..."
            className="textarea-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="personalisation-block">
        <Buttons type="default" text="Save" onClick={handleSave} />
      </div>
    </div>
  );
};

export default PersonalizationAccount;
