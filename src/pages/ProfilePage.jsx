import React from 'react';
import '../styles/pages/profile-page.css';
import ProfileCard from '../components/profile-container';
import HeaderProfile from '../components/Headers/HeaderProfile';
import SmallCard from '../components/MusicCard/SmallCard/SmallCard';
import BasicBtn from '../components/Buttons/BasicBtn'
import FriendsCard from '../components/Friends/FriendsCard';
import NavBar from '../components/Navigation/NavBar'
import lilyImg from '../assets/lily-profile.jpg'

const ProfilePage = () => {
  return (
    <div className="home-page">

      <div className="hero-wrapper">
      <HeaderProfile className="header" />
        <div style={{padding: 20}}>
          <ProfileCard
          image={lilyImg}
          name="Lily Vermeer"
          tagline="Aspiring vocal musician🌟Open to experiments"
          connections={5}
          btns={false} />
        </div>
      </div>
      <div style={{padding: 20}}>

      <div> <div className='title-content'><h1 className='title'>Top Songs</h1> </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <SmallCard title="Paris 2012" creator="Emily Star" contributersNbr={2} imageUrl={"https://img.freepik.com/free-photo/aesthetic-universe-nature-background-earth-mountain-remixed-media_53876-128642.jpg?t=st=1746643209~exp=1746646809~hmac=d25d49f85f544f590b5928dc145e7a5af7e402a9e263f642dbc57f2973a32c72&w=1380"}/>
        <SmallCard title="Jazzy night" creator="Lily Vermeer" contributersNbr={4} imageUrl={"https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-129243.jpg?t=st=1746643324~exp=1746646924~hmac=743b8d04f706426c4dc0e517a8ae5606de9522b6b6355ff65dac23521264dc0d&w=1380"}  />
        <SmallCard title="Rain of tears" creator="Jamy Lynn"  contributersNbr={3} imageUrl={"https://img.freepik.com/free-photo/closeup-view-beautiful-japanese-umbrellas_185193-162917.jpg?t=st=1746643657~exp=1746647257~hmac=c43e416111ed392589a1936822ec937a0df01dccce93c800ed8a1a3fe5a4d9fc&w=1380"}/>
      </div>
      </div>

      <div> <div style={{display: "flex", flexDirection: "column"}}><h1 className='title'>Songs</h1> 
      <div style={{display: "flex", flexDirection: "row", width: "auto", gap: "10px", paddingRight: "20px"}}>
      <BasicBtn type="switcher1" text="Own Songs"></BasicBtn>
      <BasicBtn type="switcher2" text="Collaborations"></BasicBtn></div>
      </div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <SmallCard title="Dreamy" creator="Bestguitar123" contributersNbr={1} imageUrl={"https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394914.jpg?t=st=1746643614~exp=1746647214~hmac=a7e5c96486e48adbc90516fa4a6cdf0cec31c7bdb7c167ad72b00b88966a15b0&w=740"}/>
        <SmallCard title="Memories" creator="Jamesvoice" contributersNbr={3} imageUrl={"https://img.freepik.com/free-photo/colorful-floral-background-wallpaper-trippy-aesthetic-design_53876-128684.jpg?t=st=1746643570~exp=1746647170~hmac=0ba17f92d1e2691e78daca127bd3f9857f3df09f04502382721058cd18655527&w=1380"}/>
        <SmallCard title="HeartBit" creator="Korin" contributersNbr={4} imageUrl={"https://img.freepik.com/free-photo/dreamy-arrangement-with-decorative-dried-flowers_23-2151363285.jpg?t=st=1746643542~exp=1746647142~hmac=e4f44690d9487e446ad5d79987196dd8c292cbf324764167e18cf0f9cd4e538c&w=740"}/>
      </div>
      </div>
      </div>


      <NavBar/>
    </div>
  );
};

export default ProfilePage;
