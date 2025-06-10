import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow } from 'swiper/modules'
import CaroselCard from '../MusicCard/CaroselCard/CaroselCard'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import API_ENDPOINTS from '../../routes/apiEndpoints';

const HomeCarousel = ({ onPlay, onAddClick }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchUserSongs = async () => {
      try {
        // assuming your API supports filtering songs by user_id via query params or POST body
        const res = await fetch(`${API_ENDPOINTS.SONGS.MULTIPLE}?user_id=${user.id}`);
        const data = await res.json();

        // transform data if necessary to match your card format
        const userSongs = data.map(song => ({
          id: song.id,
          imageUrl: song.cover_image || 'default-image-url.jpg',
          title: song.title,
          creator: song.user_details?.username || user.username,
          contributersNbr: song.tracks?.length || 1,
          audio: song.compiled_path || 'default-audio-url.mp3',
        }));

        setCards(userSongs);
      } catch (error) {
        console.error("Failed to fetch user's songs", error);
      }
    };

    fetchUserSongs();
  }, [user]);

  return (
    <div style={{ width: "100%", padding: "20px 0" }}>
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
        style={{ paddingBottom: "0px" }}
      >
        {/* Special + Card */}
        <SwiperSlide style={{ width: '250px' }}>
          <div
            style={{
              width: '200px',
              margin: "0 auto",
              padding: '3px',
              borderRadius: 'var(--border-radius-56)',
              background: 'linear-gradient(135deg, var(--color-purple), var(--color-pink), var(--color-orange), var(--color-yellow))',
            }}
          >
            <div
              onClick={onAddClick}
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

        {/* User's Songs */}
        {cards.map((card) => (
          <SwiperSlide
            key={card.id}
            style={{ width: '250px' }}
            onClick={() => navigate(`/song-description/${card.id}`, {
              replace: true,
              state: { title: card.title, imageUrl: card.imageUrl }
            })}
          >
            <CaroselCard
              {...card}
              onPlay={() =>
                onPlay({
                  title: card.title,
                  artist: card.creator,
                  cover: card.imageUrl,
                  audio: card.audio,
                })
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
