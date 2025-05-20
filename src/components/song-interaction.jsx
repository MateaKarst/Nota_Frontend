import LikeButton from '../components/like-button.jsx';
import CommentButton from '../components/comment-button.jsx'
import ShareButton from '../components/share-button.jsx'
import '../styles/components/song-interaction.css';

const SongInteraction = () => {
  return (
    <div className="container">
      <LikeButton />
      <CommentButton/>
      <ShareButton/>
    </div>
  );
};

export default SongInteraction;
