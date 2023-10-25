//! CLIC DU BOUTON DECONNECTION ET DES BOITES
function redirigerVersLesCommandes() {
    alert("Commande prise en compte");
setTimeout(function() {
    window.location.href = "LesCommandes.html";
}, 1000);
}

//!CALCUL DES COMMANDES
localStorage.setItem("Total1", "0");
localStorage.setItem("quantité1", "0");
localStorage.setItem("Total2", "0");
localStorage.setItem("quantité2", "0");
localStorage.setItem("Total3", "0");
localStorage.setItem("quantité3", "0");
localStorage.setItem("Total4", "0");
localStorage.setItem("quantité4", "0");
localStorage.setItem("TotalCommande", "0");

let tot1 = 0;
let tot2 = 0;
let tot3 = 0;
let tot4 = 0;

function calculerTotal({ quantite, total, prix }) {
    const quant = document.getElementById(quantite).value;
    const totalElement = document.getElementById(total);
    const tot = (quant * prix).toFixed(2);
    totalElement.textContent = `${tot}`;
    if (total === 'total1') {
        tot1 = parseFloat(tot);
        localStorage.setItem("Total1", tot);
        localStorage.setItem("quantité1",quant);
    } else if (total === 'total2') {
        tot2 = parseFloat(tot);
        localStorage.setItem("Total2", tot);
        localStorage.setItem("quantité2",quant);
    } else if (total === 'total3') {
        tot3 = parseFloat(tot);
        localStorage.setItem("Total3", tot);
        localStorage.setItem("quantité3",quant);
    } else if (total === 'total4') {
        tot4 = parseFloat(tot);
        localStorage.setItem("Total4", tot);
        localStorage.setItem("quantité4",quant);
    }
    const TotalCom = tot1 + tot2 + tot3 + tot4;
    document.getElementById("TotalCommande").innerText = ` ${TotalCom.toFixed(2)} €`;
    localStorage.setItem("TotalCommande", TotalCom.toFixed(2));

    
    }

