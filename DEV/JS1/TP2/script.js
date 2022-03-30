// TP2 : GÉNÉRATEUR DE CITATION

/*
===== CRÉER UN GÉNÉRATEUR DE CITATION =====

Cette activité utilise:
- Les variables
- Les conditions
- Les instructions (les boucles)
- Les tableaux

Niveau 1

Les citations seront construites aléatoirement en assemblant des morceaux de phrase
Chaque citation est la combinaison d'au moins 3 morceaux de phrases (ex: sujet, verbe, complément)
A défaut d'être intelligible, la phrase doit être cohérente (pas de point d'exclamation au milieu d'une phrase)
Le résultat peut être simplement affiché dans la console

Niveau 2

Le programme propose les options suivantes :
- Choisir le nombre de citations générées (de 1 à 5)
- Choisir entre 2 types de générateurs de citations (vous devrez donc avoir 2 ensembles de phrases)
- Une fois les citations générées, proposer de générer de nouvelles citations ou d'arrêter là le programme

Remarque: la fonction .reload() n'est pas autorisée
*/

const data = {
    debut: ["Il ne faut jamais", 
            "Pourquoi", 
            "On peut toujours", 
            "Il faut être prêt à", 
            "On adore", 
            "On préfère éviter de"],
    milieu: ["tuer un ours", 
            "courir après une pierre", 
            "lacher une caisse", 
            "s'endormir", 
            "marcher à pieds joints"],
    fin:   ["quand on court.", 
            "face au vent.", 
            "quand on a bu.", 
            "à l'aveugle.", 
            "par inadvertance.", 
            "quand on ne s'y attend pas.", 
            "sans le vouloir.", 
            "sans faire attention."]
}

var but = document.querySelectorAll('.cit');
var q = document.querySelectorAll('.quot');
var reset = document.querySelector('.reset');
var nb = 0;
var cit = '';
console.log(q);
for (let i = 0; i < but.length; i++) {
    but[i].addEventListener('click', function () {
        let nb = but[i].value;
        q.forEach((e) => {
            e.innerHTML = '';
        })
        for (let i = 0; i < nb; i++) {
            q[i].innerHTML += data.debut[Math.floor(Math.random() * data.debut.length)] + ' ';
            q[i].innerHTML += data.milieu[Math.floor(Math.random() * data.milieu.length)] + ' ';
            q[i].innerHTML += data.fin[Math.floor(Math.random() * data.fin.length)] + ' ';
        }

    })
}

reset.addEventListener('click', function() {
    q.forEach((e) => {
        e.innerHTML = '';
    })
})

