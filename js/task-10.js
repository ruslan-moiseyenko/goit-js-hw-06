function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const numberOfDivs = document.querySelector('input');
const mainDiv = document.querySelector("#boxes");

let currentSquareLength = 30;


function createBoxes(number) {
  if (!number) {
    console.log('add any number');
    return;
  }

  for (let i = 0; i < number; i++) {
    mainDiv.insertAdjacentHTML('beforeend',
      `<div style="width: ${currentSquareLength}px; 
    height:${currentSquareLength}px;
    background-color:${getRandomHexColor()};">`);
    currentSquareLength += 10;
  }
  currentSquareLength = 30;
}


function destroyBoxes() {
  mainDiv.innerHTML = '';
}


createButton.addEventListener('click', () => {
  createBoxes(numberOfDivs.value)
});

destroyButton.addEventListener('click', destroyBoxes);


