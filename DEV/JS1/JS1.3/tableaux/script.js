// [ source: https://github.com/oc-courses/intro-javascript ]


/*
* EXERCICE 1 - les tableaux
* Complétez le programme pour calculer puis afficher la somme des valeurs du tableau nombres.
*/

console.log("Exercice 1\n\n");

var nombres = [11, 3, 7, 2, 9, 10];
var sum = 0;
nombres.forEach((e) => {
    sum += e;
});
console.log(sum);

/*
* EXERCICE 2 - les tableaux
* Complétez le programme pour qu'il calcule et affiche ensuite la plus grande valeur présente dans le tableau.
*/

console.log("\nExercice 2\n\n");

var valeurs = [3, 11, 7, 2, 9, 10];
var max = 0;
valeurs.forEach((e) => {
    e > max ? max = e : 0;
});
console.log(max);

/*
* EXERCICE 3 - les tableaux
* Ecrivez un programme qui crée un tableau contenant les noms des trois mousquetaires, Athos, Porthos et Aramis ;
* 1- Affiche le nom de chaque mousquetaire à l'aide d'une boucle for ;
* 2- Ajoute au tableau le mousquetaire d'Artagnan ;
* 3- Affiche de nouveau le nom de chaque mousquetaire, cette fois à l'aide de la méthode forEach().
*/

console.log("\nExercice 3\n\n");

var tab = ['Arthos', 'Porthos', 'Aramis'];
console.log('\n-> boucle 1\n')
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
}
tab.push("d'Artagnan");
console.log('\n-> boucle 2\n');
tab.forEach((e) => {
    console.log(e);
});

/*
* EXERCICE 4 - les tableaux
* Ecrivez un programme qui fait saisir à l'utilisateur des mots jusqu'à ce qu'il saisisse "stop". 
* Le programme affiche alors la liste des mots saisis.
*/

console.log("\nExercice 4\n\n");

// code 

var tab = [];
var word = "";

while (word !== 'stop') {
    word = window.prompt("Saisissez un mot : ");
    tab.push(word);
}
tab.pop(tab); // pour supprimer stop
console.log(tab);

/* ====================== EXERCICES ==========================
*
* Utiliser splice() pour supprimer le mot "Fraise" du tableau
*
*/

console.log("\nExercice 5\n\n");

var monTableau = ["Melon", "Pastèque", "Fraise", "Banane", "Orange"];
monTableau.splice(2, 1);
console.log(monTableau);
