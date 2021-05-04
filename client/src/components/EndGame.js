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
    
      let greeting = "";

    

      if (userScore === 5){
        greeting = `Sinatra, Mercury, Rose and you. What do you have in common? Greatness. What a score!`}
      if (userScore >= 3){
        greeting = `More Robbie Williams than Gary Barlow. Decent effort!`}

      if (userScore < 3){
        greeting = `What kind of music are balloons afraid of? Pop Music. That joke was as bad as your score. Pathetic!
        `}

        console.log("greeting", greeting)



    return(
        <div id="endBox">
        <h2>Final Score</h2>
        <p>{greeting}</p>
        <p>{userScore}/5</p>
        <button onClick={handleFinish}>Finish</button>
        </div>
    )

}

export default EndGame;