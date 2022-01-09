const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const elementsArray = [];

ingredients.forEach(element => {
  const li = document.createElement('li');
  li.className = 'item';
  li.innerText = element;
  elementsArray.push(li);

});

list.append(...elementsArray);