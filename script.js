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

// IMAGE ARBORESCENCE
//! AGRANDIR IMAGE A 100%
const fullscreenArbo = document.getElementById('imgArbo');
const thumbArbo = document.getElementById('thumbnailArbo');

// Ajout d'un écouteur d'événements pour quitter le mode plein écran
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenArbo.style.display = 'none';
    }
});
// Ajout d'un écouteur d'événements pour le clic sur l'image miniature
thumbArbo.addEventListener('click', () => {
    // Activer le mode plein écran
    if (document.fullscreenEnabled) {
        fullscreenArbo.style.display = 'flex';
        fullscreenArbo.requestFullscreen();
    }
});

//! AFFICHE L'IMAGE QUAND LE MENU EST CLICK
const focusMenu = document.querySelector(".navbar-toggler");
const miniatArbo = document.querySelector("#thumbnailArbo");

let clickMenu = true;    
focusMenu.addEventListener('click',()=>{
    miniatArbo.style.visibility = clickMenu ? "visible":"hidden"; 
    clickMenu = !clickMenu; 
});


// IMAGE SOLALIM
//! AGRANDIR IMAGE A 100%
const fullscreenSolalim = document.getElementById('imgSolalim');
const thumbSolalim = document.getElementById('thumbnailSolalim');

// Ajout d'un écouteur d'événements pour quitter le mode plein écran
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenSolalim.style.display = 'none';
    }
});
// Ajout d'un écouteur d'événements pour le clic sur l'image miniature
thumbSolalim.addEventListener('click', () => {
    // Activer le mode plein écran
    if (document.fullscreenEnabled) {
        fullscreenSolalim.style.display = 'flex';
        fullscreenSolalim.requestFullscreen();
    }
});

//! AFFICHE L'IMAGE QUAND LE MENU EST CLICK
const clickSolalim = document.querySelector("#logo");
const miniatSolalim = document.querySelector("#thumbnailSolalim");

let clickSol = true;    
clickSolalim.addEventListener('click',()=>{
    miniatSolalim.style.visibility = clickSol ? "visible":"hidden"; 
    console.log (`ça clique`);
    clickSol = !clickSol; 
});

// IMAGE MOODBOARD
//! AGRANDIR IMAGE A 100%
const fullscreenMoodboard = document.getElementById('imgMoodboard');
const thumbMoodboard = document.getElementById('thumbnailMoodboard');

// Ajout d'un écouteur d'événements pour quitter le mode plein écran
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenMoodboard.style.display = 'none';
    }
});
// Ajout d'un écouteur d'événements pour le clic sur l'image miniature
thumbMoodboard.addEventListener('click', () => {
    // Activer le mode plein écran
    if (document.fullscreenEnabled) {
        fullscreenMoodboard.style.display = 'flex';
        fullscreenMoodboard.requestFullscreen();
    }
});

//! AFFICHE L'IMAGE QUAND LE MENU EST CLICK
const clickMoodboard = document.querySelector("#logo");
const miniatMoodboard = document.querySelector("#thumbnailMoodboard");

let clickMood = true;    
clickMoodboard.addEventListener('click',()=>{
    miniatMoodboard.style.visibility = clickMood ? "visible":"hidden"; 
    console.log (`ça clique`);
    clickMood = !clickMood; 
});

// IMAGE STYLE
//! AGRANDIR IMAGE A 100%
const fullscreenStyle = document.getElementById('imgStyle');
const thumbStyle = document.getElementById('thumbnailStyle');

// Ajout d'un écouteur d'événements pour quitter le mode plein écran
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenStyle.style.display = 'none';
    }
});
// Ajout d'un écouteur d'événements pour le clic sur l'image miniature
thumbStyle.addEventListener('click', () => {
    // Activer le mode plein écran
    if (document.fullscreenEnabled) {
        fullscreenStyle.style.display = 'flex';
        fullscreenStyle.requestFullscreen();
    }
});

//! AFFICHE L'IMAGE QUAND LE MENU EST CLICK
const clickStyle = document.querySelector("#logo");
const miniatStyle = document.querySelector("#thumbnailStyle");

let clickStyl = true;    
clickStyle.addEventListener('click',()=>{
    miniatStyle.style.visibility = clickStyl ? "visible":"hidden"; 
    console.log (`ça clique`);
    clickStyl = !clickStyl; 
});

// IMAGE PERSONNA
//! AGRANDIR IMAGE A 100%
const fullscreenPerso = document.getElementById('imgPerso');
const thumbPerso = document.getElementById('thumbnailPerso');

// Ajout d'un écouteur d'événements pour quitter le mode plein écran
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenPerso.style.display = 'none';
    }
});
// Ajout d'un écouteur d'événements pour le clic sur l'image miniature
thumbPerso.addEventListener('click', () => {
    // Activer le mode plein écran
    if (document.fullscreenEnabled) {
        fullscreenPerso.style.display = 'flex';
        fullscreenPerso.requestFullscreen();
    }
});

//! AFFICHE L'IMAGE QUAND LE MENU EST CLICK
const clickPerso = document.querySelector("#identifiant");
console.log(clickPerso);
const miniatPerso = document.querySelector("#thumbnailPerso");

let clickPers = true;    
clickPerso.addEventListener('click',()=>{
    miniatPerso.style.visibility = clickPers ? "visible":"hidden"; 
    console.log (`ça clique`);
    clickPers = !clickPers; 
});

// ! BOUTON SWITCH
