import { useState } from 'react';
import { ReactComponent as CommentIcon } from '../assets/comment-icon.svg';
import { ReactComponent as SendIcon } from '../assets/send-icon.svg';
import '../styles/components/comment-button.css';

const CommentButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, name: 'Anna', text: 'Like bass gitar', avatar: 'https://i.pravatar.cc/40?img=1' },
    { id: 2, name: 'Jan', text: 'My favorite! 🎧', avatar: 'https://i.pravatar.cc/40?img=2' }
  ]);
  const [newComment, setNewComment] = useState("");

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newEntry = {
        id: Date.now(),
        name: 'You',
        text: newComment.trim(),
        avatar: 'https://i.pravatar.cc/40?img=3'
      };
      setComments(prev => [...prev, newEntry]);
      setNewComment("");
    }
  };

  return (
    <>
      <button onClick={togglePopup} className="comment-button">
        <CommentIcon />
        <span>{comments.length}</span>
      </button>

      {isPopupOpen && (
        <div className="comment-popup">
          <div className="comment-popup-content">
            <div className="comment-popup-title">
              <h2>Comments</h2>
              <button className="close-button" onClick={togglePopup}>×</button>
            </div>
            <div className="comment-list">
              {comments.map((c) => (
                <div className="comment-item" key={c.id}>
                  <img src={c.avatar} alt={c.name} className="avatar" />
                  <div style={{alignContent: 'flex-start'}}>
                    <span className="comment-name" style={{alignContent: 'flex-start'}}>{c.name}</span>
                    <p className="comment-text">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="comment-input-wrapper">
              <textarea
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                onClick={handleCommentSubmit}
                className="comment-submit"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentButton;