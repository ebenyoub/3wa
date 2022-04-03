// [ source: https://github.com/oc-courses/intro-javascript ]

console.log('\n\nExercice 1\n\n');

/*
* EXERCICE 1: les objets
*
* Complétez le programme pour ajouter la définition de l'objet chien.
* TODO : ajoutez ici la définition de l'objet chien
*/

var chien = {
    nom: 'Medor',
    race: 'berger alllemand',
    taille: 75,
    aboyer: function () {
        return 'Wouaf !!';
    }
}

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());

// Le resultat doit être:
// Medor est un berger allemand mesuranr 75 cm
// Tiens, un chat ! Medor aboie : Wouaf ! Wouaf !



console.log('\n\nExercice 2\n\n');
/*
* EXERCICE 2: les objets 
* Complétez le programme pour ajouter à l'objet aurora défini 
* une propriété nommée xp représentant son expérience. 
* Sa valeur initiale est de 0.
* L'expérience doit apparaître dans la description du personnage.
*/

// Ajoutez votre code ici

function Person(xp, vie, force) {
    this.xp = 0,
    this.vie = 150,
    this.force = 25,
    this.decrire = function () {
        return `Aurora a ${this.vie} points de vie, ${this.force} en force et ${this.xp} points d'expérience`
    }
}

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
var aurora = new Person();

console.log(aurora.decrire());

console.log("Aurora apprend une nouvelle compétence");
aurora.xp += 15;

// "Aurora a 150 points de vie, 25 en force et 15 points d'expérience"
console.log(aurora.decrire());



console.log('\n\nExercice 3\n\n');

/* 
* EXERCICE 3: les objets
* Complétez le programme en ajoutant la définition de la classe Chien 
* afin d'obtenir le résultat d'exécution désiré.
* Les chiens mesurant plus de 50 cm aboient en faisant "Grrr ! Grrr !", 
* les autres font "Wouaf ! Wouaf !"
*/

// Ajoutez votre code ici

function Chien(nom, race, taille) {
    this.nom = nom;
    this.race = race;
    this.taille = taille;
    this.aboyer = function () {
        return taille > 50 ? "Grrr ! Grrr !" : "Wouaf ! Wouaf !";
    }
    this.decrire = function () {
        return `${this.nom} est un ${this.race} mesurant ${this.taille}`;
    }
}

var crockdur = new Chien("Crockdur", "mâtin de Naples", 75);
// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(crockdur.decrire());
// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log("Tiens, un chat ! " + crockdur.nom + " aboie : " + crockdur.aboyer() );

var milou = new Chien("Milou", "fox-terrier", 26);
// "Milou est un fox-terrier mesurant 26 cm"
console.log(milou.decrire());
// "Tiens, un chat ! Milou aboie : Wouaf ! Wouaf !"
console.log("Tiens, un chat ! " + milou.nom + " aboie : " + milou.aboyer() );



console.log('\n\nExercice 4\n\n');

/* 
* EXERCICE 4: les objets
* Complétez ce programme y ajouter la gestion de l'inventaire des personnages. 
* Voici les améliorations à intégrer :
* L'inventaire d'un personnage se compose d'un nombre de pièces d'or et d'un nombre de clés.
* Tous les personnages possèdent initialement 10 pièces d'or et une clé.
* L'inventaire doit être affiché dans la description d'un joueur.
* Lorsqu'un personnage tue un adversaire, il récupère dans son propre inventaire le nombre 
* de pièces d'or et de clés de cet adversaire.
*/

// Ajoutez votre code ici

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience, 10 pièces d'or et 1 clé(s)"
function Personnage (nom, vie, force) {
    this.nom = nom;
    this.vie = vie;
    this.force = force;
    this.xp = 0;
    this.piece = 10;
    this.clef = 1;
    this.decrire = function () {
        return `${this.nom} a ${this.vie} points de vie, ${this.force} en force et ${this.xp} points d'expérience, ${this.piece} pièces d'or et ${this.clef} clé${this.clef > 1 ? 's' : ''}`
    }
    this.attaquer = function (victime) {
        console.log(`${this.nom} attaque ${victime.nom}...`)
        victime.vie -= this.force;
        if (victime.vie <= 0) {
            victime.vie < 0 ? victime.vie = 0 : 0;
            this.piece += victime.piece;
            this.clef += victime.clef;
            victime.piece = 0;
            victime.clef = 0;
            victime.force = 0;
            console.log(`${victime.nom} est mort !`);
        } else {
            console.log(`${victime.nom} est touché(e)`);
        }

    }
}
var aurora = new Personnage("Aurora", 150, 25);

console.log(aurora.decrire());

var monstre = new Personnage("ZogZog", 20, 10);
monstre.attaquer(aurora);
aurora.attaquer(monstre); // Le monstre est tué
console.log(monstre.decrire());

// "Aurora a 140 points de vie, 25 en force et 10 points d'expérience, 20 pièces d'or et 2 clé(s)"
console.log(aurora.decrire());



console.log('\n\nExercice 5\n\n');

/*
* EXERCICE 5: les objets
*
* Ecrivez un programme qui crée un objet compte ayant les propriétés suivantes :
*
* Une propriété titulaire valant "Alex".
*
* Une propriété solde valant initialement 0.
* 
* Une méthode crediter() ajoutant le montant passé en paramètre au solde du compte.
* 
* Une méthode debiter() retirant le montant passé en paramètre du solde du compte.
* 
* Une méthode decrire() renvoyant la description du compte.
* 
* Utilisez cet objet pour afficher sa description, le créditer puis le débiter de 
* montants saisis successivement par l'utilisateur, 
* puis afficher de nouveau sa description.
*/

var tab = [];

function Compte(titulaire) {
    this.titulaire = titulaire;
    this.solde = 0;
    this.crediter = function(credit) {
        this.solde += credit;
    }
    this.debiter = function(debit) {
        this.solde -= debit;
    }
    this.decrire = () => console.log(`${this.titulaire} a un solde de ${this.solde}.`);
    tab.push(this);
}

// Voici le résultat à obtenir pour un crédit de 200 puis un débit de 150.
// Titulaire: Alex, solde : 0 euros
// Titulaire : Alex, solde : 50 euros

var alex = new Compte('Alex');
alex.decrire();
alex.crediter(200);
alex.decrire();
alex.debiter(150);
alex.decrire();

console.log('\n\nExercice 6\n\n');

/* 
* EXERCICE 6: les objets
* Reprenons le contexte des comptes en banque.
* Un compte bancaire sera modélisé par constructeur définie comme suit :
* Une propriété titulaire initialisée par le constructeur.
* Une propriété solde valant initialement 0.
* Une méthode crediter() ajoutant le montant passé en paramètre (éventuellement négatif) au solde du compte.
* Une méthode decrire() renvoyant la description du compte.
* Ecrivez un programme qui crée 3 comptes bancaires, l'un appartenant à Alex, le deuxième à CLovis et le troisième à Marco. 
* Stockez ces comptes dans un tableau.
* Ensuite, le programme crédite 1000 € et affiche la description de chacun des comptes.
*/

var clovis = new Compte('Clovis');
var marco = new Compte('Marco');

for (let cpt of tab) {
    cpt.crediter(1000);
    cpt.decrire();
}

const x = Number("salut");
console.log(x);