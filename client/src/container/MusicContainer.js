import React, {useState, useEffect} from "react";
import DidYouKnow from "../components/DidYouKnow";
import MusicGame from "../components/MusicGame";

const MusicContainer = () => {
    
    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [optionList, setOptionList] = useState([]);
    const [selectedFact, setSelectedFact] = useState(null);
    const [factList, setFactList] = useState([]);
    const [audio, setAudio] = useState(null);
    const [userScore, setUserScore] = useState(0);
   

    useEffect(() => {
      console.log('fetch api and set songlist use effect, listening to selectedGenre')
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=40/genre=${selectedGenre}/json`)
      .then(res => res.json())
      .then(data => setSongList(data.feed.entry))
    }, [selectedGenre])

    useEffect(() => {
      console.log('setSelected Song use effect')
      setSelectedSong(songList[getRandomInt(40)]);
    }, [songList])

    console.log("option list")
    console.log(optionList)

    useEffect(() => {
      shuffleSongs();
    }, [selectedSong])

    const handleGenreChange = (e) => { // ==>>> NEED TO PREVENT DEFAULT VALUE FROM PASSING 0
        setSelectedGenre(e.target.value)
    };

    const handleUserScore = (e) => {
      if (e.target.value == selectedSong["im:artist"].label){
        setUserScore(userScore + 1)
      }
      console.log(`this is the userPick: ${e.target.value}`);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const shuffleSongs = () => {
      const tempList = songList.filter((song) => {
      return song !== selectedSong;
      })
      let newList = [];
      for(let i=0; i<3; i++){
        const extractedSong = tempList[getRandomInt(39)]
        newList.push(extractedSong);
        const indexToRemove = tempList.indexOf(extractedSong);
        tempList.splice(indexToRemove, 1);
      }
      newList.push(selectedSong);

      // const spliced = newList.splice(getRandomInt(3), 1);
      // const testList = [...newList, spliced]
      // newList = testList;

      let currentIndex = newList.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 != currentIndex) {
        // Pick a remaining element...
        randomIndex = getRandomInt(3);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = newList[currentIndex];
        newList[currentIndex] = newList[randomIndex];
        newList[randomIndex] = temporaryValue;
      }
    
      setOptionList(newList);
    }  

    // useEffect(() => {

    //   // setOptionList([selectedSong]);
  
    //   const tempList = songList.filter((song) => {
    //     return song !== selectedSong;
    //   })
    //   const newList = [];
    //   for(let i=0; i<3; i++){
    //     const extractedSong = tempList[getRandomInt(39)]
    //     newList.push(extractedSong);
    //     const indexToRemove = tempList.indexOf(extractedSong);
    //     tempList.splice(indexToRemove, 1);
    //   }
      
    //   setOptionList(newList);
    //   // console.log(newList);
    //   console.log(optionList);

    //   // const shuffleList = optionList;

    //   // let currentIndex = shuffleList.length, temporaryValue, randomIndex;
    //   // // While there remain elements to shuffle...
    //   // while (0 != currentIndex) {
    //   //   // Pick a remaining element...
    //   //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   //   currentIndex -= 1;
    //   //   // And swap it with the current element.
    //   //   temporaryValue = shuffleList[currentIndex];
    //   //   shuffleList[currentIndex] = shuffleList[randomIndex];
    //   //   shuffleList[randomIndex] = temporaryValue;
    //   // }
    
    //   // setOptionList(shuffleList);
    //   // console.log(shuffleList);

    // }, [selectedSong])
    
    // console.log('option list')
    // console.log(optionList);

    return(
      <>
        <div id="dropdownmenu">
        <select name="_selGenre" onChange={handleGenreChange}>
            <option>All Genres</option> 
            <option value="21">Rock</option>
            <option value="14">Pop</option>
            <option value="11">Jazz</option>
        </select>
        <MusicGame 
          songList={songList} 
          selectedGenre={selectedGenre} 
          getRandomInt={getRandomInt} 
          selectedSong={selectedSong} 
          setSelectedSong={setSelectedSong} 
          audio={audio} 
          setAudio={setAudio} 
          optionList={optionList} 
          setOptionList={setOptionList} 
          handleUserScore={handleUserScore} /> 
        
        </div>
        {/* <div id="musicFacts">
          <DidYouKnow  userScore={userScore}/></div> */}
        
        </>
    )
}

export default MusicContainer;