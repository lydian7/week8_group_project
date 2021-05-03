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
        <p> Select a genre to start!!!</p>
        <button onClick={handleGame}>Play!</button> 
        </div>}
      
    
        

        </div>
    )
}

export default Welcome;