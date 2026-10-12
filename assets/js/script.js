// Commento a riga singola

/* Commento
multiriga */

console.log('Hello world!');

console.log('Ciao', 3);

// Variabili
let myName;
myName = 'Pippo';
console.log('Il mio nome è ', myName);

myName = 5;
console.log('Il mio nome è ', myName);

const MYAGE = 37;
console.log('La mia età è', MYAGE);

// MYAGE = 25;
// console.log('La mia età è', MYAGE); // Il valore di una costante NON PUÒ CAMBIARE

let strangeNumber = '18';
console.log(strangeNumber);

let myBoolean = true;
console.log(myBoolean);

let myVariable;
console.log(myVariable);

let userName = 'Paolino';
let userSurname = 'Paperino';

console.log("Il nome dell'utente è " + userName + ' ' + userSurname);
// template literal
console.log(`Il nome dell\'utente è ${userName} ${userSurname}`);

let myEmpty = null;

console.log(typeof userName);
console.log(typeof MYAGE);
console.log(typeof myVariable);
console.log(typeof myBoolean);
console.log(typeof myEmpty);

let myRest = 10 % 2;
console.log(myRest);

let myRest2 = 5 % 2;
console.log(myRest2);

let num1 = 2;
let mySum = (num1 += 3); // Come se avessi scritto mySum = num1 + 3;
console.log(mySum);

mySum = num1 + 3;
console.log(mySum); // È diventato 5 + 3

document.getElementById('titolo').innerText += 'Pippo';

let anotherNum = 5;

let sumAnotherNum = anotherNum++;

console.log(sumAnotherNum);

let numberNum = 5;
let numberString = '5';

// Equality and disequality
console.log(
	`Le due variabili hanno tipo O valore uguale? ${numberNum == numberString}`,
); // true
console.log(
	`Le due variabili hanno tipo O valore diverso? ${numberNum != numberString}`,
); // false

// Strict Equality and strict disequality
console.log(
	`Le due variabili hanno tipo E valore identico? ${numberNum === numberString}`,
); // false
console.log(
	`Le due variabili hanno tipo E valore diverso? ${numberNum !== numberString}`,
); // true

// Utilizzare SEMPRE strict equality (===) e strict disequality (!==)
