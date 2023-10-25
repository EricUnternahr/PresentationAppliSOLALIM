//! VOIR LE MOT DE PASSE EN CLAIR
const toggleOldPassword = document.querySelector('#toggleOldPassword');
const toggleNewPassword = document.querySelector('#toggleNewPassword');
const toggleRepeatPassword = document.querySelector('#toggleRepeatPassword');

const oldPassword = document.querySelector('#oldPassword');
const newPassword = document.querySelector('#newPassword');
const repeatPassword = document.querySelector('#repeatPassword');

toggleOldPassword.addEventListener('click', () => {
    const type = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    oldPassword.setAttribute('type', type);
    toggleOldPassword.querySelector('i').classList.toggle('bi-eye');
});

toggleNewPassword.addEventListener('click', () => {
    const type = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    newPassword.setAttribute('type', type);
    toggleNewPassword.querySelector('i').classList.toggle('bi-eye');
});

toggleRepeatPassword.addEventListener('click', () => {
    const type = repeatPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    repeatPassword.setAttribute('type', type);
    toggleRepeatPassword.querySelector('i').classList.toggle('bi-eye');
});

//!MESSAGE ERROR MOT DE PASSE

function replaceDiv(oldPassword, newPassword, repeatPassword) {
    const oldDiv = document.getElementById("oldDiv");
    const newDiv = document.createElement("div");
    const oldPasswordValue=document.getElementById("oldPassword").value;
    const newPasswordValue=document.getElementById("newPassword").value;
    const repeatPasswordValue=document.getElementById("repeatPassword").value;
    newDiv.id = "newDiv";

    if(oldPasswordValue==="" || newPasswordValue==="" || repeatPasswordValue===""){
        newDiv.innerHTML = "<p>Certains champs sont vides. Veuillez remplir tous les champs.</p>";
        oldDiv.parentNode.replaceChild(newDiv, oldDiv);
        setTimeout(function() {
            newDiv.parentNode.replaceChild(oldDiv,newDiv);
        }, 2000);
        } else if (newPasswordValue!=repeatPasswordValue){
            newDiv.innerHTML = "<p>Les mots de passe ne correspondent pas. Veuillez réessayer.</p>";
            oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            setTimeout(function() {
                newDiv.parentNode.replaceChild(oldDiv,newDiv);
            }, 2000);
        } else if(oldPasswordValue==newPasswordValue){
            newDiv.innerHTML = "<p>Le nouveau mot de passe doit être différent de l'ancien. Veuillez choisir un nouveau mot de passe.</p>";
            oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            setTimeout(function() {
                newDiv.parentNode.replaceChild(oldDiv,newDiv);
            }, 2000);
        }
        else{
            newDiv.innerHTML = "<p>Le nouveau mot de passe est enregistré.</p>";
            oldDiv.parentNode.replaceChild(newDiv, oldDiv);
            setTimeout(function() {
                window.location.href = "accueil.html";
            }, 2000);
            

        }
    
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

//! AGRANDIR IMAGE A 100%
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
// activerModePleinEcran(document.getElementById('thumbnailArbo'), document.getElementById('imgArbo'));
// toggleThumbnailOnClick(document.querySelector("#hambMenu"), document.querySelector("#thumbnailArbo"));

// // IMAGE SOLALIM
// activerModePleinEcran(document.getElementById('thumbnailSolalim'), document.getElementById('imgSolalim'));
// toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailSolalim"));

// // IMAGE MOODBOARD
// activerModePleinEcran(document.getElementById('thumbnailMoodboard'), document.getElementById('imgMoodboard'));
// toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailMoodboard"));

// // IMAGE STYLE
// activerModePleinEcran(document.getElementById('thumbnailStyle'), document.getElementById('imgStyle'));
// toggleThumbnailOnClick(document.querySelector("#logo"), document.querySelector("#thumbnailStyle"));

// // IMAGE PERSONNAS
// activerModePleinEcran(document.getElementById('thumbnailPerso'), document.getElementById('imgPerso'));
// toggleThumbnailOnClick(document.querySelector("#identifiantLabel"), document.querySelector("#thumbnailPerso"));

