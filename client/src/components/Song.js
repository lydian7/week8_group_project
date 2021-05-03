import React, { useState, useEffect } from "react";

const Song = ({selectedSong, optionList, handleUserScore, setEndGame, count, setCount}) => {

  const [selectValue, setSelectValue] = useState("");
  // const [count, setCount] = useState(0);

  console.log("count", count);

  const handleCount = () => {
    if(count < 5){
      setCount(count + 1);
    }
  }

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  }
  console.log(`this is select value: ${selectValue}`)

  if(optionList.includes(undefined)){ // ===> hack for undefined or null errors
    return null;
  }


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
                <option>Select Answer</option>
                <option value={optionList[0]["im:artist"].label}>{optionList[0]["im:artist"].label}</option>
                <option value={optionList[1]["im:artist"].label}>{optionList[1]["im:artist"].label}</option>
                <option value={optionList[2]["im:artist"].label}>{optionList[2]["im:artist"].label}</option>
                <option value={optionList[3]["im:artist"].label}>{optionList[3]["im:artist"].label}</option>
              </select>

              : <p>undefined error</p>

            }
            <button type="submit" value={selectValue} className="btn btn-primary" onClick={handleUserScore, handleCount}>Submit</button>
         
        
          </p>
      </div>
    </div>
     
  </>
  )
}

export default Song;