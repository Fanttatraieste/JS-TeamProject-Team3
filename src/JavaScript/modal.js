const genres = require('./genre');
const buttons = require('./buttons');

const watQueObj = require('./wat-que');

module.exports = async movie => {
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

  //
  const gen = document.getElementById('genre');
  let genreList = await genres();
  let genreIds = movie.genre_ids;
  gen.innerHTML = createGenreString(genreList, genreIds);
  //
  voteRating.innerHTML = movie.vote_average;
  voteCount.innerHTML = movie.vote_count;
  popul.innerHTML = movie.popularity;
  origTitle.innerHTML = movie.original_title;
  about.innerHTML = movie.overview;
  image.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  filmTitle.innerHTML = movie.title;
  // console.log(filmTitle);
  // console.log(movie.title);

  function createGenreString(genreList, genreIds) {
    // o sa imi fac o lista de stringuri facand match din genre id cu genre list

    // console.log('----------------');
    // console.log(genreList);
    // console.log(genreIds);
    // console.log('----------------');

    let genreStrings = '';
    let ok = false;
    for (let i = 0; i < genreIds.length; i++) {
      ok = false;
      for (let j = 0; j < genreList.length && ok === false; j++) {
        if (genreIds[i] === genreList[j].id) {
          genreStrings += genreList[j].name;
          genreStrings += ', ';
          ok = true;
        }
      }
    }

    let n = genreStrings.length;
    genreStrings = genreStrings.slice(0, n - 2);
    return genreStrings;
  }

  (() => {
    const watBtn = document.querySelector('.add-to-watched-btn');
    const queBtn = document.querySelector('.add-to-queue-btn');

    //console.log(watBtn);

    watBtn.id = `watch${movie.id}`;
    queBtn.id = `queue${movie.id}`;

    //am targetat butoanele, mai departe vreau sa verific daca filmul curent este sau nu adaugat in coada sau watched
    //daca nu se afla, le las asa
    //daca se afla deja in vreo lista, vreau sa adaug clasa added butoanelor targetate

    let watList = watQueObj.watched.map(e => e);
    let queList = watQueObj.queue.map(e => e);

    if (checkMovie(watList, movie)) {
      watBtn.classList.add('added');
      watBtn.innerHTML = 'ADDED TO WATCHED';
    } else {
      watBtn.classList.remove('added');
      watBtn.innerHTML = 'ADD TO WATCHED';
    }

    if (checkMovie(queList, movie)) {
      queBtn.classList.add('added');
      queBtn.innerHTML = 'ADDED TO QUEUE';
    } else {
      queBtn.classList.remove('added');
      queBtn.innerHTML = 'ADD TO QUEUE';
    }
  })();

  buttons(movie);

  function checkMovie(movieList, movie) {
    for (let i = 0; i < movieList.length; i++)
      if (movieList[i].id === movie.id) return true;
    return false;
  }
};
