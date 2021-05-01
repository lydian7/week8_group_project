import React from "react";
import Song from "../components/Song";

const MusicGame = ({songList, getRandomInt, selectedSong}) => {

    



    // const songClips = songList.map((song, index) => {
    //    return <button key={index} value={song.link[1].attributes.href} onClick={handlePlay}>Play</button>

        
      
    // })

    


  
    return(
        
        <div>
            { selectedSong !== null ? <Song selectedSong={selectedSong}/> : null} 
        

        </div>
       
    //    [getRandomInt(40)]
    )
}

export default MusicGame;