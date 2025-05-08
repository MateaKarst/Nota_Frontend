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
        <MusicCard title="Rain of tears" creator="Jamy Lynn"  contributersNbr={3} imageUrl={"https://marketplace.canva.com/EAF7ByCEv4s/1/0/1600w/canva-black-and-white-vintage-photocentric-hip-hop-album-cover-0FHtwVWQXj0.jpg"} />
      </div>
      </div>

      <div> <div className='title-content'><h1 className='title'>Collaborations</h1>
<BasicBtn type="viewAll" text="View All"></BasicBtn>
</div>
      <div className="horizontal-scroll">
        <MusicCard title="Dreamy" creator="Bestguitar123" contributersNbr={1} imageUrl={"https://zephyrcreates.com/wp-content/uploads/2019/06/music-covers-WEB-zephyr-02.jpg"}/>
        <MusicCard title="Memories" creator="Jamesvoice" contributersNbr={3} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyTorJIR0tNNomdWa658IJu-5BDkUJHu1CQ&s"}/>
        <MusicCard title="HeartBit" creator="Korin" contributersNbr={4} imageUrl={"https://tiogatours.nl/dynamic/img/amerika/new-york/new-york-empire-sunset.6.b958.jpg"}/>
      </div>
      </div>

      
      <FriendsCard/>

      <div> <div className='title-content'><h1 className='title'>Trendy songs</h1>
<BasicBtn type="viewAll" text="View All"></BasicBtn>
</div>
      <div className="horizontal-scroll">
        <MusicCard title="LightNight" creator="MamaMia" contributersNbr={2} imageUrl={"https://cdn.shopify.com/s/files/1/0657/3100/2634/files/papier-peint-casque-audio-casque-stylise-avec-eclaboussures-de-peinture-vibrantes_1318c681-3a8c-4270-9c48-3ab42ba5ee65.png?v=1734363202"}/>
        <MusicCard title="Purple elctr" creator="Jannnny" contributersNbr={4} imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqoRyHngtph8Vhci1qztM_S0sPM01VpyscQ&s"}/>
        <MusicCard title="Lady Bird" creator="HoverG" contributersNbr={1} imageUrl={"https://wallpapersok.com/images/hd/mirror-pathway-infinity-loop-w9ay5sbritfsvep0.jpg"}/>
      </div>
      </div>

      <NavBar/>
    </div>
  );
};

export default HomePage;
