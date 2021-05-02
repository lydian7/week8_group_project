import React, {useState, useEffect} from "react";
import MusicGame from "../components/MusicGame";

const MusicContainer = () => {
    
    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [selectedFact, setSelectedFact] = useState(null);
    const [factList, setFactList] = useState([]);
    const [audio, setAudio] = useState(null);
    const [randos, setRandos] = useState([]);

    useEffect(() => {
      setSelectedSong(songList[getRandomInt(40)])
    }, [songList])

    useEffect(() => {
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=40/genre=${selectedGenre}/json`)
      .then(res => res.json())
      .then(data => setSongList(data.feed.entry))
    }, [selectedGenre])

    console.log(`Selected genre is ${selectedGenre}`);

    const handleGenreChange = (e) => { // ==>>> NEED TO PREVENT DEFAULT VALUE FROM PASSING 0
        setSelectedGenre(e.target.value)    
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    useEffect(() => {
      const tempList = songList.filter((song) => {
        return song !== selectedSong;
      })
      console.log("templist")
      console.log(tempList)
      const newList = [];
      for(let i=0; i<3; i++){
        const extractedSong = tempList[getRandomInt(39)]
        newList.push(extractedSong);
        const indexToRemove = tempList.indexOf(extractedSong);
        tempList.splice(indexToRemove, 1);
      }
      setRandos(newList);
    }, [selectedSong])

    console.log(randos);
    



    

    return(
        <div id="dropdownmenu">
        <select onChange={handleGenreChange}>
            <option>All Genres</option> 
            <option value="21">Rock</option>
            <option value="14">Pop</option>
            <option value="11">Jazz</option>
        </select>
        <MusicGame songList={songList} selectedGenre={selectedGenre} getRandomInt={getRandomInt} selectedSong={selectedSong} setSelectedSong={setSelectedSong} audio={audio} setAudio={setAudio}/>
        </div>
    )
}

export default MusicContainer;