import React, { useState } from 'react';
import '../styles/pages/profile-page.css';
import ProfileCard from '../components/profile-container';
import HeaderProfile from '../components/Headers/HeaderProfile';
import SmallCard from '../components/MusicCard/SmallCard/SmallCard';
import NavBar from '../components/Navigation/NavBar';
import lilyImg from '../assets/lily-profile.jpg';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("own"); // "own" або "collab"

  const ownSongs = [
    {
      title: "Dreamy",
      creator: "Bestguitar123",
      contributersNbr: 1,
      imageUrl: "https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394914.jpg"
    },
    {
      title: "Memories",
      creator: "Jamesvoice",
      contributersNbr: 3,
      imageUrl: "https://img.freepik.com/free-photo/colorful-floral-background-wallpaper-trippy-aesthetic-design_53876-128684.jpg"
    },
    {
      title: "HeartBit",
      creator: "Korin",
      contributersNbr: 4,
      imageUrl: "https://img.freepik.com/free-photo/dreamy-arrangement-with-decorative-dried-flowers_23-2151363285.jpg"
    }
  ];

  const collaborations = [
    {
      title: "Neon Pulse",
      creator: "ElectroNina",
      contributersNbr: 2,
      imageUrl: "https://img.freepik.com/free-photo/futuristic-city-with-neon-lights_23-2148898573.jpg"
    },
    {
      title: "Soul Echo",
      creator: "JazzDev",
      contributersNbr: 5,
      imageUrl: "https://img.freepik.com/free-photo/jazz-stage-lights-singer_23-2148879442.jpg"
    }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Стилі для кнопок
  const switcherBtnStyle = {
    width: "fit-content",
        height: "23px",
        backgroundColor: "transparent",
        color: "var(--color-white)",
        borderRadius: "var(--border-radius-20)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "var(--font-size-14)",
        fontFamily: "var(--font-family-primary)",
        paddingLeft: "20px",
        paddingRight: "20px",
        border: "1px solid var(--color-purple)",
  };

  return (
    <div className="home-page">
      <div className="hero-wrapper">
        <HeaderProfile className="header" />
        <div style={{ padding: 20 }}>
          <ProfileCard
            image={lilyImg}
            name="Lily Vermeer"
            tagline="Aspiring vocal musician🌟Open to experiments"
            connections={5}
            btns={false}
          />
        </div>
      </div>

      <div style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
        <div>
          <div><h1 className='title'>Top Songs</h1></div>
          <div style={{ display: "flex", flexDirection: "column", alignContent: "left" }}>
            <SmallCard title="Paris 2012" creator="Emily Star" contributersNbr={2} imageUrl="https://img.freepik.com/free-photo/aesthetic-universe-nature-background-earth-mountain-remixed-media_53876-128642.jpg" />
            <SmallCard title="Jazzy night" creator="Lily Vermeer" contributersNbr={4} imageUrl="https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-129243.jpg" />
            <SmallCard title="Rain of tears" creator="Jamy Lynn" contributersNbr={3} imageUrl="https://img.freepik.com/free-photo/closeup-view-beautiful-japanese-umbrellas_185193-162917.jpg" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", padding: 0, paddingBottom: 14 }}>
          <h1 className='title'>Songs</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <button
              style={{
                ...switcherBtnStyle,
                backgroundColor: activeTab === "own" ? "var(--color-purple)" : "transparent",
                color: activeTab === "own" ? "var(--color-white)" : "var(--color-white)",
                border: activeTab === "own" ? "none" : "1px solid var(--color-purple)",
              }}
              onClick={() => handleTabClick("own")}
            >
              Own Songs
            </button>

            <button
              style={{
                ...switcherBtnStyle,
                backgroundColor: activeTab === "collab" ? "var(--color-purple)" : "transparent",
                color: activeTab === "collab" ? "var(--color-white)" : "var(--color-white)",
                border: activeTab === "collab" ? "none" : "1px solid var(--color-purple)",
              }}
              onClick={() => handleTabClick("collab")}
            >
              Collaborations
            </button>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {(activeTab === "own" ? ownSongs : collaborations).map((song, index) => (
            <SmallCard
              key={index}
              title={song.title}
              creator={song.creator}
              contributersNbr={song.contributersNbr}
              imageUrl={song.imageUrl}
            />
          ))}
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default ProfilePage;
