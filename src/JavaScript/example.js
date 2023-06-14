const key = require('./key').key;

const url = `https://api.themoviedb.org/3/movie/150?api_key=${key}`;

(async () => {
  const response = await fetch(url);
  const responseObj = await response.json();

  console.log(responseObj);
})();
