import React from "react";
import Song from "../components/Song";
import MusicGame from "../components/MusicGame";


const DidYouKnow = ({userScore}) => {
  
    return(
        <div>
        <h1>This is the didyouknow</h1>
        <p>{userScore}</p>
        </div>
        
    )
}

export default DidYouKnow;