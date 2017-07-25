'use strict';

var myArray = [123, 42, 3.14, 100, 1, -2];

// Boucle for avec un index
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Boucle for en commençant par la fin
for (var i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
}