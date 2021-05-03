import React, { useEffect } from "react";
import Song from "../components/Song";

const MusicGame = ({songList, getRandomInt, selectedSong, setSelectedSong, audio, setAudio, optionList, setOptionList, handleUserScore, endGame, setEndGame, count, setCount}) => {

    

    console.log()

    if(selectedSong === null){
        return null;
    }

    return(
        
        <div id="musicgame">
            { !endGame  ? <Song selectedSong={selectedSong} setSelectedSong={setSelectedSong} audio={audio} setAudio={setAudio} optionList={optionList} handleUserScore={handleUserScore} setEndGame={setEndGame} count={count} setCount={setCount} songList={songList} selectedSong={selectedSong} getRandomInt={getRandomInt}/> : <p>EndGame</p>} 
            <br/>
           
            <br/>
        </div>
       
    )
}

export default MusicGame;