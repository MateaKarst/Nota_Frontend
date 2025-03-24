import logo from './logo.svg';
import './App.css';
import NotaLogo from './components/LogoNota';
import HeaderMain from './components/header-main';
import HeaderProfile from './components/header-profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NotaLogo colorIndex={3} />
      <NotaLogo colorIndex={1} />
      <NotaLogo colorIndex={1} /> 
      <HeaderMain /> 
      <HeaderProfile />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
