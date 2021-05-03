import React, { useState, useEffect } from "react";

const Song = ({selectedSong, optionList, handleUserScore}) => {

  const [selectValue, setSelectValue] = useState("");
  
  const handleChange = (e) => {
    setSelectValue(e.target.value);
  }
  console.log(`this is select value: ${selectValue}`)

  if(optionList.includes(undefined)){ // ===> hack for undefined or 
    return null;
  }

  return (

    
      
    <>
      <div class="card">

        {typeof(selectedSong) != "undefined" ? <img src='https://source.unsplash.com/500x500/?music' class="card-img-top" alt="..."/> : <p>undefined error</p> }

      <div class="card-body">

        {typeof(selectedSong) != "undefined" ? <audio
        controls
        src={selectedSong.link[1].attributes.href}>
            Your browser does not support the
            <code>audio</code> element.
        </audio> : <p>undefined error</p> } 

        <br/><br/><br/>    

        <h5 class="card-title">Guess the artist!!!</h5>
          <p class="card-text">
         

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
            <button type="submit" value={selectValue} class="btn btn-primary" onClick={handleUserScore}>Submit</button>
         
        
          </p>
      </div>
    </div>
     
  </>
  )
}

export default Song;