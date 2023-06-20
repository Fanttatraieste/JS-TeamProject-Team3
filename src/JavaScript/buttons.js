module.exports = movie => {
  //aici vreau sa fac logica pt butoane, ca sa nu aglomerez fisierul js de modal
  //aici adaug event listener pentru butoanele de watched si queue

  //ma voi folosi de obiectul wat-que creat intr-un fisier js separat, ca la click pe oricare buton, sa se aplice modificarea corecta asupra obiectului
  const watQueObj = require('./wat-que');

  // functia pe care o fac stiu sigur ca va fi chemata doar din modal
  // movie este obiectul din modal in momentul clickului

  const watched = document.querySelector('.add-to-watched-btn');
  const queue = document.querySelector('.add-to-queue-btn');

  let watchList = watQueObj.watched.map(e => e);
  let queueList = watQueObj.queue.map(e => e);

  watched.addEventListener('click', e => {
    //console.log(e.target);
    if (watched.id === e.target.id && check(watchList, movie) === false) {
      watchList.push(movie);
      console.log(movie);
      watQueObj.watched = watchList;
    }
  });

  queue.addEventListener('click', e => {
    // console.log(e.target);
    if (queue.id === e.target.id && check(queueList, movie) === false) {
      queueList.push(movie);
      watQueObj.queue = queueList;
    }
  });

  function check(movieList, movie) {
    //verifica daca exista movie in movieList
    for (let i = 0; i < movieList.length; i++)
      if (movieList[i].id === movie.id) return true;
    return false;
  }
};
