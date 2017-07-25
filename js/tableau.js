'use strict';

// Créer un tableau vide
var myArray = [];
// Créer un tableau
var myArray2 = [123, 45, "Hello World !"];

// Inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

// Remplir un tableau au fur et à mesure avec des push
myArray.push(123);
myArray.push(45);
myArray.push("Hello World !");
// Ou pour remplir avec plein de valeurs en même temps
// myArray.push(123, 45, "Hello World !");

// Inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

// Afficher le premier élément dans un tableau
console.log(myArray[0]);

// Si le tableau contient au moins un élément,
// afficher le premier élément d'un tableau
if (myArray.length > 0) {
    console.log(myArray[0]);
}

// Afficher la taille d'un tableau
console.log(myArray.length);

// Afficher le dernier élément d'un tableau
console.log(myArray[myArray.length - 1]);

// Si le tableau contient au moins un élément,
// afficher le dernier élément d'un tableau
if (myArray.length > 0) {
    console.log(myArray[myArray.length - 1]);
}

// Modifier le dernier élément
if (myArray.length > 0) {
    myArray[myArray.length - 1] = "Salut le Monde !";
}

// Supprimer le deuxième élément, la valeur 42, du tableau
myArray.splice(1, 1);
console.log(myArray);
// Voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice

// Supprimer la valeur 3.14 du tableau
myArray.splice(1, 1);
console.log(myArray);