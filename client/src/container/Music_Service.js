const musicFactsUrl = 'http://localhost:500/api/musicfacts/';
const userScoreUrl = 'http://localhost:500/api/userscore/';

export const getMusicFacts = () => {
  return fetch(musicFactsUrl).then(res => res.json())
}

export const getUserScore = () => {
  return fetch(userScoreUrl).then(res => res.json())
}


export const postUserScore = (payload) => {
  return fetch(userScoreUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}




