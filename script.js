//! VOIR LE MOT DE PASSE EN CLAIR
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.querySelector('i').classList.toggle('bi-eye');
});

// //! AFFICHE L'IMAGE QUAND L ELEMENT EST CLICK
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
toggleThumbnailOnClick(document.querySelector("#hambMenu"), document.querySelector("#thumbnailArbo"));

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
toggleThumbnailOnClick(document.querySelector("#identifiantLabel"), document.querySelector("#thumbnailPerso"));

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

// ! RECUPERER L IDENTIFIANT
function saveIdentifiant() {
    localStorage.setItem("identifiant", document.getElementById("identifiant").value);
    window.location.href = "monCompte.html";
    console.log("ça clique")
    console.log(localStorage.getItem("identifiant"));
}




