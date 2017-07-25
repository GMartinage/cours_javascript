'use strict';

// Définition d'une fonction
function addition(a, b) {
    return a + b;
}

var resultat;

// Récupération du résultat de la fonction dans une variable
resultat = addition(2, 3);

console.log(resultat);

// Action qui permet d'effectuer l'addition et d'afficher le résultat
function addAction() {
    var a;
    var b;
    var result;

    // Récupérer l'input qui a name="a"
    a = document.querySelector("input[name=a]").value;
    b = document.querySelector("input[name=b]").value;

    a = parseInt(a);
    b = parseInt(b);

    result = addition(a, b);

    document.querySelector("#result").innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function(event) {
// La ligne de code si dessous est contenue dans l'accolade
// de la fonction (event)
// button#add équivaut aussi simplement à #add,
// ce n'est pas obligatoire de préciser l'élément avec
// le nom de son id ou de sa classe.
// Dans l'event, on transmet la fonction sans les paranthèses.
// Celle-ci sera exécuté si "DOMContentLoaded" est valide.
// Avec cette façon de faire, on peut placer le <script></script>
// à la fin du head plutôt qu'à la fin du body. 
    document.querySelector("button#add").addEventListener("click", addAction);
});