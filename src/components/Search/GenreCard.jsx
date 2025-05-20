import React from 'react';
import jazzBg from '../../assets/search/jazz-bg.png';
import rockBg from '../../assets/search/rock-bg.png';
import countryBg from '../../assets/search/country-bg.png';
import metalBg from '../../assets/search/metal-bg.png';
import popBg from '../../assets/search/pop-bg.png';
import indieBg from '../../assets/search/indie-bg.png';
import '../../styles/variables.css'

const genreStyles = {
    jazz: {
        backgroundImage: jazzBg,
        text: 'Jazz',
    },
    rock: {
        backgroundImage: rockBg,
        text: 'Rock',
    },
    country:{
        backgroundImage: countryBg,
        text: 'Country'
    },
    metal: {
        backgroundImage: metalBg,
        text:'Metal'
    },
    pop: {
        backgroundImage: popBg,
        text: 'Pop'
    },
    indie: {
        backgroundImage: indieBg,
        text: 'Indie'
    }

};

const GenreCard = ({ mode = 'jazz'}) => {
    const genre = genreStyles[mode];

    if (!genre) return null;

    const cardStyle = { 
        backgroundImage: `url(${genre.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '160px',
        height: '142px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--font-size-40)',
    };

    return <div style={cardStyle}>#{genre.text}</div>
};

export default GenreCard;