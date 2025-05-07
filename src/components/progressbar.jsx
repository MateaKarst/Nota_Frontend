import React, { useEffect, useState } from 'react';
import '../styles/components/progressbar.css';

const LoadingProgress = ({ label = 'Loading...', isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (isLoading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + 2;
          return next >= 98 ? 98 : next; // до 98%, решта — коли завершиться
        });
      }, 60);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => setProgress(0), 500); // затримка перед зникненням
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="loading-wrapper">
      <div className="loading-label">{label}</div>
      <div className="loading-bar">
        <div className="loading-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default LoadingProgress;
