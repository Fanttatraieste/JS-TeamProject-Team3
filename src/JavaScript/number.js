module.exports = () => {
  const renderPages = require('./body');

  let currentPage = 1;
  const numbersDiv = document.querySelector('.numbers');
  let currentHtmlElement = document.getElementById(`${currentPage}`);

  const rightBtn = document.querySelector('.right');
  const leftBtn = document.querySelector('.left');

  addRed();

  window.addEventListener('DOMContentLoaded', function () {
    renderPages(currentPage);
    renderNumbers();
  });

  function renderNumbers() {
    numbersDiv.innerHTML = '';

    for (let i = currentPage - 2; i <= currentPage + 2 && i < 20; i++) {
      if (i > 1 && i < 20) {
        let numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.innerHTML = `${i}`;
        numberDiv.setAttribute('id', `${i}`);
        numbersDiv.appendChild(numberDiv);

        numberDiv.addEventListener('click', () => {
          deleteRed();

          currentPage = numberDiv.id;
          currentHtmlElement = document.getElementById(`${currentPage}`);
          renderPages(currentPage);
          //numbersDiv.innerHTML = '';
          console.log(currentPage);
          //renderNumbers();

          //console.log(renderNumbers);

          addRed();
        });
      }
    }
  }

  //   function toggleCurrentPage() {
  //     currentHtmlElement.classList.toggle('current-page');
  //   }

  function addRed() {
    currentHtmlElement.classList.add('current-page');
  }

  function deleteRed() {
    currentHtmlElement.classList.toggle('current-page');
  }

  rightBtn.addEventListener('click', () => {
    if (currentPage < 20) {
      // console.log(currentPage);
      // console.log(currentHtmlElement);

      deleteRed();
      currentPage++;

      renderPages(currentPage);
      renderNumbers();
      currentHtmlElement = document.getElementById(`${currentPage}`);

      deleteRed();
      //console.log(currentPage);
      //console.log(currentHtmlElement);
    }
  });

  leftBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      // console.log(currentPage);
      //console.log(currentHtmlElement);

      deleteRed();
      currentPage--;

      renderPages(currentPage);
      renderNumbers();
      currentHtmlElement = document.getElementById(`${currentPage}`);

      addRed();
      //console.log(currentPage);
      //console.log(currentHtmlElement);
    }
  });
};
