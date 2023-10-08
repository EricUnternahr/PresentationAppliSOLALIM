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
    const identifiant = localStorage.getItem("identifiant");

    // Divise la chaîne en deux parties en fonction de l'espace
    const parts = identifiant.split(' ');

    // Vérifie si la division a réussi et qu'il y a au moins deux parties
    if (parts.length >= 2) {
        const prenom = parts[0];
        const nom = parts.slice(1).join(' ');

        // Utilise les valeurs pour afficher le message de bienvenue
        document.getElementById("welcomeMessage").innerText = ` ${prenom} ${nom}  `;
        document.getElementById("inputNom").value =  nom;
        document.getElementById("inputPrenom").value = prenom;
        document.getElementById("inputMail").value = prenom + "." +nom+"@pots-potes.fr";

    } else {
        // En cas d'erreur ou de format incorrect, affiche simplement le message complet
        document.getElementById("welcomeMessage").innerText = ` ${identifiant}`;
    }
});

//! CLIC DU BOUTON DECONNECTION
function redirigerVersConnexion() {
    window.location.href = "connexion.html";
}