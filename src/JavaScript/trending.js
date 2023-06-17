const key = require('./key').key;

module.exports = async page => {
  const response2 = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?page=${page}&api_key=${key}`
  );
  const obj2 = await response2.json();
  const trendingList = obj2.results;

  console.log(obj2.page);
  console.log(obj2.total_pages);
  console.log(obj2.total_results);

  return trendingList;
};
