const list = require('./trending');
const genres = require('./genre');
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
      // const htmlElement = createElementProstule(movie);

      // htmlElement.addEventListener('click', event => {
      //   modal(movie);
      //   console.log('------   Obiect Vlad    ------');
      //   console.log(movie);
      // });

      // movieContainer.appendChild(htmlElement);

      createElementProstule(movie).then(htmlElement => {
        htmlElement.addEventListener('click', event => {
          modal(movie);
          console.log('------   Obiect Vlad    ------');
          console.log(movie);
        });

        movieContainer.appendChild(htmlElement);
      });
    });

    async function createElementProstule(e) {
      const elDiv = document.createElement('div');
      elDiv.classList.add('movies__container__item');

      const moviePoster = document.createElement('img');
      moviePoster.src = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
      moviePoster.classList.add('movies__container__image');
      elDiv.appendChild(moviePoster);

      const text = document.createElement('div');
      const title = document.createElement('p');
      //
      let t = '';
      if (e.title.length <= 25) t = e.title;
      else {
        let elist = e.title.split('');
        while (elist.length > 30) elist.pop();
        elist.push('.');
        elist.push('.');
        elist.push('.');
        t = elist.join('');
      }
      //
      title.innerHTML = `${t}`;
      title.classList.add('movies__container__title');
      text.appendChild(title);

      //const genreList = e.genres.map(e => e.name);
      let gen = '';
      // if (genreList.length == 1) genres += genreList[0];
      // else if (genreList.length == 2)
      //   genres += genreList[0] + ' ' + genreList[1];
      // else genres += genreList[0] + ' ' + genreList[1] + ' ' + 'other';

      //
      let genreList = await genres(); //am o lista de obiecte, unde fiecare obiect are id si nume
      let genreIds = e.genre_ids; //aici am o lista de Id-uri
      gen += createGenreString(genreList, genreIds);
      //

      gen += ' | ';
      const year = e.release_date.slice(0, 4);
      gen += `${year}`;
      const subtitle = document.createElement('p');
      subtitle.innerHTML = gen;
      subtitle.classList.add('movies__container__genre');
      text.appendChild(subtitle);

      elDiv.appendChild(text);

      // console.log(genres);

      return elDiv;
    }
  }
  function createGenreString(genreList, genreIds) {
    // o sa imi fac o lista de stringuri facand match din genre id cu genre list

    // console.log('----------------');
    // console.log(genreList);
    // console.log(genreIds);
    // console.log('----------------');

    let genreStrings = [];
    let ok = false;
    for (let i = 0; i < genreIds.length; i++) {
      ok = false;
      for (let j = 0; j < genreList.length && ok === false; j++) {
        if (genreIds[i] === genreList[j].id) {
          genreStrings.push(genreList[j].name);
          ok = true;
        }
      }
    }
    //aici voi avea in genreStrings toate genurile aferente unui film, sub forma de lista de stringuri
    console.log(genreStrings);
    //eu vreau sa returnez un String care sa contina max 2 genuri + cuvantul other
    let ans = ''; //ans de la answer
    if (genreStrings.length === 1) ans = genreStrings[0];
    else if (genreStrings.length === 2)
      ans = genreStrings[0] + ', ' + genreStrings[1];
    else ans = genreStrings[0] + ', ' + genreStrings[1] + ', ' + 'other';

    return ans;
  }
};
