// Activation du mode strict
'use strict';

// Déclaration de variables
var number = 42;
var number2 = 3.14;
var myBoolean = true;
var myBoolean2 = false;
var text = "Hello World !";
var myArray = [number, number2, myBoolean, myBoolean2, text];
// Deuxième façon d'écrire un tableau, plus longue mais plus orientée objet
var myArray2 = new Array(number, number2, myBoolean, myBoolean2, text);

// Déclaration des divs
var varcontent = document.getElementById('varcontent');
var boolean = document.getElementById('boolean');
var boolean2 = document.getElementById('boolean2');
var myarray = document.getElementById('myarray');
var myarray2 = document.getElementById('myarray2');
var myarray3 = document.getElementById('myarray3');
var myarray4 = document.getElementById('myarray4');
var myarray5 = document.getElementById('myarray5');

//Ajout de code HTML dans la balise body
varcontent.innerHTML = "<p>" + number + "</p>" + "<p>" + number2 + "</p>" + "<p>" + text + "</p>";

// Structure de contrôle
if (myBoolean == true) {
    boolean.innerHTML = "Boolean est égal à true.";
}

if (myBoolean2 != true) {
    boolean2.innerHTML = "Boolean2 n'est pas égal à true.";
}

// Boucler sur myArray et afficher toutes les valeurs
// qui sont différentes de true ou false
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] != true && myArray[i] != false) {
        myarray.innerHTML += "<p id='myarray_value" + i + "'>" + myArray[i] + "</p>";
    }
}

// Avec for in et l'utilisation de != d'un type booléen
for (var n in myArray2) {
    // Ce console.log va afficher de quel type est telle variable
    // pas besoin de préciser avant
    if (typeof myArray2[n] != 'boolean') {
        myarray2.innerHTML += "<p>" + myArray2[n] + "</p>";
    }
}

// Avec for of

for (var valeur of myArray2) {
    if (typeof valeur != 'boolean') {
        myarray3.innerHTML += "<p>" + valeur + "</p>";
    }
}

// Afficher les nombres au dessus de 50, entre 0 et 50
myArray2.push(123, 110, 66);

for (var n in myArray2) {
    if (typeof myArray2[n] == 'number' && myArray2[n] > 49) {
        myarray4.innerHTML += "<p>" + myArray2[n] + "</p>";
    }
    else if (typeof myArray2[n] == 'number' &&  myArray2[n] < 51 && myArray2[n] >= 0) {
        myarray5.innerHTML += "<p>" + myArray2[n] + "</p>";
    }
}

// Afficher les nombres à virgule
for (var value of myArray2) {
    // Si la valeur n'est pas un nombre entier...
    // If the value is not integer...
    if (typeof value == 'number' && !Number.isInteger(value)) {
        console.log(value);
    }
}

// Afficher les nombres à virgule, méthode alternative
for (var value of myArray2) {
    if (typeof value == 'number' &&  value - Math.round(value) != 0) {
        console.log(value);
    }
}