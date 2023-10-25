//! CLIC DU BOUTON DECONNECTION ET DES BOITES

function redirigerVerscommandesEnCours() {
    window.location.href = "CommandesEnCours.html";
}
function redirigerVersmesCommandesEnCours() {
    window.location.href = "mesCommandesEnCours.html";
}
function redirigerVersCommandesPassees() {
    window.location.href = "CommandesPassees.html";
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

//! IMAGE ARBO
activerModePleinEcran(document.getElementById('thumbnailDiagSeq'), document.getElementById('diagSeq'));
toggleThumbnailOnClick(document.querySelector("#lesPotsPotes"), document.querySelector("#thumbnailDiagSeq"));

// !MISE A JOUR DE LA BOITE MES COMMANDES EN COURS
document.addEventListener("DOMContentLoaded", function() {
    const TotCommande = localStorage.getItem("TotalCommande")
    if(TotCommande!=0){
        document.getElementById("commandeAresVerts").innerText = `Ares Verts pour une commande de ${TotCommande} € `;
    };
});