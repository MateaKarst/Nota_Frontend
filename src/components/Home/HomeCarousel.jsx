import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow } from 'swiper/modules'
import CaroselCard from '../MusicCard/CaroselCard/CaroselCard'
import PlusImage from '../../assets/plus-img.png';
import "../../styles/pages/home-page.css"


const HomeCarousel = () => {

    const cards =[
        { 
            id: 1,
            imageUrl:"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            title: "Track 1",
            creator: "Nutella",
            contributersNbr: 2,
        },
        { 
            id: 2,
            imageUrl:"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            title: "Track 2",
            creator: "Nutella",
            contributersNbr: 4,
        },
        { 
            id: 3,
            imageUrl:"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            title: "Track 3",
            creator: "Nutella",
            contributersNbr: 2,
        },
        { 
            id: 4,
            imageUrl:"https://img.freepik.com/premium-vector/beautiful-calm-night-mountain-with-moonlight_104785-1378.jpg",
            title: "Track 4",
            creator: "Nutella",
            contributersNbr: 2,
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
        {cards.map((card) => (
          <SwiperSlide key={card.id} style={{ width: "250px" }}>
            <CaroselCard
              imageUrl={card.imageUrl}
              title={card.title}
              creator={card.creator}
              contributersNbr={card.contributersNbr}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeCarousel;