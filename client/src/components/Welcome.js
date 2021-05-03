import React, { useEffect } from "react";

const Welcome= ({game, setGame, userScore, endGame, setEndGame, count}) => {
    
    const handleGame = () => {
      setGame(!game)
    }

    return(
        <div>
        {count === 5 ? <p>End</p> :  
        <div>
         <h1>welcome</h1>
        <p> Press the button to play the game</p>
        <button onClick={handleGame}>Play!</button> 
        </div>}
      
    
        

        </div>
    )
}

export default Welcome;