import React, { useEffect } from "react";
import Song from "../components/Song";


const MusicGame = ({songList, setSongList, getRandomInt, selectedSong, setSelectedSong, optionList, handleUserScore, count, setCount, userScore, setUserScore}) => {


    

    console.log()

    if(selectedSong === null){
        return null;
    }

    return(
        
        <div id="musicgame">

      
            <Song setSelectedSong={setSelectedSong} getRandomInt={getRandomInt} songList={songList} setSongList={setSongList} setUserScore={setUserScore} selectedSong={selectedSong} optionList={optionList} userScore={userScore} handleUserScore={handleUserScore} count={count} setCount={setCount}/>


            <br/>
           
            <br/>
        </div>
       
    )
}

export default MusicGame;