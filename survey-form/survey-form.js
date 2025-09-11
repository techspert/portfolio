// Basic Form Validation
const form = document.getElementById('survey-form');
form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('dropdown').value;
    const recommend = document.querySelector('input[name="recommend"]:checked');

    if (!name || !email || !role || !recommend) {
        e.preventDefault();
        alert('Please fill out all required fields.');
    }
});
