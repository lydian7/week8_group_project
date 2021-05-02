import React, { useState, useEffect } from "react";

const Song = ({selectedSong, audio, setAudio}) => {

  

    const handlePlay = (e) => {
      console.log(e.target.value)
      const tempAudio = new Audio(e.target.value)
      tempAudio.play()
      setAudio(tempAudio);
    }

    // console.log(selectedSong)


  return (

    // <h1>test</h1>
      
      <div id="guesssong">
        <h1>Guess the song!!!</h1>
        {typeof(selectedSong) != "undefined" ? <img src={selectedSong['im:image'][1].label} alt=""/> : <p>undefined error</p> }
        <select name="quiz">
          <option>Guess the song</option>
          <option>Answer1</option>
          <option>Answer2</option>
          <option>Answer3</option>
          <option>Answer4</option>
        </select>
        <button type="submit" value="quiz">Submit</button>
         {typeof(selectedSong) != "undefined" ? <button value={selectedSong.link[1].attributes.href} onClick={handlePlay}>Play</button> : <p>Selected song is undefined</p>}
      </div>

  )
}

export default Song;