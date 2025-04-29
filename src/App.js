import './App.css'
import LikeButton from '../src/components/like-button.jsx'
import CommentButton from '../src/components/comment-button.jsx'
import ShareButton from '../src/components/share-button.jsx'
import SongInteraction from '../src/components/song-interaction.jsx'
import LoadingProgress from '../src/components/progressbar.jsx'

function App() {
  return (
    <div className="App" style={{backgroundColor:"#000000"}}>
      
      <SongInteraction/>
      <LoadingProgress label="Importing file..." duration={4000} />

    </div>
  );
}

export default App;