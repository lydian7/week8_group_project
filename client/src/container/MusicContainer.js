import React, {useState, useEffect} from "react";
import DidYouKnow from "../components/DidYouKnow";
import EndGame from "../components/EndGame";
import MusicGame from "../components/MusicGame";

import {getUserScore, updateUserScore} from "./Music_Service";

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
    const [reset, setReset] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [artistList, setArtistList] = useState([]);
    

    console.log("main container selectedPlayer", selectedPlayer);

    useEffect(()=>{
      getUserScore()
      .then((data)=>{
      // console.log(userScore);
      setLeaderBoard(data)
      })
      },[]);
      // console.log("leaderBoard", leaderBoard);

    console.log("artistList", artistList);


   
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
      duplicates();
    }, [songList])

    const duplicates = () => {
      const artistList = songList.map((song) => {
      return song["im:artist"].label
      })
      const uniqueArtists = [...new Set(artistList)]
      setArtistList(uniqueArtists)
  }

    // console.log('selectedGenre is:')
    // console.log(selectedGenre)
    // console.log("option list is:")
    // console.log(optionList)

    useEffect(() => {
      shuffleSongs();
    }, [selectedSong])

    // const handleGenreChange = (e) => { // ==>>> NEED TO PREVENT DEFAULT VALUE FROM PASSING 0
    //     setSelectedGenre(e.target.value)
    // };

    // const handleUserScore = (e) => {
    //   if (e.target.value == selectedSong["im:artist"].label){
    //     setUserScore(userScore + 1)
    //   }
      
    // }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const shuffleSongs = () => {
      const tempList = artistList.filter((artist) => {
      return artist !== selectedSong["im:artist"].label;
      })
      
      let newList = [];
      for(let i=0; i<3; i++){
        const extractedArtist = tempList[getRandomInt(tempList.length - 1)]
        // if (extractedSong['im:artist'].label)
        newList.push(extractedArtist);
        const indexToRemove = tempList.indexOf(extractedArtist);
        tempList.splice(indexToRemove, 1);
      }
      console.log("tempList", tempList)
      console.log("selectedSong", selectedSong)
      if (selectedSong){
        newList.push(selectedSong["im:artist"].label);

      }
      

    

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

    const leaderBoardSorted = leaderBoard.sort((player1, player2) => {
      return player2.score - player1.score
    })

    // console.log("sortedleaderboard", leaderBoardSorted)

    const updateUser = updatedUser => {
      // req to server to update booking in DB
      updateUserScore(updatedUser);
  
      // update locally
      const updatedCustomerIndex = leaderBoard.findIndex(user => user._id === updatedUser._id);
      const updatedLeaderBoard = [...leaderBoard];
      updatedLeaderBoard[updatedCustomerIndex] = updatedUser;
      setLeaderBoard(updatedLeaderBoard);
    };
    
    if(selectedSong === null){
      return null;
  }
  return(

      <div className="music-container">
          <header id="pageHeader">
            <h1>Chartstar</h1>
          </header>
          <div id="mainArticle">

        

            <article>

              { !game ? <Welcome game={game} setGame={setGame} setSelectedGenre={setSelectedGenre} setSelectedPlayer={setSelectedPlayer} leaderBoard={leaderBoard}/> : null} 

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


              { game && count === 5 ? <EndGame userScore={userScore} setGame={setGame} selectedPlayer={selectedPlayer} leaderBoard={leaderBoard} updateUser={updateUser} setCount={setCount} setUserScore={setUserScore}/> : null}

              


            </article>
          </div>

            <nav id="mainNav">
              <h2>Leaderboard</h2>
              
              <ol>
              {
                leaderBoardSorted.map((player, index) => {
                return ( <li key={index}>{player.name} : {player.score}</li>)})
              }
              </ol>
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