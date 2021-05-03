import React, { useEffect } from "react";
import Song from "../components/Song";

const MusicGame = ({songList, getRandomInt, selectedSong, setSelectedSong, optionList, handleUserScore, count, setCount}) => {

    

    console.log()

    if(selectedSong === null){
        return null;
    }

    return(
        
        <div id="musicgame">
      
            <Song selectedSong={selectedSong} optionList={optionList} handleUserScore={handleUserScore} count={count} setCount={setCount}/>

            <br/>
           
            <br/>
        </div>
       
    )
}

export default MusicGame;