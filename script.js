//!Permet de derouler le menu au passage de la souris
document.addEventListener("DOMContentLoaded", function () {
    const hoverMenu = document.querySelector(".hover-menu");
    const menuCollapse = hoverMenu.querySelector(".collapse");
    
    hoverMenu.addEventListener("mouseenter", function () {
        menuCollapse.classList.add("show");
    });
    
    hoverMenu.addEventListener("mouseleave", function () {
        menuCollapse.classList.remove("show");
    });
});

//! VOIR LE MOT DE PASSE EN CLAIR
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.querySelector('i').classList.toggle('bi-eye');
});

// //! AFFICHE L'IMAGE QUAND LE MENU EST CLICK
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
activerModePleinEcran(document.getElementById('thumbnailArbo'), document.getElementById('imgArbo'));
toggleThumbnailOnClick(document.querySelector(".navbar-toggler"), document.querySelector("#thumbnailArbo"));

// IMAGE SOLALIM
activerModePleinEcran(document.getElementById('thumbnailSolalim'), document.getElementById('imgSolalim'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailSolalim"));

// IMAGE MOODBOARD
activerModePleinEcran(document.getElementById('thumbnailMoodboard'), document.getElementById('imgMoodboard'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailMoodboard"));

// IMAGE STYLE
activerModePleinEcran(document.getElementById('thumbnailStyle'), document.getElementById('imgStyle'));
toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailStyle"));

// IMAGE PERSONNAS
activerModePleinEcran(document.getElementById('thumbnailPerso'), document.getElementById('imgPerso'));
toggleThumbnailOnClick(document.querySelector("#identifiant"), document.querySelector("#thumbnailPerso"));

// ! BOUTON SWITCH
const switchElement = document.getElementById('switch');

//on ecoute le bouton
switchElement.addEventListener('change', () => {
  // boucle sur l'etat du switch
    if (switchElement.checked) {
    // Si ça switch on passe en Mode sombre 
        document.body.classList.remove('body-light');
        document.body.classList.add('body-dark');
    } else {
    //  sinon Mode clair 
        document.body.classList.remove('body-dark');
        document.body.classList.add('body-light');
    }
});

