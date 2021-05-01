import React from "react";

const Song = ({selectedSong}) => {

    const handlePlay = (e) => {
        console.log(e.target.value)
        const audio = new Audio(e.target.value)
        audio.play()
      
    }




  return (

    // <h1>hello ahmet</h1>
      
      <div>
         { selectedSong !== null ? <button value={selectedSong.link[1].attributes.href} onClick={handlePlay}>Play</button> : null} 
      </div>

  )
}

export default Song;