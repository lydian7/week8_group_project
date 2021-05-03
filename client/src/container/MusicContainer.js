import React, {useState, useEffect} from "react";
import DidYouKnow from "../components/DidYouKnow";
import MusicGame from "../components/MusicGame";
import WelcomEnd from "../components/WelcomEnd"

const MusicContainer = () => {
    
    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [optionList, setOptionList] = useState([]);
    const [selectedFact, setSelectedFact] = useState(null);
    const [factList, setFactList] = useState([]);
    const [audio, setAudio] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [game, setGame] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [quit, setQuit] = useState(false);
    

   

    useEffect(() => {
      console.log('fetch api and set songlist use effect, listening to selectedGenre')
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=40/genre=${selectedGenre}/json`)
      .then(res => res.json())
      .then(data => setSongList(data.feed.entry))
      .catch(err => console.log(err));
    }, [selectedGenre])

    useEffect(() => {
      console.log('setSelected Song use effect')
      setSelectedSong(songList[getRandomInt(39)]);
    }, [songList])

    console.log('selectedGenre is:')
    console.log(selectedGenre)
    console.log("option list is:")
    console.log(optionList)

    useEffect(() => {
      shuffleSongs();
    }, [selectedSong])

    const handleGenreChange = (e) => { // ==>>> NEED TO PREVENT DEFAULT VALUE FROM PASSING 0
        setSelectedGenre(e.target.value)
    };

    const handleUserScore = (e) => {
      if (e.target.value == selectedSong["im:artist"].label){
        setUserScore(userScore + 1)
      }
      
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const shuffleSongs = () => {
      const tempList = songList.filter((song) => {
      return song !== selectedSong;
      })
      console.log("tempList", tempList)
      let newList = [];
      for(let i=0; i<3; i++){
        const extractedSong = tempList[getRandomInt(tempList.length - 1)]
        newList.push(extractedSong);
        const indexToRemove = tempList.indexOf(extractedSong);
        tempList.splice(indexToRemove, 1);
      }
      newList.push(selectedSong);

    

      let currentIndex = newList.length, temporaryValue, randomIndex;
     
      while (0 != currentIndex) {
      
        randomIndex = getRandomInt(3);
        currentIndex -= 1;
        temporaryValue = newList[currentIndex];
        newList[currentIndex] = newList[randomIndex];
        newList[randomIndex] = temporaryValue;
      }
    
      setOptionList(newList);
    }  

return(
      <div className="music-container">
        <header id="pageHeader">Music Quiz</header>
    <div id="mainArticle">
        <div id="dropdownmenu">
        <select name="_selGenre" onChange={handleGenreChange}>
            {/* <option>All Genres</option>  */}
            <option value="21">Rock</option>
            <option value="14">Pop</option>
            <option value="11">Jazz</option>
        </select>
        
          <article>
          { game === false ? <WelcomEnd game={game} setGame={setGame} userScore={userScore} endGame={endGame} setEndGame={setEndGame}/> : <MusicGame 
        
        songList={songList} 
        selectedGenre={selectedGenre} 
        getRandomInt={getRandomInt} 
        selectedSong={selectedSong} 
        setSelectedSong={setSelectedSong} 
        audio={audio} 
        setAudio={setAudio} 
        optionList={optionList} 
        setOptionList={setOptionList} 
        handleUserScore={handleUserScore} 
        endgame={endGame}
        setEndGame={setEndGame}
        /> }
          </article>
      
        </div>
        
        
        </div>
        <nav id="mainNav">User Score: {userScore}</nav>
      <div id="musicFacts">
        <DidYouKnow  userScore={userScore} selectedGenre={selectedGenre}/>
      </div>
      <footer id="pageFooter">Music App @2021</footer>
        
        </div>
    )
}

export default MusicContainer;