//! VOIR LE MOT DE PASSE EN CLAIR
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglePassword.querySelector('i').classList.toggle('bi-eye');
});

//!MESSAGE DE CONFIRMATION
function replaceDiv() {
    const oldDiv = document.getElementById("oldDiv");
    const newDiv = document.createElement("div");
    const passwordValue=document.getElementById("password").value;
    newDiv.id = "newDiv";
    newDiv.className = " text-center mx-auto"

    if(passwordValue===""){
        newDiv.innerHTML = `<div ><div class=" mb-1"><img src="/images/triangle.png" alt="Triangle d'avertissement"></div>
        <h5>Le mot de passe est necessaire!</h5></div>`;
        oldDiv.parentNode.replaceChild(newDiv, oldDiv);
        setTimeout(function() {
            newDiv.parentNode.replaceChild(oldDiv,newDiv);
        }, 3000);
        }
        else{
    newDiv.innerHTML = `<div ><div class=" mb-1"><img src="/images/triangle.png" alt="Triangle d'avertissement"></div>
    <h5>La desinscription est effectuée!</h5></div>`;
    oldDiv.parentNode.replaceChild(newDiv, oldDiv);
    setTimeout(function() {
        window.location.href = "connexion.html";
        }, 3000);
    }
}
    





