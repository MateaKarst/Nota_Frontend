import React from 'react';
import MusicTag from '../components/MusicTag';
import SmallButton from '../components/SmallButton';
import Small2 from '../components/Small2';


const FilterPage = () => {
    const styles = {
        page: {
            backgroundColor: 'var(--color-black)', 
            overflowX: 'hidden', 
        },

        container: {
            display: 'flex',
            flexDirection: 'column',
            padding: '0 20px',
        },

        heading: {
          fontFamily: 'var(--font-family-primary)', 
          fontSize: 'var(--font-size-34)',
          color: 'var(--color-white)',         
          fontWeight: 'var(--font-weight-regular)',  
          lineHeight: 'var(--font-line-height-38)',  
          textAlign: 'left',
          marginLeft:'0', 
          padding: '0 20px',
        },

        tagsContainer: {
            padding: '0px 20px', 
            justifyContent: 'center',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
        },

        buttonsSection: {
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '70px',
            padding: '20px',
        }
      };

const instrumentTags = [
    'Vocal' , 'Accordion', 'Ukulele', 'Flute', 'Guitar', 'Piano','Drums', 'Saxophone', 'Violin', 'Trombone', 'Double Bass'
];

const genreTags = [
    'Pop' , 'Rock', 'Hip-Hop', 'Rap', 'Jazz', 'Classical','Country', 'Metal', 'Funky', 'Indie', 'Electronic', 'Folk', 'Blues'
];

    return (
        <div className="filter-page" style={styles.page}>
             <div style={styles.container}>
            <p style={styles.heading}>Instruments</p>
            <div style={styles.tagsContainer}>
                {instrumentTags.map((tag, index) => (
                    <MusicTag key={index} text={tag} colorIndex={0} />
                ))}
            </div>
        </div>

         {/* Genres */}
         <div style={styles.container}>
                <p style={styles.heading}>Genres</p>
                <div style={styles.tagsContainer}>
                    {genreTags.map((tag, index) => (
                        <MusicTag key={index} text={tag} colorIndex={2} />
                    ))}
                </div>
            </div>
            

            {/* Buttons Section */}
            <div className="buttons-section" style={styles.buttonsSection}>
                <Small2 text="Cancel"   />
                <SmallButton text="Apply"  />
            </div>
        </div>
    

     
    );
};

export default FilterPage;