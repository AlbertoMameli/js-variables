// 1. Dichiarazione di variabili
const name = 'Alberto'
console.log(name)

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
const number = 15
const text ="Il mio nome è Alberto"
const bool = true;
// un numero, una stringa e un valore booleano.
console.log (number, text, bool)
// Stampa tutti i valori nella console.

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const fullName =`${firstName} ${lastName}` ;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = alphabet;
console.log(numberOfLettersInAlphabet.length); // Output: 26