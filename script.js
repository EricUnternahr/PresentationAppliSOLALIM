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

// IMAGE SOLALIM
activerModePleinEcran(document.getElementById('thumbnailSolalim'), document.getElementById('imgSolalim'));

// IMAGE MOODBOARD
activerModePleinEcran(document.getElementById('thumbnailMoodboard'), document.getElementById('imgMoodboard'));

// IMAGE STYLE
activerModePleinEcran(document.getElementById('thumbnailStyle'), document.getElementById('imgStyle'));

// IMAGE PERSONNAS
activerModePleinEcran(document.getElementById('thumbnailPerso'), document.getElementById('imgPerso'));

//! AFFICHE L'IMAGE QUAND LE MENU EST CLICK
const focusMenu = document.querySelector(".navbar-toggler");
const miniatArbo = document.querySelector("#thumbnailArbo");

let clickMenu = true;    
focusMenu.addEventListener('click',()=>{
    miniatArbo.style.visibility = clickMenu ? "visible":"hidden"; 
    clickMenu = !clickMenu; 
});

//! AFFICHE L'IMAGE QUAND LE LOGO EST CLICK
const clickSolalim = document.querySelector("#logo");
const miniatSolalim = document.querySelector("#thumbnailSolalim");

let clickSol = true;    
clickSolalim.addEventListener('click',()=>{
    miniatSolalim.style.visibility = clickSol ? "visible":"hidden"; 
    console.log (`ça clique`);
    clickSol = !clickSol; 
});


//! AFFICHE L'IMAGE QUAND LE LOGO EST CLICK
const clickMoodboard = document.querySelector("#logo");
const miniatMoodboard = document.querySelector("#thumbnailMoodboard");

let clickMood = true;    
clickMoodboard.addEventListener('click',()=>{
    miniatMoodboard.style.visibility = clickMood ? "visible":"hidden"; 
    console.log (`ça clique`);
    clickMood = !clickMood; 
});



//! AFFICHE L'IMAGE QUAND LE LOGO EST CLICK
const clickStyle = document.querySelector("#logo");
const miniatStyle = document.querySelector("#thumbnailStyle");

let clickStyl = true;    
clickStyle.addEventListener('click',()=>{
    miniatStyle.style.visibility = clickStyl ? "visible":"hidden"; 
    console.log (`ça clique`);
    clickStyl = !clickStyl; 
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
const switchElement = document.getElementById('switch');

const body = document.body;

//on ecoute le bouton
switchElement.addEventListener('change', () => {
  // boucle sur l'eta du switch
  if (switchElement.checked) {
    // Si ça switch on passe en Mode sombre 
    body.classList.remove('body-light');
    body.classList.add('body-dark');
  } else {
    //  sinon Mode clair 
    body.classList.remove('body-dark');
    body.classList.add('body-light');
  }
});