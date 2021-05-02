import './App.css';
import MusicContainer from "./container/MusicContainer"

function App() {

  return (
    <body>
      <div className="App">
        <header id="appheader">
        <h1>Music App</h1>
        </header>
        <div className="musiccontainer">
        <MusicContainer />
        </div>
        <footer id="footer">
          <h3>MUSIC APP 2021</h3>
        </footer>
      </div>
    </body>
  );
}

export default App;
