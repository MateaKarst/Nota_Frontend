import './App.css'
import Timer from './components/Editor/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer variation={2} />
      </header>
    </div>
  )
}
export default App;