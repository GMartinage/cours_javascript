'use strict';

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

var goToHolidays = function() {

    // var gas = document.getElementById('gas').checked;
    // var electricity = document.getElementById('electricity').checked;
    // var windows = document.getElementById('windows').checked;
    // var key = document.getElementById('key').checked;
    // On peut écrire id par id ou directement avec le tag name :
    var inputs = document.getElementsByTagName('input');
    var message = document.getElementById('message');
    // console.log(inputs.length);

    // On peut également récupérer les éléments tel qu'on le ferait
    // en CSS, avec le dièses, les points ou rien du tout, et de
    // manière complexe en précisant plusieurs noms indiquant
    // le chemin d'accès vers l'élément du type qu'on veut :
    // var inputs = querySelectorAll("div label input")
    
    for (var input of inputs) {
        // console.log(input.checked);
        if (!input.checked) {
            message.innerHTML = "Attendez, il reste des choses à faire !";
            message.style.color = 'red';
            // Permet d'arrêter la boucle une fois que l'on a
            // trouvé ce qu'on voulait
            // Ici, la console.log s'affichera une fois et non
            // plusieurs fois.
            break;
            // Mettre le else if et le else juste après l'accolade de fin.
        } else if (input.checked) {
            message.innerHTML = "Vous pouvez y aller !";
            message.style.color = 'green';
        }
    }

}