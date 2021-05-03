const musicFactsUrl = 'http://localhost:500/api/musicfacts/';

export const getMusicFacts = () => {
  return fetch(musicFactsUrl).then(res => res.json())
}

