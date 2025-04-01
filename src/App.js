import './App.css';


import HeaderMain from './components/header-main';
import HeaderProfile from './components/header-profile';
import HeaderMySongs from './components/header-mysongs';
import HeaderVariants from './components/header-backarrow';

import NotaLogo from './components/Logos/LogoNota';
import Buttons from './components/Buttons/BasicBtn';
import { ReactComponent as Logo } from "./logo.svg";
import AttachFileBtn from './components/Buttons/AttachFileBtn'
import ProBtn from './components/Buttons/ProBtn'
import ConnectBtn from './components/Buttons/ConnectBtn';
import PurpleTagsButton from './components/Tags/PurpleTag';
import TimeLine from './components/timeline-grid';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NotaLogo colorIndex={3} />

      <NotaLogo colorIndex={1} />
      <NotaLogo colorIndex={1} /> 
      <HeaderMain /> 
      <HeaderProfile />
      <HeaderMySongs />
      <HeaderVariants mode={"text"} />
      <HeaderVariants mode={"edit"} />
      <HeaderVariants mode={"menu"} />
      <HeaderVariants mode={"black text"} />
      <HeaderVariants mode={"default"} />
      <HeaderVariants mode={"user"} />

        <NotaLogo colorIndex={2} />
        <NotaLogo colorIndex={1} />
        <NotaLogo colorIndex={0} />

        <TimeLine />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* // Basic Buttons */}
        <div>
          <Buttons type="viewAll" text="View All" />
        </div>
        <div>
          <Buttons type="tiny" text="Tiny Btn" />
        </div>
        <div>
          <Buttons type="small" text="Small Btn" />
        </div>
        <div>
          <Buttons type="medium" text="Medium Btn" />
        </div>
        <div>
          <Buttons type="default" text="Default Btn" />
        </div>
        <div>
          <Buttons type="main" text="Main Btn" />
        </div>

        {/* // Attach File Buttons */}
        <AttachFileBtn variant={1} />
        <AttachFileBtn variant={0} />

        {/* // Other Buttons */}
        <ProBtn />
        <ConnectBtn />

        {/* //Tags */}
        <PurpleTagsButton text={"hewwo"}/>

      </header>
    </div>
  );
}
export default App;