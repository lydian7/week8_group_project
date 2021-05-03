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
        <div>
        <div>
         <h1>welcome</h1>
        <p><strong>Select a Player and a Genre to start!!!</strong> </p>
        <div id="dropdownmenu">
              <select name="_selGenre" onChange={handleGenreChange}>
                <option disabled selected>Select Genre</option> 
                <option value="21">Rock</option>
                <option value="14">Pop</option>
                <option value="11">Jazz</option>
              </select>
        </div>
        <div id="dropdownmenu2">
              <select onChange={handleSelectedPlayer}>
                <option disabled selected>Select a Player</option>
                {leaderBoard.map((player) => {
                  return <option key={player.id} value={player.id}>{player.name}</option>
                })}
              </select>
        </div>
        <button onClick={handleGame}>Play!</button> 
        <img id="app-loader" src="images/spinner1.png" /> 
        </div>
      
    
        

        </div>
    )
}

export default Welcome;