window.addEventListener('DOMContentLoaded', () => {

    const myForm = document.querySelector('form');
    const inputName = myForm.querySelector('#fname');
    const genre = myForm.querySelector('#genre');
    const date = myForm.querySelector('#date');
    const email = myForm.querySelector('#email');
    const subject = myForm.querySelector('#subject');
    const submitButton = myForm.querySelector('#submit');

    submitButton.addEventListener('click', (event) => {

        event.preventDefault();

        const applicant = {
            fullName: inputName.value,
            genre: genre.value,
            date: date.value,
            email: email.value,
            subject: subject.value,
        }

    })



})