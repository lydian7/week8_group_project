import React, { useState, useEffect } from "react";



const Song = ({getRandomInt, songList, selectedSong, optionList, count, setCount, userScore, setUserScore, setSelectedSong}) => {



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
    setSelectedSong(songList[getRandomInt(39)]);
  }

  // const handleSubmit = () => {
  //   handleCount()
  //   handleUserScore()
  // }


  return (

    
      
    <>
      <div className="card">

        {typeof(selectedSong) != "undefined" ? <img src='https://source.unsplash.com/500x500/?music' class="card-img-top" alt="..."/> : <p>undefined error</p> }

      <div className="card-body">

        {typeof(selectedSong) != "undefined" ? <audio
        controls
        src={selectedSong.link[1].attributes.href}>
            Your browser does not support the
            <code>audio</code> element.
        </audio> : <p>undefined error</p> } 

        <br/><br/><br/>    

        <h5 className="card-title">Guess the artist!!!</h5>
          <p className="card-text">
         

            {(typeof(optionList[0])!= "undefined" 
            && optionList.length>3)  ?   

              <select name="quiz" className="dropdown" onChange={handleChange}>
                <option value="default" >Select Answer</option>
                <option value={optionList[0]["im:artist"].label}>{optionList[0]["im:artist"].label}</option>
                <option value={optionList[1]["im:artist"].label}>{optionList[1]["im:artist"].label}</option>
                <option value={optionList[2]["im:artist"].label}>{optionList[2]["im:artist"].label}</option>
                <option value={optionList[3]["im:artist"].label}>{optionList[3]["im:artist"].label}</option>
              </select>

              : <p>undefined error</p>

            }
            <button type="submit" value={selectValue} className="btn btn-primary" onClick={handleUserScore}>Submit</button>
            {/* <button onClick={handleSelectedSong} className="btn btn-secondary">Next Song</button> */}
        
          </p>
      </div>
    </div>
     
  </>
  )
}

export default Song;