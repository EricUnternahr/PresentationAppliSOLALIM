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
    const parts = identifiant.split(' ');

    if (parts.length >= 2) {
        const prenom = parts[0];
        const nom = parts.slice(1).join(' ');
        document.getElementById("welcomeMessage").innerText = ` ${prenom} ${nom}  `;

    } else {
        document.getElementById("welcomeMessage").innerText = ` ${identifiant}`;
    }
});

//! CLIC DU BOUTON DECONNECTION ET DES BOITES
function redirigerVersConnexion() {
    window.location.href = "connexion.html";
}
function redirigerVersMonCompte() {
    window.location.href = "monCompte.html";
}
function redirigerVersmesCommandes() {
    window.location.href = "LesCommandes.html";
}
function redirigerVersGererCommandes() {
    window.location.href = "gererCommandes.html";
}
function redirigerVersReseaux() {
    window.location.href = "reseaux.html";
}

//! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
function toggleThumbnailOnClick(triggerElement, thumbnailElement) {
    let isThumbnailVisible = true;
    triggerElement.addEventListener('click', () => {
        thumbnailElement.style.visibility = isThumbnailVisible ? 'visible' : 'hidden';
        console.log('Cela a été cliqué');
        isThumbnailVisible = !isThumbnailVisible;
    });
}

// //! AGRANDIR IMAGE A 100%
function activerModePleinEcran(imgMiniature, imgPleinEcran) {
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            imgPleinEcran.style.display = 'none';
        }
    });
    imgMiniature.addEventListener('click', () => {
        if (document.fullscreenEnabled) {
            imgPleinEcran.style.display = 'flex';
            imgPleinEcran.requestFullscreen();
        }
    });
}

// IMAGE ARBO
activerModePleinEcran(document.getElementById('thumbnailDiagSeq'), document.getElementById('diagSeq'));
toggleThumbnailOnClick(document.querySelector("#lesPotsPotes"), document.querySelector("#thumbnailDiagSeq"));

