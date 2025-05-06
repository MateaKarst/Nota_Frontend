import React, { useState } from 'react';
import FileUpload from '../../components/Uploading/FileUpload';
import AudioEditor from '../../components/Editor/AudioEditor';
import { Howl } from 'howler';
import axios from 'axios';

// IMPORTANT
// cd server/
// node server.js
// since you have to run the "backend" separately

const Overlay = () => {
    const [tracks, setTracks] = useState([]);
    const [playingAll, setPlayingAll] = useState(false);

    const addTrack = ({ filePath, filename }) => {
        setTracks((prev) => [
            ...prev,
            {
                audioUrl: filePath,
                filename, // Store the filename for deletion
                volume: 1,
                muted: false,
                playing: false,
                howlInstance: new Howl({ src: [filePath], volume: 1 }),
            },
        ]);
    };

    const updateTrack = (index, updatedTrack) => {
        setTracks((prev) =>
            prev.map((track, i) =>
                i === index
                    ? { ...track, ...updatedTrack, howlInstance: track.howlInstance }
                    : track
            )
        );
    };

    const removeTrack = async (index) => {
        const track = tracks[index];
        if (!track) return;

        // Stop the track's playback and unload Howl instance
        if (track.howlInstance) {
            track.howlInstance.unload();
        }

        // Remove file from server
        const filename = track.audioUrl.split('/').pop(); // Extract filename from URL
        try {
            await axios.delete('http://localhost:5000/delete', { data: { filename } });
        } catch (err) {
            console.error('Error deleting file:', err);
        }

        // Remove track from UI
        setTracks((prev) => prev.filter((_, i) => i !== index));
    };


    const playAllTracks = () => {
        // Stop all individual tracks
        tracks.forEach((track) => {
            track.howlInstance.stop();
            updateTrack(tracks.indexOf(track), { playing: false });
        });

        // Play all tracks together
        tracks.forEach((track) => {
            track.howlInstance.volume(track.volume);
            track.howlInstance.play();
        });
        setPlayingAll(true);
    };

    const stopAllTracks = () => {
        tracks.forEach((track) => track.howlInstance.stop());
        setPlayingAll(false);
    };

    const handlePlayTrack = (index) => {
        // Stop all other tracks and stop "Play All"
        stopAllTracks();
        setTracks((prev) =>
            prev.map((track, i) => {
                if (i !== index && track.howlInstance) {
                    track.howlInstance.stop();
                }
                return { ...track, playing: i === index };
            })
        );

        // Play the selected track
        const track = tracks[index];
        if (track) {
            track.howlInstance.volume(track.volume);
            track.howlInstance.play();
        }
        setPlayingAll(false);
    };

    const handleStopTrack = (index) => {
        const track = tracks[index];
        if (track) {
            track.howlInstance.stop();
            updateTrack(index, { playing: false });
        }
    };

    

    return (
        <div>
            <h1>Music Editor</h1>
            <FileUpload onUpload={addTrack} />
            {tracks.map((track, index) => (
                <AudioEditor
                    key={index}
                    audioUrl={track.audioUrl}
                    volume={track.volume}
                    playing={track.playing}
                    onVolumeChange={(volume) => {
                        track.howlInstance.volume(volume);
                        updateTrack(index, { volume });
                    }}
                    onPlay={() => handlePlayTrack(index)}
                    onStop={() => handleStopTrack(index)}
                    onRemove={() => removeTrack(index)}
                />
            ))}
            {tracks.length > 0 && (
                <div>
                    <button onClick={playAllTracks} disabled={playingAll}>
                        Play All
                    </button>
                    <button onClick={stopAllTracks}>Stop All</button>
                </div>
            )}
        </div>
    );
};

export default Overlay;
