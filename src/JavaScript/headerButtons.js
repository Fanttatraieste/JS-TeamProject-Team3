const renderNumbers = require('./number');

module.exports = () => {
  const watQueObj = require('./wat-que');
  const renderPage = require('./body');
  const renderList = require('./renderList');

  const watched = document.querySelector('.watched-button');
  const queue = document.querySelector('.queue-button');
  const home = document.querySelector('.home-button');

  watched.addEventListener('click', e => {
    //console.log(watQueObj.watched);
    const watchList = watQueObj.watched.map(e => e);
    renderList(watchList);
    // const numberDiv = document.querySelector('.number-wrapper');
    // numberDiv.classList.add('is-hidden');
  });

  queue.addEventListener('click', e => {
    //  console.log(watQueObj.queue);
    const queList = watQueObj.queue.map(e => e);
    renderList(queList);
    // const numberDiv = document.querySelector('.number-wrapper');
    // numberDiv.classList.add('is-hidden');
  });

  home.addEventListener('click', e => {
    renderPage(1);
    // renderNumbers();
    // const numberDiv = document.querySelector('.number-wrapper');
    // numberDiv.classList.remove('is-hidden');
  });
};
