import React, {useState, useEffect} from "react";
import DidYouKnow from "../components/DidYouKnow";
import EndGame from "../components/EndGame";
import MusicGame from "../components/MusicGame";

import {getUserScore, } from "./Music_Service";

import Welcome from "../components/Welcome";

const MusicContainer = () => {
    
    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [optionList, setOptionList] = useState([]);
    const [userScore, setUserScore] = useState(0);
    const [leaderBoard, setLeaderBoard] = useState([]);
    const [game, setGame] = useState(false);
    const [count, setCount] = useState(0);
    
    console.log("game", game);

   
    useEffect(() => {
      console.log('fetch api and set songlist use effect, listening to selectedGenre')
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=40/genre=${selectedGenre}/json`)
      .then(res => res.json())
      .then(data => setSongList(data.feed.entry))
      .catch(err => console.log(err));
    }, [selectedGenre])

    useEffect(() => {
      // console.log('setSelected Song use effect')
      setSelectedSong(songList[getRandomInt(39)]);
    }, [songList])

    // console.log('selectedGenre is:')
    // console.log(selectedGenre)
    // console.log("option list is:")
    // console.log(optionList)

    useEffect(() => {
      shuffleSongs();
    }, [selectedSong])

    const handleGenreChange = (e) => { // ==>>> NEED TO PREVENT DEFAULT VALUE FROM PASSING 0
        setSelectedGenre(e.target.value)
    };

    // const handleUserScore = (e) => {
    //   if (e.target.value == selectedSong["im:artist"].label){
    //     setUserScore(userScore + 1)
    //   }
      
    // }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const shuffleSongs = () => {
      const tempList = songList.filter((song) => {
      return song !== selectedSong;
      })
      // console.log("tempList", tempList)
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

    useEffect(()=>{
    getUserScore()
    .then((data)=>{
    // console.log(userScore);
    setLeaderBoard(data)
    })
    },[]);
    console.log("leaderBoard", leaderBoard);
    

  return(

      <div className="music-container">
        <header id="pageHeader">Music Quiz</header>
          <div id="mainArticle">
            <div id="dropdownmenu">
              <select name="_selGenre" onChange={handleGenreChange}>
                <option>Select Genre</option> 
                <option value="21">Rock</option>
                <option value="14">Pop</option>
                <option value="11">Jazz</option>
              </select>
            </div>
        

            <article>

              { !game ? <Welcome game={game} setGame={setGame}/> : null} 

              { game && count < 5 ? <MusicGame 
              songList={songList} 
              selectedGenre={selectedGenre} 
              getRandomInt={getRandomInt} 
              userScore={userScore}
              selectedSong={selectedSong} 
              setSelectedSong={setSelectedSong} 
              optionList={optionList} 
               setUserScore={setUserScore}
              count={count}
              setCount={setCount}
              /> : null }

              { game && count === 5 ? <EndGame userScore={userScore}/> : null}

            </article>
          </div>

            <nav id="mainNav">
              Leader Board:
              <br/>
              {
                leaderBoard.map((player, index) => {
                return ( <p key={index}>{player.name} : {player.score}</p>)})
              }
              <br/>
            </nav>

        <div id="musicFacts">
          <DidYouKnow  userScore={userScore} selectedGenre={selectedGenre}/>

        </div>
        <footer id="pageFooter">Music App @2021</footer>  
      </div>

  )
}

export default MusicContainer;