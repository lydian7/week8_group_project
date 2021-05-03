import React, { useEffect } from "react";
import Song from "../components/Song";

const MusicGame = ({songList, getRandomInt, selectedSong, setSelectedSong, audio, setAudio, optionList, setOptionList, handleUserScore, endGame, setEndGame, count, setCount}) => {

    const handleSelectedSong = () => {
      setSelectedSong(songList[getRandomInt(39)]);
    }

    console.log()

    if(selectedSong === null){
        return null;
    }

    return(
        
        <div id="musicgame">
            { !endGame  ? <Song selectedSong={selectedSong} audio={audio} setAudio={setAudio} optionList={optionList} handleUserScore={handleUserScore} setEndGame={setEndGame} count={count} setCount={setCount}/> : <p>EndGame</p>} 
            <br/>
            <button onClick={handleSelectedSong} className="btn btn-secondary">Next Song</button>
            <br/>
        </div>
       
    )
}

export default MusicGame;