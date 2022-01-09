const input = document.getElementById("validation-input");

input.addEventListener('blur', onBlur);

function onBlur(event) {

    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }

};