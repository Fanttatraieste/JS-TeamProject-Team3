const key = require('./key').key;

// fetch(
//   `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${key}`
// )
//   .then(res => res.json())
//   .then(res => console.log(res.genres));

module.exports = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${key}`
  );
  const genreObj = await res.json();

  return genreObj.genres; //returneaza o lista
};
