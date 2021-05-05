import React, { useState, useEffect } from "react";



const Song = ({getRandomInt, songList, setSongList, selectedSong, optionList, count, setCount, userScore, setUserScore, setSelectedSong}) => {



  const [selectValue, setSelectValue] = useState("");
  const [value, setValue] = useState(null);

  console.log("count", count);

  // const handleCount = () => {
  //   if(count < 5){
  //     setCount(count + 1);
  //   }
  // }

  const handleUserScore = (e) => {
    
    if (e.target.value == selectedSong["im:artist"].label){
      setUserScore(userScore + 1)
    }
    if(count < 5){
      setCount(count + 1);
    }
    
    handleSelectedSong()
    
    
  }
  console.log("value", value)

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  }
  console.log(`this is select value: ${selectValue}`)

  if(optionList.includes(undefined)){ // ===> hack for undefined or null errors
    return null;
  }

  const handleSelectedSong = () => {
    // newly added function called when submit is pressed to remove current song from playlist and set a new playlist
    gamePlayList(); 
    setSelectedSong(songList[getRandomInt(songList.length - 1)]);
    setSelectValue("");
  }


  const gamePlayList = () => { /// ===> newly added to prevent duplicate songs from playing
    const tempList = songList.filter((song) => {
      return song["im:name"].label !== selectedSong["im:name"].label;
      })
    setSongList(tempList);
  }

  return (

      <div className="card-new">
    
      <div id="spinning">
          <img id="app-loader" src="images/disc_spinner.png" /> 
      </div>
        
      <div className="card-body">
        <div>
        {typeof(selectedSong) != "undefined" ? <audio
        controls
        src={selectedSong.link[1].attributes.href}>
            Your browser does not support the
            <code>audio</code> element.
        </audio> : <p>undefined error</p> } 
        </div>
        

        
        <div><h5 className="card-title">Guess the artist</h5></div>
        
          <div className="card-text">
         

            {(typeof(optionList[0])!= "undefined" 
            && optionList.length>3)  ?   

              <select name="quiz" className="dropdown" onChange={handleChange} value={selectValue}>
                <option value="" disabled>Select Answer</option>
                <option value={optionList[0]}>{optionList[0]}</option>
                <option value={optionList[1]}>{optionList[1]}</option>
                <option value={optionList[2]}>{optionList[2]}</option>
                <option value={optionList[3]}>{optionList[3]}</option>
              </select>

              : <p>undefined error</p>

            }
            </div>
          <br/>  
          <div id="submit-answer"><button type="submit" value={selectValue} className="btn btn-secondary" onClick={handleUserScore}>Submit</button>
            {/* <button onClick={handleSelectedSong} className="btn btn-secondary">Next Song</button> */}</div>
        </div>
      </div>
     
  
  )
}

export default Song;