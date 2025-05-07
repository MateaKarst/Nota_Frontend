import '../src/App.css'
import HeaderMySongs from './components/Headers/HeaderMySongs'
import SearchBar from './components/Search/SearchBar';

function App() {
  return (
    <div className="App">
      <div>
        <HeaderMySongs />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;