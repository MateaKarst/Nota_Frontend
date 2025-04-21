import { useState } from "react";

import '../../styles/components/header.css';

const HeaderMySongs = () => {
  const [activeTab, setActiveTab] = useState("my-songs");

  const tabs = [
    { id: "my-songs", label: "My songs" },
    { id: "collaborations", label: "Collaborations" },
    { id: "liked-songs", label: "Liked songs" },
  ];

  return (
    <header className="header" style={{ backgroundColor: 'var(--color-pink)', paddingTop: "32px" }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </header>
  );
};

export default HeaderMySongs;
