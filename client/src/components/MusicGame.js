import React from "react";
import Song from "../components/Song";

const MusicGame = ({songList, getRandomInt, selectedSong, setSelectedSong, audio, setAudio, optionList, setOptionList}) => {

    const handleSelectedSong = () => {
      setSelectedSong(songList[getRandomInt(40)])
      audio.pause()
    }

    return(
        
        <div id="musicgame">
            { selectedSong !== null ? <Song selectedSong={selectedSong} audio={audio} setAudio={setAudio} optionList={optionList}/> : null} 
            <br/>
            <button onClick={handleSelectedSong} value="nextsong" class="btn btn-secondary">Next Song</button>
            <br/>
        </div>
       
    )
}

export default MusicGame;