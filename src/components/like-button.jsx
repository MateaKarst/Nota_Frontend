import { useState } from 'react';
import { ReactComponent as LikeIcon } from '../assets/icons/like-icon.svg';
import '../styles/components/like-button.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <button
      onClick={toggleLike}
      className={`like-button ${liked ? 'liked' : ''}`}
    >
      <LikeIcon  />
      <span>{likesCount}</span>
    </button>
  );
};

export default LikeButton;
