import React, {useEffect, useState} from "react";
import {updateUserScore} from "../container/Music_Service"

const EndGame = ({userScore, setReset, selectedPlayer, leaderBoard, updateUser}) => {


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
    }


    return(
        <div>
        <p>endgame</p>
        <button onClick={handleFinish}>Finish</button>
        </div>
    )
}

export default EndGame;