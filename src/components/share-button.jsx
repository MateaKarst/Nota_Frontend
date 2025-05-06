import { useState } from 'react';
import { ReactComponent as ShareIcon } from '../assets/share-icon.svg';
import '../styles/components/share-button.css';

const ShareButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } catch (err) {
      console.error("Oops... Can't copy the link:", err);
    }
  };

  return (
    <>
      <button className="share-button" onClick={handleShare}>
        <ShareIcon />
        <span>Share</span>
      </button>

      {showMessage && (
        
        <div className="share-toast"> <ShareIcon/> Link copied to clipboard</div>
      )}
    </>
  );
};

export default ShareButton;
