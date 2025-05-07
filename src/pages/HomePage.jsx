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
        <MusicCard title="Paris 2012" creator="Emily Star" contributersNbr={2} imageUrl={"https://img.freepik.com/free-photo/red-flowers-hanging_23-2147836502.jpg?t=st=1746465875~exp=1746469475~hmac=2b50e96ae67c0fbace87a40bf625dbf65a1377e4ce5372a5d8efdaefff9010ab&w=1380"}/>
        <MusicCard title="Jazzy night" creator="Lily Vermeer" contributersNbr={4} imageUrl={"https://static.vegsoc.org/app/uploads/2024/07/shutterstock_2315756181.jpg"}  />
        <MusicCard title="Rain of tears" creator="Jamy Lynn"  contributersNbr={3}/>
      </div>
      </div>

      <div> <div className='title-content'><h1 className='title'>Collaborations</h1>
<BasicBtn type="viewAll" text="View All"></BasicBtn>
</div>
      <div className="horizontal-scroll">
        <MusicCard title="Dreamy" creator="Bestguitar123" contributersNbr={1}/>
        <MusicCard title="Memories" creator="Jamesvoice" contributersNbr={3}/>
        <MusicCard title="HeartBit" creator="Korin" contributersNbr={4}/>
      </div>
      </div>

      <div className='friends-section'>
      <FriendsCard/>
      </div>

      <div> <div className='title-content'><h1 className='title'>Trendy songs</h1>
<BasicBtn type="viewAll" text="View All"></BasicBtn>
</div>
      <div className="horizontal-scroll">
        <MusicCard title="LightNight" creator="MamaMia" contributersNbr={2}/>
        <MusicCard title="Purple elctr" creator="Jannnny" contributersNbr={4}/>
        <MusicCard title="Lady Bird" creator="HoverG" contributersNbr={1}/>
      </div>
      </div>

      <NavBar/>
    </div>
  );
};

export default HomePage;
