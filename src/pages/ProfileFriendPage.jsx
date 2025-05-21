import React, { useState } from 'react';
import '../styles/pages/profile-friend-page.css'
import ProfileCard from '../components/profile-container';
import HeaderVariants from '../components/Headers/HeaderVariants';
import SmallCard from '../components/MusicCard/SmallCard/SmallCard';
import NavBar from '../components/Navigation/NavBar';
import emilyImg from '../assets/emily-profile.jpg';

const ProfileFriendPage = () => {
  const [activeTab, setActiveTab] = useState("own"); // "own" або "collab"

  const ownSongs = [
    {
      title: "Ou va le monde",
      creator: "Emily Star",
      contributersNbr: 4,
      imageUrl: "https://img.freepik.com/free-vector/flat-too-gay-too-good-vertical-illustration_23-2150572875.jpg?t=st=1747582791~exp=1747586391~hmac=de2c6b4e3a7ad10d46402a0d94b9fa88c0777a316137a0df66c6c538fa2c0812&w=1380"
    },
    {
      title: "Oui Oui Marie",
      creator: "Emily Star",
      contributersNbr: 3,
      imageUrl: "https://img.freepik.com/free-photo/fantasy-marine-landscape-with-bioluminescent-nature_23-2151206853.jpg"
    },
    {
      title: "Sun Sea Tone",
      creator: "Emily Star",
      contributersNbr: 2,
      imageUrl: "https://img.freepik.com/free-photo/high-angle-shot-beautiful-beach-breathtaking-sunset-sky_181624-26026.jpg?t=st=1747585524~exp=1747589124~hmac=ab1a1f521cbdd65aede4b1606dca436482ba3820d485dce65c3b33a3ec3def7f&w=1380"
    }
  ];

  const collaborations = [
    {
      title: "She is a Devil",
      creator: "Janne",
      contributersNbr: 2,
      imageUrl: "https://img.freepik.com/free-photo/abstract-portrait-with-light-effects_23-2151118133.jpg?t=st=1747585683~exp=1747589283~hmac=f8048ad1e28620fe327eae5bdc7ed7d811afd35ec9d1b2490e1f465ad8dd8b72&w=1380"
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

  // Стилі для кнопок, можна винести в css
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
      <div className="hero-wrapper1">
        <HeaderVariants mode="menu" className="header1" />
        <div style={{ paddingRight: 20, paddingLeft: 20 }}>
          <ProfileCard
            image={emilyImg}
            name="Emily Star"
            tagline="Music is the path of my life and heart🖤"
            connections={15}
            btns={true}
          />
        </div>
      </div>

      <div style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
        <div>
          <div><h1 className='title1'>Top Songs</h1></div>
          <div style={{ display: "flex", flexDirection: "column", alignContent: "left" }}>
            <SmallCard title="My favourite game" creator="Emily StarShine" contributersNbr={4} imageUrl="https://img.freepik.com/free-photo/portrait-woman-posing-with-plastic-foil_23-2148864885.jpg?t=st=1747582494~exp=1747586094~hmac=00f6875f2997120fa41c044c603945afd43a48b9ef16e624344cccdaeffa938e&w=1380" />
            <SmallCard title="Mon dream" creator="Lily Vermeer" contributersNbr={4} imageUrl="https://img.freepik.com/free-vector/hand-drawn-streetwear-illustration_52683-159204.jpg?t=st=1747583383~exp=1747586983~hmac=49226085c9de1c3bb0374ee1d92c9f81571edb43d4d37ffbef8b03fa27953e63&w=1380" />
            <SmallCard title="My Little Star" creator="Emily StarShine" contributersNbr={3} imageUrl="https://img.freepik.com/free-photo/colorful-red-drop-falling-water_23-2147786700.jpg?t=st=1747585599~exp=1747589199~hmac=6ca9e774e3393834b607a4c96e4a3a51c67327f48f32a593f16e1ee5ae679e00&w=1380" />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", padding: 0, paddingBottom: 14 }}>
          <h1 className='title1'>Songs</h1>
          <div style={{ display: "flex", flexDirection: "row", width: "auto", gap: "10px" }}>
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

export default ProfileFriendPage;
