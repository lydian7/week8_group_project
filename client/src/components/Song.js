import React, { useState, useEffect } from "react";

const Song = ({selectedSong, optionList, handleUserScore}) => {

  const [selectValue, setselectValue] = useState("");

  const handleChange = (e) => {
    setselectValue(e.target.value);
  }
  console.log(`this is select value: ${selectValue}`)


  return (

    // <h1>test</h1>
      
    <>
    <div class="card">
    {typeof(selectedSong) != "undefined" ? 
      <img src='https://source.unsplash.com/500x500/?music' class="card-img-top" alt="..."/> 
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
          <form >
          {typeof(optionList[0]) != "undefined" ?   
          <select name="quiz" value={selectValue} className="dropdown" onChange={handleChange}>
            <option>Guess the song</option>
            <option>{optionList[0]["im:artist"].label}</option>
            <option value={optionList[1]["im:artist"].label}>{optionList[1]["im:artist"].label}</option>
            <option value={optionList[2]["im:artist"].label}>{optionList[2]["im:artist"].label}</option>
            <option value={optionList[3]["im:artist"].label}>{optionList[3]["im:artist"].label}</option>
            
          </select>
          
          : <p>undefined error</p>
        }<input name="quiz" type="submit" value="Submit" class="btn btn-primary"/>
          </form>
          {/* onSubmit={handleUserScore} */}
        </p>

        
        
      </div>
    </div>
     
  </>
  )
}

export default Song;