const list = require('./trending');
const modal = require('./modal');

list(1).then(list => console.log(list));
list(2).then(list => console.log(list));
list(3).then(list => console.log(list));
list(4).then(list => console.log(list));

module.exports = page => {
  list(page).then(list => {
    // primesc ca parametru list, care e o lista de 20 de obiecte
    // fiecare obiect reprezinta un film

    renderPage(list);
  });

  function renderPage(movieList) {
    let movieContainer = document.querySelector('.movies__container');
    movieContainer.innerHTML = '';
    movieList.forEach(movie => {
      const htmlElement = createElementProstule(movie);

      htmlElement.addEventListener('click', event => {
        modal(movie);
      });

      movieContainer.appendChild(htmlElement);
    });

    function createElementProstule(e) {
      const elDiv = document.createElement('div');
      elDiv.classList.add('movies__container__item');

      const moviePoster = document.createElement('img');
      moviePoster.src = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
      moviePoster.classList.add('movies__container__image');
      elDiv.appendChild(moviePoster);

      const text = document.createElement('div');
      const title = document.createElement('p');
      title.innerHTML = `${e.title}`;
      title.classList.add('movies__container__title');
      text.appendChild(title);

      //const genreList = e.genres.map(e => e.name);
      let genres = '';
      // if (genreList.length == 1) genres += genreList[0];
      // else if (genreList.length == 2)
      //   genres += genreList[0] + ' ' + genreList[1];
      // else genres += genreList[0] + ' ' + genreList[1] + ' ' + 'other';

      genres += ' | ';
      const year = e.release_date.slice(0, 4);
      genres += `${year}`;
      const subtitle = document.createElement('p');
      subtitle.innerHTML = genres;
      subtitle.classList.add('movies__container__genre');
      text.appendChild(subtitle);

      elDiv.appendChild(text);

      // console.log(genres);

      return elDiv;
    }
  }
};
