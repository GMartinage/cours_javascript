'use strict';

var users = [
  {
    id: 243,
    name: "user 2",
    scores: [76, 64, 10, 67, 64]
  },
  {
    id: 123,
    name: "user 1",
    scores: [42, 100, 54, 65, 32]
  },
  {
    id: 768,
    name: "user 3",
    scores: [93, 2, 56, 78, 100]
  }
];

// À partir de ces données :
// - Afficher un tableau html contenant le nom des
//      utilisateurs et leurs scores
// - Afficher un tableau html contenant le nom des
//      utilisateurs et leurs scores moyen
// - Afficher un tableau html contenant les cinqs
//      meilleurs scores et le nom de l'utilisateur, triés par
//      ordre décroissant, puis par nom de user
// Indices :
// - Vous pouvez parcourir le tableau de données avec
//      une boucle for
// - Pour lire le nom: user.name
// - Pour lire tableau de scores: user.scores

var usersScores = document.getElementById('users_scores');
var usersScoresMoyen = document.getElementById('users_scores_moyen');
var usersBestScores = document.getElementById('users_best_scores');
var top5scores = [];



for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
    usersScores.innerHTML += "<td>" + users[i].name + "</td>" +
    "<td>" + "Scores : " + users[i].scores + "</td>";

    var scoresSum = 0;
    var scoresMoyen;

    for (var j = 0; j < users[i].scores.length; j++) {
        scoresSum += users[i].scores[j];
    }

    console.log(scoresSum);

    scoresMoyen = scoresSum / users[i].scores.length;

    console.log(scoresMoyen);

    usersScoresMoyen.innerHTML += "<td>" + users[i].name + "</td>" +
    "<td>" + "Total des scores : " + scoresSum + "</td>" +
    "<td>" + "Moyenne des scores : " + scoresMoyen + "</td>";

    for (var j = 0; j < users[i].scores.length; j++) {
        // Création d'une classe d'objet user d'après le tableau users
        var user = {
            name: users[i].name,
            score: users[i].scores[j]
        };

        // Ajout de l'objet user au tableau vide préalablement définit top5scores
        top5scores.push(user);
        console.log(user);
    }

}

function compareNombres(a, b) {
    if (a.score == b.score) {
        return a.name > b.name;
    } else {
        return b.score - a.score;
    }
}

// Tri des nombres de façon dans l'ordre croissant
top5scores.sort(compareNombres);

// Retirer tous les éléments après le 5ème élément
top5scores.splice(5);

for (var j = 0; j < top5scores.length; j++) {

    console.log(top5scores[j]);
    usersBestScores.innerHTML += "<td>" + top5scores[j].name + "</td>" +
    "<td>" + top5scores[j].score + "</td>";

}