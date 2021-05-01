import React, { useState, useEffect } from "react";

const Song = ({selectedSong}) => {



    const handlePlay = (e) => {
        console.log(e.target.value)
        const audio = new Audio(e.target.value)
        audio.play()
    }

    console.log(selectedSong)


  return (

    // <h1>test</h1>
      
      <div>
         {typeof(selectedSong) != "undefined" ? <button value={selectedSong.link[1].attributes.href} onClick={handlePlay}>Play</button> : <p>Selected song is undefined</p>}
      </div>

  )
}

export default Song;