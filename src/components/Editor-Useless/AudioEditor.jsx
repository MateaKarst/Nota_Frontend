import React from 'react';

const AudioEditor = ({
    audioUrl,
    volume,
    playing,
    onVolumeChange,
    onPlay,
    onStop,
    onRemove,
}) => {
    // Extract and format the filename from the audioUrl
    const getSongName = () => {
        if (!audioUrl) return 'Unknown Track';

        const filename = audioUrl.split('/').pop().split('.')[0];

        return filename
            .replace(/^\d+\s*/, '')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <div>
            <h2>{getSongName()}</h2>
            <label>Volume:</label>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            />

            <button onClick={playing ? onStop : onPlay}>
                {playing ? 'Stop' : 'Play'}
            </button>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};

export default AudioEditor;
