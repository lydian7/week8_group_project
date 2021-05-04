import React, { useEffect } from "react";

const Welcome= ({game, setGame, setSelectedGenre, setSelectedPlayer, leaderBoard}) => {
    
    const handleGame = () => {
      setGame(!game)
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
         <h3 id="welcome-message">Welcome to Chartstar</h3>
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
        <button id="play" onClick={handleGame}>Play!</button> 
        
        </div>
        <div>
        <img id="app-loader" src="images/spinner1.png" /> 
        </div>
      
    
        

        </div>

        
    )
  

}


export default Welcome;