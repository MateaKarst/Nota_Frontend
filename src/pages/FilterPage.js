import React, { useState } from 'react';
import MusicTag from '../components/MusicTag';
import SmallButton from '../components/SmallButton';
import Small2 from '../components/Small2';
import '../styles/pages/filterpage.css';
import HeaderVariants from '../components/header-backarrow';

const FilterPage = () => {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag) => {
        setSelectedTags((prevTags) => 
            prevTags.includes(tag)
            ? prevTags.filter((selectedTag) => selectedTag !== tag)
            : [...prevTags, tag]
        );
    };

    const instrumentTags = [
        'Vocal', 'Accordion', 'Ukulele', 'Flute', 'Guitar', 'Piano', 'Drums', 'Saxophone', 'Violin', 'Trombone', 'Double Bass'
    ];

    const genreTags = [
        'Pop', 'Rock', 'Hip-Hop', 'Rap', 'Jazz', 'Classical', 'Country', 'Metal', 'Funky', 'Indie', 'Electronic', 'Folk', 'Blues'
    ];

    return (
        <div className="filter-page">
            <HeaderVariants mode={"default"} />
            <div className="container">
                <p className="heading">Instruments</p>
                <div className="tags-container">
                    {instrumentTags.map((tag, index) => (
                        <MusicTag
                            key={index}
                            text={tag}
                            colorIndex={0}
                            isSelected={selectedTags.includes(tag)}
                            onClick={() => handleTagClick(tag)}
                        />
                    ))}
                </div>
            </div>

            {/* Genres */}
            <div className="container">
                <p className="heading">Genres</p>
                <div className="tags-container">
                    {genreTags.map((tag, index) => (
                        <MusicTag
                            key={index}
                            text={tag}
                            colorIndex={2}
                            isSelected={selectedTags.includes(tag)}
                            onClick={() => handleTagClick(tag)} // Add the onClick handler here too
                        />
                    ))}
                </div>
            </div>

            {/* Buttons Section */}
            <div className="buttons-section">
                <Small2 text="Cancel" />
                <SmallButton text="Apply" />
            </div>
        </div>
    );
};

export default FilterPage;
