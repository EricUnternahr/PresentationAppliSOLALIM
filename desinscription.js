//! VOIR LE MOT DE PASSE EN CLAIR
const toggleOldPassword = document.querySelector('#toggleOldPassword');
const toggleNewPassword = document.querySelector('#toggleNewPassword');
const toggleRepeatPassword = document.querySelector('#toggleRepeatPassword');

const oldPassword = document.querySelector('#oldPassword');
const newPassword = document.querySelector('#newPassword');
const repeatPassword = document.querySelector('#repeatPassword');

toggleOldPassword.addEventListener('click', () => {
    const type = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    oldPassword.setAttribute('type', type);
    toggleOldPassword.querySelector('i').classList.toggle('bi-eye');
});

toggleNewPassword.addEventListener('click', () => {
    const type = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    newPassword.setAttribute('type', type);
    toggleNewPassword.querySelector('i').classList.toggle('bi-eye');
});

toggleRepeatPassword.addEventListener('click', () => {
    const type = repeatPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    repeatPassword.setAttribute('type', type);
    toggleRepeatPassword.querySelector('i').classList.toggle('bi-eye');
});










// ! BOUTON SWITCH
const switchElement = document.getElementById('switch');

switchElement.addEventListener('change', () => {
const bodyElement = document.body;

if (switchElement.checked) {
    bodyElement.classList.remove('body-dark');
    bodyElement.classList.add('body-light');
} else {
    bodyElement.classList.remove('body-light');
    bodyElement.classList.add('body-dark');
}
});






