import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BasicBtn from '../../components/Buttons/BasicBtn';
import profilePic from '../../assets/avatars/profile.jpg'
import SmallCard from '../../components/MusicCard/SmallCard/SmallCard';
import Pencil from '../../assets/icons/pencil-icon.svg'

import '../../styles/variables.css';
import '../../styles/pages/account-settings/account-settings.css'
import HeaderVariants from '../../components/Headers/HeaderVariants';

const AccountSettings = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState('');
    const [topSongs, setTopSongs] = useState(location.state?.selectedSongs || [
        {
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of tears',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
         {
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of tears',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
         {
            imageUrl:'https://edmwaves.org/wp-content/uploads/2024/01/mario-piu-housewerk-ducamp-the-phone-riot174-2-500x471.jpeg',
            title:'Rain of tears',
            creator:'Lily Vermeer',
            contributors: '+5',
            audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        }
    ]);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/profile');
    };

    const handleEditTopSongs = () => {
        navigate('/select-top-songs', {state: {selectedSongs: topSongs}})
    }

return (
    <div className='account-settings-page'>
        <HeaderVariants mode="text" title="Account"  />

        <div className='profile-section'>
            <div className='profile-picture-container'>
                <img src={profilePic} alt="profile picture" className='profile-picture' />
            </div>
            <p className='edit-picture'>Edit picture</p>

        </div>

        <div>
        <form className='account-form'>
            <label>
                <span>Name</span>
            <input 
            type="text" 
            value={name} 
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
            required />
            </label>

            <label>
                <span>Email</span>
            <input 
            type="email"
            value={email}
            placeholder='you@example.com'
            onChange={e => setEmail(e.target.value)}
            required />
            </label>

            <label>
                <span>Bio</span>
                <textarea
                value={bio}
                onChange={e => setBio(e.target.value)}
                placeholder='Tell us about yourself'
                rows={4}
                maxLength={150} />
            </label>

            <label>
        <span>Interests</span>
        <input
          className='interests'
          type="text"
          value={interests}
          onChange={e => setInterests(e.target.value)}
          placeholder="#music, #jazz, #guitar"
        />
      </label>
      <div onClick={handleSubmit}>
      <BasicBtn text='Save Changes' type="medium"></BasicBtn>
        </div>
        </form>
    </div>

    <div className='top-songs-section'>
        <div className='top-songs-header'>
            <h3>Update top 3 songs</h3>
            <img src={Pencil} alt="edit icon" onClick={handleEditTopSongs} />
        </div>
        <div className='small-cards'>
        {topSongs.map((song, index) => (
            <SmallCard
        key={index}
        imageUrl={song.imageUrl}
        title={song.title}
        creator={song.creator}
        contributersNbr={song.contributersNbr}
        audio={song.audio}
        onPlay={() => {}}
      />
    ))}
    </div>
    </div>
    </div>
)
}
export default AccountSettings;