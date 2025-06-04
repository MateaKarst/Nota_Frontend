import React, { useState } from "react";
import MusicTag from "./MusicTag";
import "../../../src/styles/components/tag-input.css";

const TagInput = ({ placeholder = "Add tag", type = "instruments" }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // dummy data
  const instruments = ["Guitar", "Piano", "Drums", "Violin", "Bass", "Synth", "Trumpet", "Flute"];
  const genres = ["Rock", "Hip Hop", "Jazz", "Electronic", "Pop", "Blues", "Reggae", "Classical"];
  
  const allSuggestions = {
    Instruments: instruments,
    Genres: genres,
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = {};
    Object.entries(allSuggestions).forEach(([group, items]) => {
      filtered[group] = items.filter(
        (s) =>
          s.toLowerCase().includes(value.toLowerCase()) &&
          !tags.includes(s)
      );
    });

    setFilteredSuggestions(filtered);
  };

  const handleFocus = () => {
    if (inputValue.trim() === "") {
      const filtered = {};
      Object.entries(allSuggestions).forEach(([group, items]) => {
        filtered[group] = items.filter((s) => !tags.includes(s));
      });
      setFilteredSuggestions(filtered);
    }
  };

  const handleBlur = () => {
    setTimeout(() => setFilteredSuggestions([]), 150);
  };

  const handleAddTag = (tag) => {
    setTags((prev) => [...prev, tag]);
    setInputValue("");
    setFilteredSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleAddTag(inputValue.trim());
    }
    if (e.key === "Backspace" && inputValue === "" && tags.length) {
      setTags((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className="tag-input-container">
      <div className="tags-wrapper">
        {tags.map((tag, idx) => (
          <MusicTag
            key={idx}
            text={tag}
            colorIndex={
              instruments.includes(tag) ? 5 : 4 // yellow for instruments, orange for genres
            }
          />
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="tag-input"
          placeholder={placeholder}
        />
      </div>

      {Object.values(filteredSuggestions).some((arr) => arr.length > 0) && (
        <div className="tag-suggestions grouped">
          {Object.entries(filteredSuggestions).map(([group, items]) =>
            items.length ? (
              <div key={group} className="suggestion-group">
                <div className="group-title">{group}</div>
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="suggestion-tag"
                    onClick={() => handleAddTag(item)}
                  >
                    <MusicTag
                      text={item}
                      colorIndex={group === "Instruments" ? 5 : 4}
                    />
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default TagInput;