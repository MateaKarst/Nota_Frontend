import './App.css';
import NotaLogo from './components/LogoNota';
import MainButton from './components/MainButton';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NotaLogo colorIndex={3} /> {/* Помаранчеве лого */}
      <NotaLogo colorIndex={1} /> {/* Фіолетове лого */}
      <NotaLogo colorIndex={1} /> {/* Фіолетовий логотип */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        <MainButton /> 
      </div>
      </header>
    </div>
  );
}
  export default App ;