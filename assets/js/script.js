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

console.log('Il nome dell\'utente è ' + userName + ' ' + userSurname);
// template literal
console.log(`Il nome dell\'utente è ${userName} ${userSurname}`);

let myEmpty = null;

console.log(typeof userName);
console.log(typeof MYAGE);
console.log(typeof myVariable);
console.log(typeof myBoolean);
console.log(typeof myEmpty);
