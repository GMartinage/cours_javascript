'use strict';

var stock = 50;

// Afficher dans la console des phrases
// en fonction de la quantité de stock :
// - "Stock indisponible" si le stock est à 0
// - "Stock en faible quantité" si le stock est plus petit que 50
// - "Stock disponible" si le stock est plus grand ou égal à 50

if (stock == 0) {
    console.log("Stock indisponible");
} else if (stock < 50) {
    console.log("Stock en faible quantité");
} else {
    console.log("Stock disponible");
}


var hasValidAddress = false;
var hasValidatedAgreement = true;

// Affiche dans la console :
// - "Commande en cours" si hasValidAddress et hasValidatedAgreement sont vrais
// - "Vous devez renseigner une adresse" si hasValidAddress est faux
// - "Vous devez cocher la case Conditions de Vente" si hasValidatedAgreement est faux

if (hasValidAddress == true && hasValidatedAgreement == true) {
    console.log("Commande en cours");
} else if (hasValidAddress == false && hasValidatedAgreement == true) {
    console.log("Vous devez renseigner une adresse");
} else if (hasValidAddress == true && hasValidatedAgreement == false) {
    console.log("Vous devez cocher la case Conditions de Vente");
} else {
    console.log("Veuillez renseigner les champs");
}

// Autre façon plus simple de l'écrire :

if (hasValidAddress && hasValidatedAgreement) {
    console.log("Commande en cours");
} else if (!hasValidAddress && hasValidatedAgreement) {
    console.log("Vous devez renseigner une adresse");
} else if (hasValidAddress && !hasValidatedAgreement) {
    console.log("Vous devez cocher la case Conditions de Vente");
} else if (!hasValidAddress && !hasValidatedAgreement) {
    console.log("Veuillez renseigner les champs");
}


// TP
// Élément d'interface :
// - Cases à cocher :
//      - gaz éteint
//      - électricité éteinte
//      - fenêtres fermées
//      - j'ai pris la clé
// - Bouton de validation avec le label "puis-je partir en vacances ?"
// - Zone d'affichage de message
// Éléments de code :
// - Une fonction qui est appelée par le bouton de validation
// - Dans cette fonction, il faudra développer les sections suivantes :
//      - Récupération des valeurs
//      - Analyse des valeurs
//      - Affichage du message
// Message :
// - "Vous pouvez y aller" si toutes les cases sont cochées
// - "Attendez, il reste des choses à faire" si au moins une case n'est pas cochée
// ...