module.exports = movie => {
  const modal = document.querySelector('.modal-wrapper');
  const closeModalBtn = document.querySelector('.backdrop');

  toggleModal();

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('is-hidden');
  });

  function toggleModal() {
    modal.classList.toggle('is-hidden');
  }

  const voteRating = document.getElementById('voteRating');
  const voteCount = document.getElementById('voteCount');
  const popul = document.getElementById('popul');
  const origTitle = document.getElementById('origTitle');
  const about = document.getElementById('about');
  const image = document.getElementById('img');
  const filmTitle = document.getElementById('film-title');
  //const genre = document.getElementById('genre');

  voteRating.innerHTML = movie.vote_average;
  voteCount.innerHTML = movie.vote_count;
  popul.innerHTML = movie.popularity;
  origTitle.innerHTML = movie.original_title;
  about.innerHTML = movie.overview;
  image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  filmTitle.innerHTML = movie.title;
  console.log(filmTitle);
  console.log(movie.title);
};
