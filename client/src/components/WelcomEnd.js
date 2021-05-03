import React, { useEffect } from "react";

const WelcomEnd = ({game, setGame, userScore, endGame, setEndGame}) => {
    
    const handleGame = () => {
      setGame(!game)
    }

    return(
        <div>

        <h1>welcome</h1>
        <p> Press the button to play the game</p>
        <button onClick={handleGame}>Play!</button>
    
        

        </div>
    )
}

export default WelcomEnd;