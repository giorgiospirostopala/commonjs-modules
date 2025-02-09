/*
//- 1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.
*/

function newObjFirstLastName(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}

/// OPPURE
//const newObjFirstLastName = (firstName, lastName) => {return {firstName, lastName}};

console.log(newObjFirstLastName("Giorgio Spiros", "Topala"));
module.exports = newObjFirstLastName;