import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow } from 'swiper/modules'
import CaroselCard from '../MusicCard/CaroselCard/CaroselCard'
import PlusImage from '../../assets/plus-img.png';
import "../../styles/pages/home-page.css";
import "../../styles/variables.css"


const HomeCarousel = () => {

    const cards =[
        { 
            id: 1,
            imageUrl:"https://i1.sndcdn.com/artworks-f1i9IqHYWtvDYyEx-W6gCAQ-t240x240.jpg",
            title: "Paris 2012",
            creator: "Lily Vermeer",
            contributersNbr: 6,
        },
        { 
            id: 2,
            imageUrl:"https://images.pexels.com/photos/3007347/pexels-photo-3007347.jpeg",
            title: "Ressort",
            creator: "Emily StarShine",
            contributersNbr: 4,
        },
        { 
            id: 3,
            imageUrl:"https://i.pinimg.com/originals/8a/b8/7b/8ab87bd6999d659eb282fbed00895d86.jpg",
            title: "Midnight echo",
            creator: "Nutella",
            contributersNbr: 2,
        },
        { 
            id: 4,
            imageUrl:"https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg",
            title: "Rain of tears",
            creator: "Lily Vermeer",
            contributersNbr: 5,
        },
    ];

    return (
        <div  style={{ width: "100%", padding: "20px 0" }}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        style={{ paddingBottom: "50px" }}
      >

        
        {/* Special + Card */}
        <SwiperSlide style={{ width: '250px' }}>
  <div
    style={{
      width: '200px',
      margin: "0 auto",
      padding: '3px',
      borderRadius: 'var(--border-radius-56)',
      background: 'linear-gradient(135deg, var(--color-purple), var(--color-pink), var(--color-orange), var(--color-yellow))', // gradient border
    }}
  >
    <div
      style={{
        borderRadius: 'var(--border-radius-56)',
        backgroundColor: '#2c2c2c',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '40px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      +
    </div>
  </div>
</SwiperSlide>

        {/* Regular Cards */}
        {cards.map((card) => (
          <SwiperSlide key={card.id} style={{ width: '250px' }}>
            <CaroselCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

        

export default HomeCarousel;