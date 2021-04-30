import React, {useState, useEffect} from "react";

const MusicContainer = () => {
    
    const [songList, setSongList] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(0);
    const [selectedFact, setSelectedFact] = useState(null);
    const [factList, setFactList] = useState([]);

    useEffect(() => {
      fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=40/genre=${selectedGenre}/json`)
      .then(res => res.json())
      .then(data => setSongList(data.feed.entry))
    }, [selectedGenre])

    console.log(`Selected genre is ${selectedGenre}`);

    const handleGenreChange = (e) => { // ==>>> NEED TO PREVENT DEFAULT VALUE FROM PASSING 0
            setSelectedGenre(e.target.value)
    }

    return(
        <div>
        <h1>This is the Container</h1>
        <select onChange={handleGenreChange}>
            <option>All Genres</option> 
            <option value="21">Rock</option>
            <option value="14">Pop</option>
            <option value="11">Jazz</option>
        </select>
        </div>
    )
}

export default MusicContainer;