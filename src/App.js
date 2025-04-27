import './App.css'
import SearchPage from '../src/pages/SearchPage'
import GenreCard from './components/Search/GenreCard';
import HeaderVariants from './components/header-backarrow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeaderVariants mode='default' />
      <SearchPage />
      <GenreCard mode='metal' />
      </header>
    </div>
  );
}

export default App;