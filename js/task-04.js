
const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.getElementById('value'),
};

refs.decrement.addEventListener('click', () => {
    refs.value.textContent--;

});

refs.increment.addEventListener('click', () => {
    refs.value.textContent++;
});