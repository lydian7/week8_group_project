import React, { useState, useEffect } from 'react';

function DidYouKnow(){
    const [factsList, setFactsList] = useState([]);

    // useEffect(() => {
    //     console.log('fetch did you know api and showing facts');
    //     fetch(`http://localhost:5000/api/musicfacts`)
    //     .then(res => res.json())
    //     .then(data => setFactsList(data.facts));
    //     //console.log(data.facts);
    // },[factsList]);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const POP = "POP";
  const JAZZ = "JAZZ";
  const ROCK = "ROCK";

  /**
   * Function to get the integer random number
   * @param {} mn 
   * @param {*} mx 
   * @returns 
   */
  function getRandomInt(mn,mx){
    const min = mn;
    const max = mx;
    const rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  /**
   * Function to get the Genre type
   * @param {*} genreType 
   * @returns 
   */
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

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:5000/api/musicfacts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log("result = "+result);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
    

    // return(
    //     <div>
    //         <h2>Did you know?</h2>
    //         <p>factslist 
    //         {factsList.map(item => (
    //             <li>
    //                 {item.facts}
    //             </li>
    //             ))}

    //         </p>
    //     </div>
    // )
   
}
export default DidYouKnow;