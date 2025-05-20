import React from 'react'

import "../../styles/components/tracks/user-track.css"

import profImg from "../../assets/avatars/violeta.svg"

const UserTrack = () => {
    return (
        <div className="voice-card">
            <div className="user-info">
                <img src={profImg} alt="Samantha" className="avatar" />
                <div className="user-info-txt">
                    <p className="name">Samantha</p>
                    <p className="tag">#Vocal</p>
                </div>
            </div>
            <div className="waveform"></div>
            <div className="toggle"></div>
        </div>
    );
}

export default UserTrack