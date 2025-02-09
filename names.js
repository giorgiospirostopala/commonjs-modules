/*
//- 1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.
*/

function newObjNomeCognome(firstName, lastName) {
    return {
        firstName,
        lastName,
    };
}

/// OPPURE
//const newObjNomeCognome = (firstName, lastName) => {return {firstName, lastName}};

console.log(newObjNomeCognome("Giorgio Spiros", "Topala"));

