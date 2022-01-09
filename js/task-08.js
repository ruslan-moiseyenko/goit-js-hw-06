const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please fill all the fields');
        return;
    }

    const data = {
        email: email.value,
        password: password.value,

    }

    console.log(data);
    event.currentTarget.reset();
}
