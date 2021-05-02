import './App.css';
import MusicContainer from "./container/MusicContainer"
import DidYouKnow from "./components/DidYouKnow";
import MusicGame from "./components/MusicGame";

function App() {

  return (
    <div className="App">
      <header id="pageHeader">Music App</header>
      <article id="mainArticle">
        <MusicContainer /> 
      </article>
      <nav id="mainNav">Add new user</nav>
      
      <div id="musicFacts">Did you know</div>
      <footer id="pageFooter">Music App @2021</footer>
    </div>
  );
}

export default App;
