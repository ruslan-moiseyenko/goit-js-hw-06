const input = document.getElementById("validation-input");

input.addEventListener('blur', onBlur);

function onBlur(event) {
    const inputLenght = input.dataset.length;

    if (event.currentTarget.value.length === Number(inputLenght)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }

};