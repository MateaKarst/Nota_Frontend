import React, {useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import SmallCard from "../../components/MusicCard/SmallCard/SmallCard";
import BasicBtn from "../../components/Buttons/BasicBtn";

const allSongs = [
     {
            id:1,
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of tears',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        }, 
        {
            id:2,
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of beers',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
         {
            id:3,
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of tears',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
         {
            id:4,
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of tears',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
         {
            id:5,
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of tears',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
];

const SelectTopSongs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previouslySelected = location.state?.selectedSongs || [];

  const [selected, setSelected] = useState(() => {
  return previouslySelected.map(sel => {
    const matched = allSongs.find(song =>
      song.title === sel.title && song.creator === sel.creator
    );
    return matched || sel;
  });
});

  const toggleSelect = (song) => {
    const isSelected = selected.some(s => s.id === song.id);

    if (isSelected) {
      setSelected(selected.filter(s => s.id !== song.id));
    } else {
      if (selected.length >= 3) return; // Max 3 songs
      setSelected([...selected, song]);
    }
  };

  const handleSave = () => {
    navigate('/account-settings', { state: { selectedSongs: selected } });
  };

  return (
    <div>
      <h2 style={{ color: 'white', fontSize: '20px', marginBottom: '16px' }}>Pick your top 3 songs</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {allSongs.map((song, index) => (
          <div
            key={song.id}
            onClick={() => toggleSelect(song)}
            style={{
              border: selected.some(s => s.id === song.id) ? '2px solid var(--color-pink)' : '2px solid transparent',
              borderRadius: '12px',
              padding: '4px',
              pointerEvents: 'auto',
            }}
          >
            <div style={{pointerEvents: 'none'}}>
            <SmallCard
              imageUrl={song.imageUrl}
              title={song.title}
              creator={song.creator}
              contributersNbr={song.contributers}
              audio={song.audio}
              onPlay={() => {}}
            />
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }} onClick={handleSave}>
        <BasicBtn text="Save Selection" />
      </div>
    </div>
  );
};

export default SelectTopSongs;