import React, { useState } from 'react';
import TimerDisplay from './TimerDisplay';
import { ReactMic } from 'react-mic';

const AudioRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isMicActive, setIsMicActive] = useState(false);
    const [audioLink, setAudioLink] = useState(null);

    const handleStop = (recordedData) => {
        setAudioLink(recordedData.blobURL);
        setRecording(false);
    };

    const handleStart = () => {
        setTimeElapsed(0);
        setRecording(true);
        setIsMicActive(true);
    };

    const handleStopRecording = () => {
        setRecording(false);
        setIsMicActive(false);
    };

    const handleClear = () => {
        setRecording(false);
        setIsMicActive(false);
        setAudioLink(null);
        setTimeElapsed(0);
    };

    return (
        <div>
            <div className="container max-w-sm border py-4 px-6 mx-auto bg-gray-800 text-white">
                <h2 className="text-xl font-bold">Voice Recorder</h2>
                
                <TimerDisplay 
                    running={recording} 
                    elapsed={timeElapsed} 
                    updateElapsed={setTimeElapsed} 
                />

                <ReactMic
                    record={isMicActive}
                    className="sound-visualizer w-full"
                    onStop={handleStop}
                    strokeColor="#FF0000"
                    backgroundColor="#222"
                />

                <div className="controls mt-4">
                    {audioLink && (
                        <button 
                            onClick={handleClear} 
                            className="clear-btn text-white font-medium text-lg">
                            Clear
                        </button>
                    )}
                </div>
                
                <div className="buttons mt-4">
                    {!isMicActive ? (
                        <button 
                            onClick={handleStart} 
                            className="start-btn bg-green-500 text-white rounded-md py-2 px-4 font-bold">
                            Start
                        </button>
                    ) : (
                        <button 
                            onClick={handleStopRecording} 
                            className="stop-btn bg-red-500 text-white rounded-md py-2 px-4 font-bold">
                            Stop
                        </button>
                    )}
                </div>

                {audioLink && (
                    <div className="audio-player mt-6">
                        <audio controls src={audioLink} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AudioRecorder;
