const fontSize = document.getElementById('font-size-control');
const span = document.getElementById('text');

fontSize.addEventListener('input', () => {
    span.style = `font-size: ${fontSize.value}px`;

});

