// [ source: https://github.com/oc-courses/intro-javascript ]

/*
* EXERCICE 1 - les fonctions
* Compléter le code suivant:
* Celui-ci doit renvoyer un message de bienvenue
*/

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat

console.log('Exercice 1');

function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

console.log(direBonjour('Elyas', 'Benyoub'));

/*
* EXERCICE 2 - les fonctions
* Completer le code suivant
* Celui-ci doit renvoyer le carré d'un nombre
*/

console.log('Exercice 2');

function carre(x) {
    // TODO : compléter le code de la fonction
    return x * x;
}
    
    console.log(carre(0)); // Doit afficher 0
    console.log(carre(2)); // Doit afficher 4
    console.log(carre(5)); // Doit afficher 25
    
    


/* 
* EXERCICE 3 - les fonctions
* En supposant que la fonction JavaScript Math.min() n'existe pas, 
* complétez le programme pour que la fonction min() renvoie le plus petit des 
* deux nombres passés en paramètres.
*/

console.log('Exercice 3');

// Ajoutez votre code ici
function min(nb1, nb2) {
    return nb1 < nb2 ? nb1 : nb2;
}

console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9));  // 9
console.log(min(1, 1));   // 1

/* 
* EXERCICE 4 - les fonctions
* Complétez le programme pour que la fonction calculer() gère les 4 opérations 
* mathématiques de base : addition, soustraction, multiplication et division.
*/

console.log('Exercice 4');

// Ajoutez votre code ici

function calculer(n1, sign, n2) {
    switch (sign) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default :
            console.log()
    }
}

console.log(calculer(4, "+", 6));  // 10
console.log(calculer(4, "-", 6));  // -2
console.log(calculer(2, "*", 0));  // 0
console.log(calculer(12, "/", 0)); // Infinity