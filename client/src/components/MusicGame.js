import React from "react";
import Song from "../components/Song";

const MusicGame = ({songList, getRandomInt, selectedSong, setSelectedSong}) => {

    



    // const songClips = songList.map((song, index) => {
    //    return <button key={index} value={song.link[1].attributes.href} onClick={handlePlay}>Play</button>


      
    // })

    const handleSelectedSong = () => {
      setSelectedSong(songList[getRandomInt(40)])
    }


  
    return(
        
        <div id="musicgame">
            { selectedSong !== null ? <Song selectedSong={selectedSong}/> : null} 
            <button onClick={handleSelectedSong}>Next Song</button>
        </div>
       
    //    [getRandomInt(40)]
    )
}

export default MusicGame;