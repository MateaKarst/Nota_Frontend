import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

import "../../styles/components/tracks/user-track.css";
import "../../styles/variables.css";

import profImg from "../../assets/avatars/violeta.svg";
import Track from "../../assets/instrument-samples/Drum.mp3";

const UserTrack = ({ isOwnTrack = false }) => {
    const waveformRef = useRef(null);
    const waveSurferRef = useRef(null);
    const isReadyRef = useRef(false); // <- Track readiness
    const abortControllerRef = useRef(new AbortController());
    const rootStyles = getComputedStyle(document.documentElement);

    useEffect(() => {
        const controller = abortControllerRef.current;

        const ws = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: rootStyles.getPropertyValue('--color-orange') || '#ab2c2c',
            progressColor: rootStyles.getPropertyValue('--color-orange') || '#ab2c2c',
            responsive: true,
            height: 50,
            cursorWidth: 0,
        });

        waveSurferRef.current = ws;

        ws.load(Track, null, controller.signal).catch((e) => {
            if (e.name !== "AbortError") {
                console.error("WaveSurfer load error:", e);
            }
        });

        ws.on('ready', () => {
            isReadyRef.current = true;
        });

        const handleClick = () => {
            const waveSurfer = waveSurferRef.current;
            if (isReadyRef.current && waveSurfer) {
                waveSurfer.isPlaying() ? waveSurfer.pause() : waveSurfer.play();
            } else {
                console.log("WaveSurfer not ready yet");
            }
        };

        const waveformEl = waveformRef.current;
        waveformEl?.addEventListener('click', handleClick);

        return () => {
            controller.abort();
            ws.destroy();
            waveformEl?.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={`voice-card ${isOwnTrack ? 'own-track' : 'other-track'}`}>
            <div className="user-info">
                <img src={profImg} alt="Samantha" className="avatar" />
                <div className="user-info-txt">
                    <p className="name">Samantha</p>
                    <p className="tag">#Vocal</p>
                </div>
            </div>
            <div ref={waveformRef} className="waveform"></div>
            <div className="toggle">
                <label className="switch">
                    <input type="checkbox" />
                    <span className='slider round'></span>
                </label>
            </div>
        </div>
    );
};

export default UserTrack;
