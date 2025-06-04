import React, { useState } from 'react';
import '../styles/pages/viewall.css';
import HeaderVariants from '../components/Headers/HeaderVariants';
import SmallCard from '../components/MusicCard/SmallCard/SmallCard';
import { useLocation } from 'react-router-dom';

const ViewAllPage = () => {
  const location = useLocation();
 const [currentSong, setCurrentSong] = useState(null);
  const title = location.state?.title || 'All Songs';

  return (
    <div style={{ backgroundColor: "#343331", paddingBottom: "20px", alignContent: "content", maxWidth: "1200px", margin: "0 auto", }}>
      <div className="fixed-header">

        <HeaderVariants mode="black text" title={title} />

      </div>

      <div style={{ paddingLeft: 20, backgroundColor: "#343331", marginBottom: "20px", height: "auto", paddingTop: 90, paddingBottom: 40 }}>
        <SmallCard title="Hart Hurt" creator="Katty Smog" contributersNbr={3} imageUrl="https://img.freepik.com/free-photo/cozy-evening-with-candle-books-blanket_23-2151976329.jpg?t=st=1747595845~exp=1747599445~hmac=364e9eb288c8cfb1483b4accebe953a1ee15eda7f1040f764215713f2ee34482&w=1380" />
        <SmallCard title="MoonDance" creator="Lana Day" contributersNbr={2} imageUrl="https://img.freepik.com/free-photo/close-up-beautiful-blooming-flowers_23-2149316669.jpg?t=st=1747595907~exp=1747599507~hmac=90b0540d394f4632ed48d402ee6a6b803a32063cda10f7e833937d7933bd946d&w=1380" />
        <SmallCard title="Try Out!" creator="Rin Co" contributersNbr={5} imageUrl="https://img.freepik.com/free-photo/front-view-music-concept-with-casette_23-2148605897.jpg?t=st=1747595971~exp=1747599571~hmac=7a42119c5e355a63f5bc596ee547fef9b724640b10edc32f96bf8ce3413b71d5&w=1380" />
        <SmallCard title="Wake Me Up" creator="Comi DJ" contributersNbr={4} imageUrl="https://img.freepik.com/free-photo/close-up-beautiful-optical-fiber-details_23-2149212620.jpg?t=st=1747596001~exp=1747599601~hmac=e9bcd576f15910e13f3905ffb94d2116374a805604b6db90fc3931111b968809&w=1380" />
        <SmallCard title="Hello" creator="Hurrem" contributersNbr={3} imageUrl="https://img.freepik.com/free-photo/abstract-vaporwave-portrait-woman_23-2148950771.jpg?t=st=1747596049~exp=1747599649~hmac=4974792ee14fde5730a3502dcab15a5656fed35cc4f14206b050b882b72331ff&w=1380" />
        <SmallCard title="My Angle" creator="Nelli" contributersNbr={4} imageUrl="https://img.freepik.com/free-photo/closeup-purple-exotic-flower-stringed-background_181624-59675.jpg?t=st=1747596094~exp=1747599694~hmac=ff87de82eb87b9c8290fbd0d91aa445657449e665a2d94cb11423312d03b00a2&w=1380" />
        <SmallCard title="Waterfalling Love" creator="Jimmy Cho" contributersNbr={4} imageUrl="https://img.freepik.com/free-photo/monochrome-view-person-playing-electric-guitar_23-2151406189.jpg?t=st=1747596161~exp=1747599761~hmac=8690670ef245108af0c9da0dc6d3c909d7f6d49398f95243426f7be62006588c&w=1380" />
        <SmallCard title="Que est que" creator="Nancy Hi" contributersNbr={2} imageUrl="https://img.freepik.com/free-photo/metallic-holographic-background_23-2148862181.jpg?t=st=1747596479~exp=1747600079~hmac=1577f13f2209d40065bee71a6c7b3dfcbcf6efc23e5246f9e1c249a4fa0379de&w=1380" />
        <SmallCard title="Votre adore" creator="Megan Fox" contributersNbr={1} imageUrl="https://img.freepik.com/free-photo/abstract-stain-with-ferromagnetic-liquid-metal-with-copy-space_23-2148253549.jpg?t=st=1747596439~exp=1747600039~hmac=4782381cbf2c23d18816fd758e6ad78e14c890cb47edd3407286eb9cf2dd7466&w=1380" />
        <SmallCard title="Purple Sound" creator="Jamy Lynn" contributersNbr={5} imageUrl="https://img.freepik.com/free-photo/monochrome-view-person-playing-electric-guitar_23-2151406191.jpg?t=st=1747596394~exp=1747599994~hmac=4fb8863baaf493f4b36702e5c0b3aec5275dab0b2a2ef5079c61ffb2fc240c62&w=1380" />
      </div>
    </div>
  );
};

export default ViewAllPage;
