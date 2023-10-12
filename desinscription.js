//! VOIR LE MOT DE PASSE EN CLAIR
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.querySelector('i').classList.toggle('bi-eye');
});

//! CLIC DU BOUTON valider
function redirigerVersConnexion() {
    alert("Désinscription prise en compte");
    setTimeout(function() {
        window.location.href = "connexion.html";
    }, 1000);
}


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






