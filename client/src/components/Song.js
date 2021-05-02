import React, { useState, useEffect } from "react";

const Song = ({selectedSong, audio, setAudio}) => {

  

    const handlePlay = (e) => {
      console.log(e.target.value)
      const tempAudio = new Audio(e.target.value)
      tempAudio.play()
      setAudio(tempAudio);
    }

    const handleStop = () => {
      audio.pause();
    }

    // console.log(selectedSong)


  return (

    // <h1>test</h1>
      
    <>
    <div class="card">
    {typeof(selectedSong) != "undefined" ? 
      <img src={selectedSong['im:image'][1].label} class="card-img-top" alt="..."/> 
      : <p>undefined error</p> }
      <div class="card-body">
        {typeof(selectedSong) != "undefined" ? 
          <button value={selectedSong.link[1].attributes.href} 
            onClick={handlePlay} class="btn btn-primary">Play</button> 
            : <p>Selected song is undefined</p>}
        &nbsp;   
        {/* {typeof(selectedSong) != "undefined" ? 
          <button value={selectedSong.link[1].attributes.href} 
            onClick={handlePlay} class="btn btn-secondary">Pause</button> 
            : <p>Selected song is undefined</p>}   */}
            <button onClick={handleStop}Stop>Stop</button>
        <br/><br/><br/>    
        <h5 class="card-title">Guess the song!!!</h5>
        <p class="card-text">
          <select name="quiz" className="dropdown">
            <option>Guess the song</option>
            <option>Answer1</option>
            <option>Answer2</option>
            <option>Answer3</option>
            <option>Answer4</option>
          </select>
        </p>

        <button type="submit" value="quiz" class="btn btn-primary">Submit</button>
        
      </div>
    </div>
     
  </>
  )
}

export default Song;