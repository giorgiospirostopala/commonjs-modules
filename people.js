//- 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const newObjFirstLastName = require("./names");
const newArrayStringhe = require("./hobbies");

// test con altri parametri
console.log("Test:");
console.log(newObjFirstLastName("Ajeje", "Brazorf"));
console.log(newArrayStringhe("sport", "musica", "libri"));

function newObjFullNameHobbies() {
    let fullName = newObjFirstLastName("Inserisci nome", "Inserisci cognome");
    let hobbies = newArrayStringhe("Inserisci hobby 1", "hobby 2", "hobby 3");

    return {
        fullName,
        hobbies
    };
}

console.log("Il risultato è:", newObjFullNameHobbies(), );


/// Domanda: 
//  Se la funzione non deve avere parametri, per "riutilizzarla" bisogna mettere mano ogni volta sui valori? 

//  Avrebbe avuto senso fare in questo modo, per poterla riutilizzare direttamente dal console.log()?
function provaConParametri(nome, cognome, hobby1, hobby2, hobby3) {
    let fullName = newObjFirstLastName(nome, cognome);
    let hobbies = newArrayStringhe(hobby1, hobby2, hobby3);

    return {
        fullName,
        hobbies
    };
}

console.log(provaConParametri("Nome", "Cogn", "h1", "h2", "h3"));