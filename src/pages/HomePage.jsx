import React from 'react';
import '../styles/pages/home-page.css';
import HomeCarousel from '../components/Home/HomeCarousel';
import HeaderMain from '../components/Headers/HeaderMain';
import MusicCard from '../components/MusicCard/HomeAndMySongsCards/MusicCard';
import BasicBtn from '../components/Buttons/BasicBtn'
import FriendsCard from '../components/Friends/FriendsCard';
import NavBar from '../components/Navigation/NavBar'

const HomePage = () => {
  return (
    <div className="home-page">

      <div className="hero-wrapper">
      <HeaderMain className="header" />
        <div className="home-carousel-overlay">
          <h1 className='title'>My Songs</h1>
          <HomeCarousel />
        </div>
      </div>

      <div> <div className='title-content'><h1 className='title'>New songs</h1>
<BasicBtn type="viewAll" text="View All"></BasicBtn>
</div>
      <div className="horizontal-scroll">
        <MusicCard title="Paris 2012" creator="Emily Star" contributersNbr={2} imageUrl={"https://img.freepik.com/free-photo/aesthetic-universe-nature-background-earth-mountain-remixed-media_53876-128642.jpg?t=st=1746643209~exp=1746646809~hmac=d25d49f85f544f590b5928dc145e7a5af7e402a9e263f642dbc57f2973a32c72&w=1380"}/>
        <MusicCard title="Jazzy night" creator="Lily Vermeer" contributersNbr={4} imageUrl={"https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-129243.jpg?t=st=1746643324~exp=1746646924~hmac=743b8d04f706426c4dc0e517a8ae5606de9522b6b6355ff65dac23521264dc0d&w=1380"}  />
        <MusicCard title="Rain of tears" creator="Jamy Lynn"  contributersNbr={3} imageUrl={"https://img.freepik.com/free-photo/closeup-view-beautiful-japanese-umbrellas_185193-162917.jpg?t=st=1746643657~exp=1746647257~hmac=c43e416111ed392589a1936822ec937a0df01dccce93c800ed8a1a3fe5a4d9fc&w=1380"}/>
      </div>
      </div>

      <div> <div className='title-content'><h1 className='title'>Collaborations</h1>
<BasicBtn type="viewAll" text="View All"></BasicBtn>
</div>
      <div className="horizontal-scroll">
        <MusicCard title="Dreamy" creator="Bestguitar123" contributersNbr={1} imageUrl={"https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394914.jpg?t=st=1746643614~exp=1746647214~hmac=a7e5c96486e48adbc90516fa4a6cdf0cec31c7bdb7c167ad72b00b88966a15b0&w=740"}/>
        <MusicCard title="Memories" creator="Jamesvoice" contributersNbr={3} imageUrl={"https://img.freepik.com/free-photo/colorful-floral-background-wallpaper-trippy-aesthetic-design_53876-128684.jpg?t=st=1746643570~exp=1746647170~hmac=0ba17f92d1e2691e78daca127bd3f9857f3df09f04502382721058cd18655527&w=1380"}/>
        <MusicCard title="HeartBit" creator="Korin" contributersNbr={4} imageUrl={"https://img.freepik.com/free-photo/dreamy-arrangement-with-decorative-dried-flowers_23-2151363285.jpg?t=st=1746643542~exp=1746647142~hmac=e4f44690d9487e446ad5d79987196dd8c292cbf324764167e18cf0f9cd4e538c&w=740"}/>
      </div>
      </div>

      <div className='friends-section'>
      <FriendsCard/>
      </div>

      <div> <div className='title-content'><h1 className='title'>Trendy songs</h1>
<BasicBtn type="viewAll" text="View All"></BasicBtn>
</div>
      <div className="horizontal-scroll">
        <MusicCard title="LightNight" creator="MamaMia" contributersNbr={2} imageUrl={"https://img.freepik.com/free-photo/background-bokeh-red-hearts_23-2149440429.jpg?t=st=1746643483~exp=1746647083~hmac=7ad8fd2819dbeb83cd16ca3097c8d4d149d1fafdd7acd693860d073bb615ab44&w=740"}/>
        <MusicCard title="Purple elctr" creator="Jannnny" contributersNbr={4} imageUrl={"https://img.freepik.com/free-vector/red-neon-rose-mobile-phone-background_53876-98926.jpg?t=st=1746643449~exp=1746647049~hmac=9603114130e78c3cdcbc7a7251cc88b92c9f9515d3e8221d0c5bb8a9f5362aa5&w=740"}/>
        <MusicCard title="Lady Bird" creator="HoverG" contributersNbr={1} imageUrl={"https://img.freepik.com/free-photo/abstract-fantasy-landscape-with-color-year-purple-tones_23-2151394170.jpg?t=st=1746643412~exp=1746647012~hmac=89cfcdad1f9b74393cbe964b2dc9e063f2c296ee105e0d7de8b261352fc89f20&w=900"}/>
      </div>
      </div>

      <NavBar/>
    </div>
  );
};

export default HomePage;
