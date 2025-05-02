import React from 'react';
import '../styles/pages/home-page.css';
import CaroselCard from '../components/MusicCard/CaroselCard/CaroselCard';
import HeaderMain from '../components/Headers/HeaderProfile';
import FriendsCard from '../components/FriendsCard';
import BottomNavBar from '../components/BottomNavBar';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard'

const HomePage = () => {
  return (
    <div className="home-page">
      <HeaderMain/>

      <div className="songs-scroll">
        <div className="add-song">+</div>
        <MusicCard title="Midnight echo" artist="Nutella" />
        {/* інші пісні */}
      </div>

      {/* <SectionHeader title="New songs" /> */}
      <div className="horizontal-scroll">
        <MusicCard title="Paris 2012" artist="Emily Star +3" />
        <MusicCard title="Jazzy night" artist="Lily Vermeer +5" />
      </div>

      {/* <SectionHeader title="Collaborations" /> */}
      <div className="horizontal-scroll">
        <MusicCard title="Dreamy" artist="Bestguitar123 +2" />
        <MusicCard title="Memories" artist="Jamesvoice +4" />
      </div>

      <SectionHeader title="Connections" />
      <div className="horizontal-scroll">
        <FriendsCard name="Violeta" />
        <FriendsCard name="Sofiia" />
        <FriendsCard name="Petra" />
        <FriendsCard name="Mateas" />
      </div>

      {/* <SectionHeader title="Trendy songs" /> */}
      <div className="horizontal-scroll">
        <CaroselCard/>
      </div>

      {/* <BottomNavBar /> */}
    </div>
  );
};

export default HomePage;
