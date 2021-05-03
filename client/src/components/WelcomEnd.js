import React from "react";

const WelcomEnd = ({game, setGame, userScore, endGame, setEndGame}) => {
    
    const handleGame = () => {
      setGame(!game)
    }
    
    console.log("game", game)
    console.log("endgame", endGame)

    return(
        <div>
        { game === true && endGame === true ?
        <div>
        <h1>END</h1>
        <p>SCORE:{userScore}/20</p></div> : <div><h1>welcome</h1>
        <p> Press the button to play the game</p>
        <button onClick={handleGame}>Play!</button>
        </div>
        }    

        </div>
    )
}

export default WelcomEnd;