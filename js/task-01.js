'use strict'

const liCount = document.querySelectorAll('.item');

console.log(`Number of categories:: ${liCount.length}`);

liCount.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
});

