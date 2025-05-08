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
            title: "Paradice",
            creator: "Nutella",
            contributersNbr: 2,
        },
        { 
            id: 2,
            imageUrl:"https://c02.purpledshub.com/uploads/sites/40/2023/08/JI230816Cosmos220-6d9254f-edited-scaled.jpg?w=1029&webp=1",
            title: "That time in May",
            creator: "Nutella",
            contributersNbr: 4,
        },
        { 
            id: 3,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmv8JAqQXD9C5gSNnEHyJUsGvVO_vA55x7w&s",
            title: "Dream",
            creator: "Nutella",
            contributersNbr: 2,
        },
        { 
            id: 4,
            imageUrl:"https://www.marthastewart.com/thmb/yhgiLuSTcFaN1WbwUua_W9SMHws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prettiest-flowers-painted-tongue-flower-lead-getty-1123-00763085ad384a9b9bf1f5cc81bee390.jpg",
            title: "Track 4",
            creator: "Parfume",
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