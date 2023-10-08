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

// ! BOITES RESEAUX

// Function to create a new div with specified content
function createNewDiv(idImage,imageSrc, title, description) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="col-12 mx-auto">
                        <div class="ma-boite text-center">
                            <img ${idImage} src="${imageSrc}" alt="Image">
                            <h2>${title}</h2>
                            <p class="description" style="font-size: 18px;">${description}</p>
                            <a href="#">
                                <button id="btonForm" type="submit" class="btn custom-button">
                                    <img src="/images/boutons/s'inscrire_.png" alt="Image" class="normal-image">
                                    <img src="/images/boutons/s'inscrire hover.png" alt="Image au survol" class="hover-image">
                                    <img src="/images/boutons/s'inscrire active.png" alt="Image au clic" class="active-image">
                                </button>
                            </a>
                        </div>
                    </div>`;
    
    return newDiv;
}

// Function to replace the div
function replaceDiv(oldDiv, newDiv) {
    // Remplacement de la div
    oldDiv.replaceWith(newDiv);
}

// Function to return to the initial state
function returnToInitialState(newDiv, originalDiv) {
    // Remplacement de la nouvelle div par la div d'origine
    newDiv.replaceWith(originalDiv);
}

// Original Div for #Boite1
const oldDiv1 = document.querySelector('#Boite1');
// New Div for Les Biotineuses
const newDivBiotineuses = createNewDiv(
    'id="lesBiotineuses"',
    '/images/reseau/les_biotineuses.jpeg',
    'Les Biotineuses',
    'Adhérents du groupement d\'achat de Lagrasse et villages des alentours. Lieux et dates de distribution à Pradelles en Val, Lagrasse, Serviès (relatifs aux commandes.)'
);

// Original Div for #BoitePotsPotes
const oldDiv2 = document.querySelector('#BoitePotsPotes');
// New Div for Les Pots-Potes
const newDivPotsPotes = createNewDiv(
    'id="lesPotsPotes"',
    '/images/reseau/favicon.png',
    'Les POT-POTES',
    'Capendu, Douzens, Barbaira, Marseillette Les pots potes de l Alaric vous proposent une alternative à la grande distribution : écologique, économique, éthique et conviviale !'
);

// Original Div for #BoiteLoco
const oldDiv3 = document.querySelector('#BoitesLoco');
// New Div for Les Pots-Potes
const newDivLoco = createNewDiv(
    'id="LocoMinges"',
    '/images/reseau/Fichier_9logo-loco_tqqB5ku.jpg',
    'LOCO MINGES',
    'Saint-Gaudens, 31 Le Loco Minges est une épicerie coopérative où trouver des produits locaux de saison, sélectionnés par et pour les Loco Mangeurs.'
);

// Add click event listeners 
oldDiv1.addEventListener('click', () => replaceDiv(oldDiv1, newDivBiotineuses));
newDivBiotineuses.addEventListener('click', () => returnToInitialState(newDivBiotineuses, oldDiv1));

oldDiv2.addEventListener('click', () => replaceDiv(oldDiv2, newDivPotsPotes));
newDivPotsPotes.addEventListener('click', () => returnToInitialState(newDivPotsPotes, oldDiv2));

oldDiv3.addEventListener('click', () => replaceDiv(oldDiv3, newDivLoco));
newDivLoco.addEventListener('click', () => returnToInitialState(newDivLoco, oldDiv3));
