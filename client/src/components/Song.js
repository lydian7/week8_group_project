import React, { useState, useEffect } from "react";

const Song = ({selectedSong, optionList}) => {


  return (

    // <h1>test</h1>
      
    <>
    <div class="card">
    {typeof(selectedSong) != "undefined" ? 
      <img src='https://source.unsplash.com/500x500/?guitar' class="card-img-top" alt="..."/> 
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
        {typeof(optionList[0]) != "undefined" ?   
          <select name="quiz" className="dropdown">
            <option>Guess the song</option>
            <option>{optionList[0]["im:artist"].label}</option>
            <option>{optionList[1]["im:artist"].label}</option>
            <option>{optionList[2]["im:artist"].label}</option>
            <option>{optionList[3]["im:artist"].label}</option>
          </select>
          : <p>undefined error</p>
        }
        </p>

        <button type="submit" value="quiz" class="btn btn-primary">Submit</button>
        
      </div>
    </div>
     
  </>
  )
}

export default Song;