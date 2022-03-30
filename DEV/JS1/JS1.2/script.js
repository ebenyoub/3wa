// [ source: https://github.com/oc-courses/intro-javascript ]

/*
* EXERCICE 1 - Les instructions
* Ecrivez un programme qui fait saisir un nombre à l'utilisateur 
* puis affiche la table de multiplication de ce nombre.
* en utilisant while
* en utilisant for
* TODO : MESSAGE: Choisissez la table entre 2 et 10
* TODO : affichage de la table de multiplication ds la console
*/

document
.querySelector(".ex1")
.addEventListener('click', () => {
    let nb = window.prompt("Choisissez une table de multiplication  entre 2 et 10.");
    if (isNaN(nb) || nb < 2 || nb > 10) {
        alert("Entrez un nombre entre 2 et 10 !");
    } else {
        let i = 0;
        while (i < 11) {
            console.log(nb + ' * ' + i + ' = ' + (i * nb));
            i++;
        }
    }
})

// Code ici

/*
* EXERCICE 2 - Les instructions
* Ecrivez un programme qui construit progressivement un triangle de 7 lignes:

# 
## 
### 
#### 
##### 
###### 
#######

*/

document
.querySelector(".ex2")
.addEventListener('click', () => {
    let diez = '';
    for (let a = 0; a < 7; a++) {
        diez += '#';
        console.log(diez);
    }
})


// Code ici

/* 
* EXERCICE 3: Complétez ce programme pour qu'il fasse 10 tours de manège en affichant le numéro du tour à chaque tour :

    Le manège démarre
    C'est le tour numéro 1
    C'est le tour numéro 2
    ...
    C'est le tour numéro 10
    Le manège s'arrête
*/

document
.querySelector(".ex3")
.addEventListener('click', () => {
    console.log("Le manêge commence");
    for (let i = 1; i < 11; i++) {
        console.log("C'est le tour numéro " + i);
    }
    console.log("Le manêge s'arrête");
})

/* 
* EXERCICE 4:
* Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
    - Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3.
    - Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3.
    - Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
    - Vous pouvez utiliser l'opérateur modulo % qui renvoie le reste de la division d'un entier par un autre.

console.log(10 % 2); // 0
console.log(10 % 3); // 1
console.log(11 % 3); // 1
Cet exercice constitue un test d'embauche classique qui élimine un nombre significatif de candidats. 
Accrochez-vous pour le réussir !
*/

document
.querySelector(".ex4")
.addEventListener('click', () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
})
