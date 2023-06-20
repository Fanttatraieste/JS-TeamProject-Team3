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
    let ok = check(watchList, movie);
    if (watched.id === e.target.id && !ok) {
      watchList.push(movie);
      // console.log(movie);
      watQueObj.watched = watchList;
      watched.classList.add('added');
      watched.innerHTML = 'ADDED TO WATCHED';
    } else if (watched.id === e.target.id && ok) {
      //watchList.push(movie);
      const index = watchList.indexOf(movie);
      if (index > -1) {
        //mereu ar trb sa fie mai mare
        watchList.splice(index, 1);
      }

      watQueObj.watched = watchList;
      watched.classList.remove('added');
      watched.innerHTML = 'ADD TO WATCHED';
    }
  });

  queue.addEventListener('click', e => {
    // console.log(e.target);
    let ok = check(queueList, movie);
    if (queue.id === e.target.id && !ok) {
      queueList.push(movie);
      watQueObj.queue = queueList;
      queue.classList.add('added');
      queue.innerHTML = 'ADDED TO QUEUE';
    }
    if (queue.id === e.target.id && ok) {
      //watchList.push(movie);
      const index = queueList.indexOf(movie);
      if (index > -1) {
        //mereu ar trb sa fie mai mare
        queueList.splice(index, 1);
      }

      watQueObj.queue = queueList;
      queue.classList.remove('added');
      queue.innerHTML = 'ADD TO WATCHED';
    }
  });

  function check(movieList, movie) {
    //verifica daca exista movie in movieList
    for (let i = 0; i < movieList.length; i++)
      if (movieList[i].id === movie.id) return true;
    return false;
  }
};
