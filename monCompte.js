//! AFFICHAGE DU NOM RECUPERE PAR LE FORMULAIRE
document.addEventListener("DOMContentLoaded", function() {
    const identifiant = localStorage.getItem("identifiant");
    const parts = identifiant.split(' ');

    if (parts.length >= 2) {
        const prenom = parts[0];
        const nom = parts.slice(1).join(' ');
        document.getElementById("welcomeMessage").innerText = ` ${prenom} ${nom}  `;
        document.getElementById("inputNom").value =  nom;
        document.getElementById("inputPrenom").value = prenom;
        document.getElementById("inputMail").value = prenom + "." +nom+"@pots-potes.fr";

    } else {
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