import React, { useState, useEffect } from "react";

const Song = ({selectedSong, audio, setAudio}) => {


    // console.log(selectedSong)


  return (

    // <h1>test</h1>
      
    <>
    <div class="card">
    {typeof(selectedSong) != "undefined" ? 
      <img src={selectedSong['im:image'][1].label} class="card-img-top" alt="..."/> 
      : <p>undefined error</p> }
      <div class="card-body">
      {typeof(selectedSong) != "undefined" ? <audio
        controls
        src={selectedSong.link[1].attributes.href}>
            Your browser does not support the
            <code>audio</code> element.
        </audio> : <p>undefined error</p> } 
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