import React, {useState, useEffect} from "react";
import DidYouKnow from "../components/DidYouKnow";
import EndGame from "../components/EndGame";
import MusicGame from "../components/MusicGame";
import {postUser} from "../container/Music_Service"
import logo from "../components/logo.png";

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
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [artistList, setArtistList] = useState([]);
    const [newUser, setNewUser] = useState("");
    const [userRegistered, setUserRegistered] = useState(false);
    const [userCheck, setUserCheck] = useState(false);
  
    

    console.log("main container selectedPlayer", selectedPlayer);

    useEffect(()=>{
      getUserScore()
      .then((data)=>{
     
      setLeaderBoard(data)
      })
      setUserRegistered(false);
      },[userRegistered]);
  

    useEffect(() => {
      console.log('fetch api and set songlist use effect, listening to selectedGenre')
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=40/genre=${selectedGenre}/json`)
      .then(res => res.json())
      .then(data => setSongList(data.feed.entry))
      .catch(err => console.log(err));
      
    }, [selectedGenre])

    useEffect(() => {
      setSelectedSong(songList[getRandomInt(songList.length - 1)]); 
      duplicates();
    }, [songList])



    const duplicates = () => {
      const artistList = songList.map((song) => {
      return song["im:artist"].label
      })
      const uniqueArtists = [...new Set(artistList)]
      setArtistList(uniqueArtists)
  }

    useEffect(() => {
      shuffleSongs();
    }, [selectedSong])


    useEffect(() => {
      setUserCheck(false);

      
    }, [selectedPlayer])

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

    const updateUser = updatedUser => {
      
      updateUserScore(updatedUser);
  
      const updatedCustomerIndex = leaderBoard.findIndex(user => user._id === updatedUser._id);
      const updatedLeaderBoard = [...leaderBoard];
      updatedLeaderBoard[updatedCustomerIndex] = updatedUser;
      setLeaderBoard(updatedLeaderBoard);
    };
    
    const handleNameChange = (e) => {
      setNewUser(e.target.value)
    }

    const handlePostUser = (e) => {
      e.preventDefault();
      if (!newUser){
        return
      }
      postUser({
        name: newUser,
        score: 0
      })
      setNewUser("")
      setUserRegistered(true);
  }

  return(

      <div className="music-container">
          <header id="pageHeader">

          { !game ? 
          <form id="user-form" onSubmit={handlePostUser}>
            <div id="un"><label>UserName</label></div>
            <div id="textBox"><input  type="text" value={newUser}onChange={handleNameChange}/></div>
            <div id="register"><button  type="submit" value="Register">Register</button></div>
            
            
         </form> : 
         
         <svg xmlns="http://www.w3.org/2000/svg" class="headerequilizer" viewBox="0 0 128 128">
         <g>
           <title>Audio Equilizer</title>
           <rect class="bar" transform="translate(0,0)" y="15"></rect>
           <rect class="bar" transform="translate(25,0)" y="15"></rect>
           <rect class="bar" transform="translate(50,0)" y="15"></rect>
           <rect class="bar" transform="translate(75,0)" y="15"></rect>
           <rect class="bar" transform="translate(100,0)" y="15"></rect>
         </g>
         </svg>

          }  
          <div id="title"><h1 >ChartStar</h1></div>
          <div id="logo-head"><a href="javascript:history.go(0)">
              <img id="logo" src={logo} alt="logo" width="80" height="60" />
            </a></div>

          </header>
          <div id="mainArticle">

            <article>

              { !game  ? <Welcome game={game} setGame={setGame} selectedGenre={selectedGenre}setSelectedGenre={setSelectedGenre} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} leaderBoard={leaderBoard}/> : null} 

              { game && count < 5 ? <MusicGame 
              songList={songList} 
              setSongList={setSongList}
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

             { game ?    
              <div>
            
              

              <h2>Leaderboard</h2>
              

              <ol>
              {
                leaderBoardSorted.map((player, index) => {
                return ( <li key={index}>{player.name} : {player.score}</li>)})
              }
              </ol> 
              <br/>
              </div> : 

              <svg xmlns="http://www.w3.org/2000/svg" class="equilizer" viewBox="0 0 128 128">
                
              <g>
                <title>Audio Equilizer</title>
                <rect class="bar" transform="translate(0,0)" y="15"></rect>
                <rect class="bar" transform="translate(25,0)" y="15"></rect>
                <rect class="bar" transform="translate(50,0)" y="15"></rect>
                <rect class="bar" transform="translate(75,0)" y="15"></rect>
                <rect class="bar" transform="translate(100,0)" y="15"></rect>
              </g>
              </svg>
              
              }
            </nav> 

        <div id="musicFacts">
          <DidYouKnow  userScore={userScore} selectedGenre={selectedGenre} game={game}/>

        </div>
        <footer id="pageFooter">CHARTSTAR @2021</footer>  
      </div>

  )
}

export default MusicContainer;