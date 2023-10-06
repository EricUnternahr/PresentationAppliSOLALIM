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
//! AFFICHAGE DU NOM RECUPERE PAR LE FORMULAIRE
document.addEventListener("DOMContentLoaded", function() {
    // Utilise une fonction synchrone pour récupérer la valeur de localStorage
    const identifiant = localStorage.getItem("identifiant");
    document.getElementById("welcomeMessage").innerText =  identifiant ;
});