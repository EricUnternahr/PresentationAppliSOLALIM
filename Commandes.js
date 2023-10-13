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
// document.addEventListener("DOMContentLoaded", function() {
//     const identifiant = localStorage.getItem("identifiant");
//     const parts = identifiant.split(' ');

//     if (parts.length >= 2) {
//         const prenom = parts[0];
//         const nom = parts.slice(1).join(' ');
//         document.getElementById("welcomeMessage").innerText = ` ${prenom} ${nom}  `;

//     } else {
//         document.getElementById("welcomeMessage").innerText = ` ${identifiant}`;
//     }
// });

//! CLIC DU BOUTON DECONNECTION ET DES BOITES
// function redirigerVersConnexion() {
//     window.location.href = "connexion.html";
// }
// function redirigerVersMonCompte() {
//     window.location.href = "monCompte.html";
// }
// function redirigerVersmesCommandes() {
//     window.location.href = "LesCommandes.html";
// }
// function redirigerVersGererCommandes() {
//     window.location.href = "gererCommandes.html";
// }
// function redirigerVersReseaux() {
//     window.location.href = "reseaux.html";
// }

//! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
// function toggleThumbnailOnClick(triggerElement, thumbnailElement) {
//     let isThumbnailVisible = true;
//     triggerElement.addEventListener('click', () => {
//         thumbnailElement.style.visibility = isThumbnailVisible ? 'visible' : 'hidden';
//         console.log('Cela a été cliqué');
//         isThumbnailVisible = !isThumbnailVisible;
//     });
// }

// // //! AGRANDIR IMAGE A 100%
// function activerModePleinEcran(imgMiniature, imgPleinEcran) {
//     document.addEventListener('fullscreenchange', () => {
//         if (!document.fullscreenElement) {
//             imgPleinEcran.style.display = 'none';
//         }
//     });
//     imgMiniature.addEventListener('click', () => {
//         if (document.fullscreenEnabled) {
//             imgPleinEcran.style.display = 'flex';
//             imgPleinEcran.requestFullscreen();
//         }
//     });
// }

// // IMAGE ARBO
// // activerModePleinEcran(document.getElementById('thumbnailDiagSeq'), document.getElementById('diagSeq'));
// toggleThumbnailOnClick(document.querySelector("#lesPotsPotes"), document.querySelector("#thumbnailDiagSeq"));

//!CALCUL DES COMMANDES
function calculerTotal({quantite,total,prix}) {
    const quant = document.getElementById(quantite).value;
    const totalElement = document.getElementById(total);
    const tot = (quant * prix).toFixed(2);
    totalElement.textContent =`${tot}`;
    console.log(tot);
    if (total==='total1'){
        localStorage.setItem("TotalLocal1", tot);
        calculerSommeTotale()
        }else if(total==='total2'){
            localStorage.setItem("TotalLocal2", tot);
            calculerSommeTotale()
        }else if(total==='total3'){
            localStorage.setItem("TotalLocal3", tot);
            calculerSommeTotale()
        }else if(total==='total4'){
            localStorage.setItem("TotalLocal4", tot);
            calculerSommeTotale()
        }
}
// REMISE A ZERO DES VALEURS STOCKEES DANS LE NAVIGATEUR
function RemiseAZero() {
    localStorage.setItem("TotalLocal1", "0");
    localStorage.setItem("TotalLocal2", "0");
    localStorage.setItem("TotalLocal3", "0");
    localStorage.setItem("TotalLocal4", "0");
}

window.onload = function() {
    RemiseAZero();
};
//CALCUL DES TOTAUX
function calculerSommeTotale() {
    
    const tot1 = parseFloat(localStorage.getItem("TotalLocal1")) || 0;
    const tot2 = parseFloat(localStorage.getItem("TotalLocal2")) || 0;
    const tot3 = parseFloat(localStorage.getItem("TotalLocal3")) || 0;
    const tot4 = parseFloat(localStorage.getItem("TotalLocal4")) || 0;

    const TotalCom = tot1 + tot2 + tot3 + tot4;

    document.getElementById("TotalCommande").innerText = ` ${TotalCom.toFixed(2)} €`;
    console.log(TotalCom);
}
