import './App.css';
import MusicContainer from "./container/MusicContainer"
import DidYouKnow from "./components/DidYouKnow";
import MusicGame from "./components/MusicGame";

let userScore = 0;

function App() {
  return (
    <div className="App">
      <header id="pageHeader">Music Quiz</header>
      <article id="mainArticle">
        <MusicContainer /> 
      </article>
      <nav id="mainNav">User Score: {userScore}</nav>
      <div id="musicFacts">
        <DidYouKnow  userScore={userScore} />
      </div>
      <footer id="pageFooter">Music App @2021</footer>
    </div>
  );
}
export default App;
