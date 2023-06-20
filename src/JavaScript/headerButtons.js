const watQueObj = require('./wat-que');
const renderPage = require('./body');
const renderList = require('./renderList');
// const renderNumbers = require('./number');

module.exports = () => {
  const watched = document.querySelector('.watched-button');
  const queue = document.querySelector('.queue-button');
  const home = document.querySelector('.home-button');

  watched.addEventListener('click', e => {
    //console.log(watQueObj.watched);
    renderList(watQueObj.watched);
  });

  queue.addEventListener('click', e => {
    console.log(watQueObj.queue);
    renderList(watQueObj.queue);
  });

  home.addEventListener('click', e => {
    renderPage(1);
    // renderNumbers();
  });
};
