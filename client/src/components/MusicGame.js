import React from "react";
import Song from "../components/Song";

const MusicGame = ({songList, getRandomInt, selectedSong, setSelectedSong, audio, setAudio, optionList, setOptionList, handleUserScore}) => {

    const handleSelectedSong = () => {
      setSelectedSong(songList[getRandomInt(40)]);
    }

    console.log(audio)

    return(
        
        <div id="musicgame">
            { selectedSong !== null ? <Song selectedSong={selectedSong} audio={audio} setAudio={setAudio} optionList={optionList} handleUserScore={handleUserScore}/> : null} 
            <br/>
            <button onClick={handleSelectedSong} class="btn btn-secondary">Next Song</button>
            <br/>
        </div>
       
    )
}

export default MusicGame;