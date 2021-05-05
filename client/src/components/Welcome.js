import React, { useEffect, useState } from "react";


const Welcome= ({game, setGame, selectedGenre, setSelectedGenre, selectedPlayer, setSelectedPlayer, leaderBoard}) => {
    
    
    const handleGame = () => {
      if(selectedPlayer && selectedGenre){
      setGame(!game)
      }
    }

    const handleGenreChange = (e) => { // ==>>> NEED TO PREVENT DEFAULT VALUE FROM PASSING 0
      setSelectedGenre(e.target.value)
    };

    const handleSelectedPlayer = (e) => {
      setSelectedPlayer(e.target.value)
    }

    return(
      <div >
        <div id="welcome-box">
         <h2 id="welcome-message">Welcome to Chartstar</h2>
         <br></br>
         <p>Let's play</p>
         
        <p>Select a Player and a Genre to start </p>
        <div id="dropdownmenu">
              <select data-testid="genre-select" name="_selGenre" onChange={handleGenreChange}>
                <option data-testid="genre-option" disabled selected>Select Genre</option> 
                <option data-testid="genre-option" value="21">Rock</option>
                <option data-testid="genre-option"  value="14">Pop</option>
                <option data-testid="genre-option" value="11">Jazz</option>
              </select>
        </div>
        <br></br>
        <div id="dropdownmenu2">

              <select data-testid="player-select" onChange={handleSelectedPlayer}>

                <option disabled selected>Select a Player</option>
              {/* <select onChange={handleSelectedPlayer}>
                <option data-testid="player-select" disabled selected>Select a Player</option> */}
                {leaderBoard.map((player) => {
                  return <option key={player._id} value={player._id}>{player.name}</option>
                })}
              </select>
        </div>
        <br>
        </br>
        <button id="play" onClick={handleGame}>Play!</button> 
        
        </div>
        <br></br>
        <div id="spinning">
        <img id="app-loader" src="images/disc_spinner.png" /> 
        </div>
      
    
        

        </div>

        
    )
  

}


export default Welcome;