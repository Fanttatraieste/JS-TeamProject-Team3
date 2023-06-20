const modal = require('./modal');

module.exports = movieList => {
  let movieContainer = document.querySelector('.movies__container');
  //   let numberContainer = document.querySelector('.number-wrapper');
  //   numberContainer.innerHTML = '';
  movieContainer.innerHTML = '';

  movieList.forEach(movie => {
    let htmlElement = createSmallMovieDiv(movie);

    htmlElement.addEventListener('click', e => {
      modal(movie);
    });

    movieContainer.appendChild(htmlElement);
  });

  function createSmallMovieDiv(movie) {
    const smallDiv = document.createElement('div');
    smallDiv.classList.add('smallDiv');

    //creez titlul
    const title = document.createElement('p');
    title.classList.add('smallDiv__title');
    //
    let t = '';
    if (movie.title.length <= 25) t = movie.title;
    else {
      let elist = movie.title.split('');
      while (elist.length > 30) elist.pop();
      elist.push('.');
      elist.push('.');
      elist.push('.');
      t = elist.join('');
    }
    //
    title.innerHTML = `${t}`;
    smallDiv.appendChild(title);

    //creez imaginea
    const img = document.createElement('img');
    img.classList.add('smallDiv__image');
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    smallDiv.appendChild(img);

    //creez listuta
    const ul = document.createElement('ul');
    ul.classList.add('smallDiv__list');

    let li1 = document.createElement('li');
    li1.classList.add('smallDiv__list__element');

    let p1 = document.createElement('p');
    p1.classList.add('smallDiv__list__key');
    p1.innerHTML = 'Rating';
    li1.appendChild(p1);

    let p2 = document.createElement('p');
    p2.classList.add('smallDiv__list__value');
    p2.innerHTML = `${movie.vote_average}`;
    li1.appendChild(p2);
    ul.appendChild(li1);

    let li2 = document.createElement('li');
    li2.classList.add('smallDiv__list__element');

    let p3 = document.createElement('p');
    p3.classList.add('smallDiv__list__key');
    p3.innerHTML = 'Popularity';
    li2.appendChild(p3);

    let p4 = document.createElement('p');
    p4.classList.add('smallDiv__list__value');
    p4.innerHTML = `${movie.popularity}`;
    li2.appendChild(p4);

    ul.appendChild(li2);

    smallDiv.appendChild(ul);

    //creez descrierea
    let desc = movie.overview;
    desc = desc.split('');
    if (desc.length > 100) {
      desc = desc.slice(0, 100);
      desc.push('...');
    }
    desc = desc.join('');

    const overview = document.createElement('p');
    overview.innerHTML = desc;
    overview.classList.add('smallDiv__desc');

    smallDiv.appendChild(overview);

    return smallDiv;
  }
};
