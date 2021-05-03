import React, { useEffect } from "react";

const Welcome= ({game, setGame}) => {
    
    const handleGame = () => {
      setGame(!game)
    }

    return(
        <div>
        <div>
         <h1>welcome</h1>
        <p><strong>Select a genre to start!!!</strong> </p>
        <button onClick={handleGame}>Play!</button> 
        <img id="app-loader" src="images/spinner1.png" /> 
        </div>
      
    
        

        </div>
    )
}

export default Welcome;