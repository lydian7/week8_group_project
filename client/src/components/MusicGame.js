import React from "react";

const MusicGame = ({songList}) => {

const handlePlay = (e) => {
    const audio = new Audio(e.target.value)
    audio.play()
  
}

    const songClips = songList.map((song, index) => {
        return <button key={index} value={song.link[0].attributes.href} onClick={handlePlay}>Play</button>

        
      
    })


  
    return(
        <div>
             <h1>This is the MusicGame</h1>
        <ul>
            {songClips}
        </ul>

        </div>
       
    )
}

export default MusicGame;