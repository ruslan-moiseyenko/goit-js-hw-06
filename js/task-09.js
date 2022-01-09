function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorTeller = document.querySelector('.color');

button.addEventListener('click', buttonHandler);

function buttonHandler() {
  const currentColor = getRandomHexColor()
  body.style.backgroundColor = currentColor;
  colorTeller.innerText = currentColor;

}
