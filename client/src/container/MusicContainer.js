import React, {useState, useEffect} from "react";
import MusicGame from "../components/MusicGame";

const MusicContainer = () => {
    
    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [selectedFact, setSelectedFact] = useState(null);
    const [factList, setFactList] = useState([]);

    useEffect(() => {
      setSelectedSong(songList[0])
    }, [songList])

    useEffect(() => {
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=${selectedGenre}/json`)
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

    

    return(
        <div>
        
        <select onChange={handleGenreChange}>
            <option>All Genres</option> 
            <option value="21">Rock</option>
            <option value="14">Pop</option>
            <option value="11">Jazz</option>
        </select>
        <MusicGame songList={songList} selectedGenre={selectedGenre} getRandomInt={getRandomInt} selectedSong={selectedSong}/>
        </div>
    )
}

export default MusicContainer;