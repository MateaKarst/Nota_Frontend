import { useState } from "react";
import '../../styles/components/tabs-mixer.css';

const TabsMixer = () => {
  const [activeTab, setActiveTab] = useState("my-songs");

  const tabs = [
    { id: "mixer", label: "Mixer" },
    { id: "volume", label: "Volume" },
      ];

  return (
    <header className="header" style={{  backgroundColor: 'var(--color-black)'}}>
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

export default TabsMixer;
