// [ source: https://github.com/oc-courses/intro-javascript ]
/* 
* Exo 1: * Ecrivez un programme qui fait saisir un nom de jour à l'utilisateur,
* puis affiche le nom du jour suivant.
* S'il y a des erreurs de saisie (jour incorrect), cela doit être géré !
* A toi de voir comment.
* Essayer avec méthode "if... else" puis avec switch
*/

// code ici


document
.querySelector(".ex1")
.addEventListener('click', () => {
        const weeks = ['lundi', 'mardi', 'mercredi', 'jeudi',
                       'vendredi', 'samedi', 'dimanche', 'lundi'];
        var flag = false;
        let week_select = prompt("Entrez un jour de la semaine !").toLowerCase();
        let i = 0;

        switch (week_select) {
            case 'lundi':
                alert("Le jour suivant est : mardi");
                break;
            case 'mardi':
                alert("Le jour suivant est : mercredi");
                break;
            case 'mercredi':
                alert("Le jour suivant est : jeudi");
                break;
            case 'jeudi':
                alert("Le jour suivant est : vendredi");
                break;
            case 'vendredi':
                alert("Le jour suivant est : samedi");
                break;
            case 'samedi':
                alert("Le jour suivant est : dimanche");
                break;
            case 'dimanche':
                alert("Le jour suivant est : lundi");
                break;
            default:
                alert("Erreur : votre jour de la semaine est mal orthographié.");
                break;
        }
        // while (i < 7) {
        //     if (weeks[i] == week_select) {
        //         flag = true;
        //         break;
        //     } else {
        //         i++;
        //     }
        // }
        // if (flag == false || !week_select) {
        //     alert("Erreur : votre jour de la semaine est mal orthographié.");
        // } else {
        //     alert("Le jour suivant est : " + weeks[i + 1]);
        // }
    })


/* 
* Exo 2:
* Complétez ce programme pour afficher l'heure qu'il sera dans une seconde.
* Attention, ce programme est moins simple qu'il en a l'air : validez votre solution 
* en la testant avec les entrées suivantes. Vous devez obtenir les résultats indiqués.
    14h17m59s => 14h18m0s
    6h59m59s => 7h0m0s
    23h59m59s => 0h0m0s (minuit)
*/

var heures = 14; // Faire varier cette variable entre 0 et 23
var minutes = 17; // faire varier cette variable entre 0 et 59
var secondes = 59; // faire varier cette variable entre 0 et 59

// Ajoutez votre code ici

document
    .querySelector(".ex2")
    .addEventListener('click', () => {
        var h, m, s;
        var hrs, min, sec;
        var laDate = new Date();

        heures = Number(laDate.getHours());
        minutes = Number(laDate.getMinutes());
        secondes = Number(laDate.getSeconds());

        hrs = heures < 10 ? '0' + String(heures) : String(heures);
        min = minutes < 10 ? '0' + String(minutes) : String(minutes);
        sec = secondes < 10 ? '0' + String(secondes) : String(secondes);

        console.log(hrs + '-' + min + '-' + sec);
        if (secondes < 59) {
            secondes += 1;
        } else {
            secondes = 0;
            if (minutes < 59) {
                minutes += 1;
            } else {
                minutes = 0;
                heures += 1;
            }
        }

        h = heures < 10 ? '0' + String(heures) : String(heures);
        m = minutes < 10 ? '0' + String(minutes) : String(minutes);
        s = secondes < 10 ? '0' + String(secondes) : String(secondes);
        console.log(h + '-' + m + '-' + s);

        alert(hrs + ':' + min + ':' + sec + ' ➞ ' + h + ':' + m + ':' + s);
    })



/*
* Exo 3 
*
* Ecrivez un programme qui fait saisir la note d'examen d'un étudiant. 
* => utiliser: var moyenne = Number(prompt("Entrez une moyenne de baccalauréat :"));
* puis affiche si ce candidat est recalé (moyenne inférieure à 10), 
* reçu (moyenne entre 10 et 12) 
* ou reçu avec mention (moyenne supérieure ou égale à 12).
*/

document
    .querySelector(".ex3")
    .addEventListener('click', () => {
        var moyenne = Number(prompt("Entrez une moyenne de baccalauréat :"));
        if (moyenne < 10) {
            alert('Candidat recalé.');
        } else if (moyenne >= 10 && moyenne < 12) {
            alert('Candidat recu.');
        } else {
            alert('Reçu avec mention.');
        }
    })


    // Calculaprompt

document
    .querySelector(".ex4")
    .addEventListener('click', () => {
        let a = Number(window.prompt("Entrez un premier nombre : "));
        if (isNaN(a)) {
            console.error('Error : not a number.');
        } else {
            let sign = window.prompt("Entrez un opérateur arithmétique : ");
            if (sign != '-' && sign != '+' && sign != '/' && sign != '*') {
                console.error('Erreur : opérateur incorrect.');
            } else {
                let b = Number(window.prompt("Entrez un deuxiême nombre : "));
                if (isNaN(b)) {
                    console.error('Error : not a number.');
                } else {
                    let calc = String(a) + ' ' + sign + ' ' + String(b);
                    console.log('Calcul : ' + calc);
                    switch (sign) {
                        case '+':
                            console.log('Resultat : ' + (a + b));
                            break;
                        case '-':
                            console.log('Resultat : ' + (a - b));
                            break;
                        case '/':
                            console.log('Resultat : ' + (a / b));
                            break;
                        case '*':
                            console.log('Resultat : ' + (a * b));
                            break;
                    }
                }
            }
        }
    })
