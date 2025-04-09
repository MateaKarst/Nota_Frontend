import React, { useEffect, useState } from 'react';
import '../../styles/components/editor/timer.css';

const Timer = ({ variation = 1 }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (s) => {
        const mins = Math.floor(s / 60).toString().padStart(2, '0');
        const secs = (s % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    const getClassName = () => {
        switch (variation) {
            case 2:
                return 'timer-style-2';
            case 1:
            default:
                return 'timer-style-1';
        }
    };

    return <div className={getClassName()}>{formatTime(seconds)}</div>;
};

export default Timer;
