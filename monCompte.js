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

// ! CHAMPS MODIFIABLES
function editField(icon) {
    const fieldContainer = icon.parentElement;
    const inputField = fieldContainer.querySelector('input');

    inputField.removeAttribute('disabled');
    icon.style.display = 'none';
    fieldContainer.querySelector('.save-icon').style.display = 'inline-block';
}

function saveField(icon) {
    const fieldContainer = icon.parentElement;
    const inputField = fieldContainer.querySelector('input');

    inputField.setAttribute('disabled', 'true');
    icon.style.display = 'none';
    fieldContainer.querySelector('.edit-icon').style.display = 'inline-block';
}
//! CLIC DU BOUTON MOT DE PASSE
function redirigerVersMDP() {
    window.location.href = "motDePasse.html";
}
//! CLIC DU BOUTON DESINSCRIPTION
function redirigerVersDesinscription() {
    window.location.href = "desinscription.html";
}