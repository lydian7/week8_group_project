import React, { useState, useEffect } from 'react';

function DidYouKnow({selectedGenre}){
    const [factsList, setFactsList] = useState([]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const POP = "POP";
  const JAZZ = "JAZZ";
  const ROCK = "ROCK";

  
  function getRandomInt(mn,mx){
    const min = mn;
    const max = mx;
    const rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  
  function getGenreType(genreType){
      if(genreType.toUpperCase()===POP){
          return POP;
      }
      else if(genreType.toUpperCase()===ROCK){
        return ROCK;
      }
      else if(genreType.toUpperCase()===JAZZ){
        return JAZZ;
      }
      else{
          return "";
      }
  }

  
  useEffect(() => {
    fetch("http://localhost:5000/api/musicfacts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log("result = "+result);
          setItems(result);
        },
        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
    <>
    <h2>Did you know?</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>  
                {/* if Genre is POP  */
                getGenreType(item.genre)
                /* if Genre is ROCK  */

                /* if Genre is JAZZ  */}
            </strong>
            <br />
            {item.facts[getRandomInt(0,4)]}
          </li>
        ))}
      </ul>
      </>
    );
  }
    

  
    
   
}
export default DidYouKnow;