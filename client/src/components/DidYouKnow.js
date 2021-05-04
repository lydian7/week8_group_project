import React, { useState, useEffect } from 'react';

function DidYouKnow({selectedGenre, game}){
  const [factsList, setFactsList] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [genreDisplay, setGenreDisplay] = useState(null);

  let GenreDisplay = null;
    
    if (selectedGenre == 21){
      GenreDisplay = "Rock"
    }
    if (selectedGenre == 14){
      GenreDisplay = "Pop"
    }
    if (selectedGenre == 11){
      GenreDisplay = "Jazz"
    }
  

  

  
  function getRandomInt(mn,mx){
    const min = mn;
    const max = mx;
    const rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  
  function getFactsByGenre(){
    for(const object of items){
      if (object.genre == selectedGenre){
        setFactsList(object.facts)
      }
    }
  }

  
  useEffect(() => {
    fetch("http://localhost:5000/api/musicfacts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // console.log("result = "+result);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      
  }, [])

  useEffect(() => {
  getFactsByGenre()
 
    
  }, [selectedGenre])

  console.log("genreDisplay", GenreDisplay)
  console.log("selectedGenre", selectedGenre)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <div>
    {game ? 
      <>
    <h2>Did you know?</h2>
    <div id="facts">
    
    <h2>{GenreDisplay} Facts</h2>
      <ul>
      <li> {factsList[getRandomInt(0,4)]} </li>

      </ul> 
      </div>
      </> : null
      }
    </div>

    );
  }
    

 
    
   
}
export default DidYouKnow;