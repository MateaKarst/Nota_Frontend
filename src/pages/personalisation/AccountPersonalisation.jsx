import React from "react";
import Buttons from "../../components/Buttons/BasicBtn"
import { useState, useRef } from 'react';

import "../../styles/pages/personalisation/account-personalisation.css"

import backgroundImg from "../../assets/backgrounds/headphones-image.jpg";

const PersonalizationAccount = () => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
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
        <div className="onboarding-container" style={{ backgroundImage: `url(${backgroundImg})` }}>

            {/* Block 1: Headings */}
            <div className="personalisation-block">
                <h2 className="heading-primary">Congratulations!</h2>
                <p className="subheading">Let’s get to know you a bit better</p>
            </div>

            {/* Block 2: Profile Picture Upload */}
            <div className="personalisation-block profile-picture-section" onClick={triggerFileInput}>
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
                            style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                        />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                            <circle cx="48" cy="48" r="48" fill="#FFAF00" fillOpacity="0.75" />
                            <text x="50%" y="55%" textAnchor="middle" fontSize="40" fill="#fff" fontFamily="Arial, sans-serif" dy=".3em">
                                +
                            </text>
                        </svg>
                    )}
                </div>

                <p className="add-picture-text">Add profile picture</p>
            </div>

            {/* Block 3: Name Prompt + Fields */}
            <div className="personalisation-block">
                <h3 className="name-prompt">How should we call you?</h3>
                <div className="form-section">
                    <input type="text" placeholder="Username" className="input-field" />
                    <textarea placeholder="Introduce yourself..." className="textarea-field" />
                </div>
            </div>

            {/* Block 4: Button */}
            <div className="personalisation-block">
                <Buttons type="default" text="Save" />
            </div>

        </div>
    );
};

export default PersonalizationAccount;
