import React, { useEffect } from "react";

const Welcome= ({game, setGame, userScore, endGame, setEndGame, count}) => {
    
    const handleGame = () => {
      setGame(!game)
    }

    return(
        <div>
        <div>
         <h1>welcome</h1>
        <p><strong>Select a genre to start!!!</strong> </p>
        <button onClick={handleGame}>Play!</button> 
        </div>
      
    
        

        </div>
    )
}

export default Welcome;