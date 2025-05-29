import React, { useEffect } from 'react';

const TimerDisplay = ({ running, elapsed, updateElapsed }) => {
    useEffect(() => {
        let timer;
        if (running) {
            timer = setInterval(() => updateElapsed((prev) => prev + 1), 10);
        }
        return () => clearInterval(timer);
    }, [running]);

    const hours = Math.floor(elapsed / 360000);
    const minutes = Math.floor((elapsed % 360000) / 6000);
    const seconds = Math.floor((elapsed % 6000) / 100);
    const milliseconds = elapsed % 100;

    return (
        <div className="timer-display text-2xl font-semibold mt-4">
            <span>{hours}:</span>
            <span>{minutes.toString().padStart(2, '0')}:</span>
            <span>{seconds.toString().padStart(2, '0')}:</span>
            <span>{milliseconds.toString().padStart(2, '0')}</span>
        </div>
    );
};

export default TimerDisplay;
