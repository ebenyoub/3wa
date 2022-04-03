const myName = prompt("Quel est votre prénom ?");
const myBirth = prompt("Quelle est votre date de naissance (JJ-MM-AAAA)?");
let fullDate = new Date;
let current = fullDate.getFullYear();

function getAge(date) { 
    var diff = Date.now() - date.getTime();
    var age = new Date(diff); 
    
    return Math.abs(age.getUTCFullYear() - 1970);
}


alert(myName + ', vous avez ' + getAge(myBirth) + ' ans.');