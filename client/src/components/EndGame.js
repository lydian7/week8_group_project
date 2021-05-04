import React, {useEffect, useState} from "react";
import {updateUserScore} from "../container/Music_Service"

const EndGame = ({userScore, setGame, setCount, selectedPlayer, leaderBoard, updateUser, setUserScore}) => {


    console.log("endgame selectedPlayer", selectedPlayer)

    const handleFinish = () => {
        const player = leaderBoard.find((data) => {
          return data._id === selectedPlayer
        })
        
        console.log("endgame extracted player", player)
        const totalScore = userScore + player.score;
        console.log("totalScore", totalScore)
        // const updatedPlayer = {
        //     _id:  player._id,
        //     name: player.name,
        //     score: player.score
        // }
        console.log("playerId", player._id)
        console.log("player name", player.name)
        console.log("player score", totalScore)
        updateUser({
            _id: player._id,
            name: player.name,
            score: totalScore
        });
        setGame(false);
        setCount(0);
        setUserScore(0);
    }
    
      let greeting = ""

    
      if (userScore >= 4){
        greeting = `Great score! ${userScore}/5`}
      if (userScore === 3){
        greeting = `Not Bad! ${userScore}/5`}
      if (userScore < 3){
        greeting = `Well.. that was embarrassing! ${userScore}/5`}

        console.log("greeting", greeting)



    return(
        <div>
        <p>endgame</p>
        {greeting}
        <button onClick={handleFinish}>Finish</button>
        </div>
    )

}

export default EndGame;