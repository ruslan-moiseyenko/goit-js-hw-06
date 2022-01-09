const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', (event) => {
    if (event.currentTarget.value) {
        output.innerText = event.currentTarget.value;
    } else {
        output.innerText = "Anonymous";
    };
});