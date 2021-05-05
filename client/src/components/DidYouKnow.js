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
      <div>
           <h2>Did you know?</h2>
       <div class="container">
<figure class="wave">
  <img src="https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/alegria-169hero-music-shutterstock.jpg" alt="rajni"></img>
  <div class="text-block">
  <p> {factsList[getRandomInt(0,4)]} </p>
  </div>
</figure>
<figcaption>{GenreDisplay} Facts</figcaption> </div> </div>
     
    
      </> : 
  
      <svg xmlns="http://www.w3.org/2000/svg" class="equilizer" viewBox="0 0 128 128">
      <g>
        <title>Audio Equilizer</title>
        <rect class="bar" transform="translate(0,0)" y="15"></rect>
        <rect class="bar" transform="translate(25,0)" y="15"></rect>
        <rect class="bar" transform="translate(50,0)" y="15"></rect>
        <rect class="bar" transform="translate(75,0)" y="15"></rect>
        <rect class="bar" transform="translate(100,0)" y="15"></rect>
      </g>
      </svg>

      }
    </div>

    );
  }
    

 
    
   
}
export default DidYouKnow;