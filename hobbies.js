//- 2 - hobbies.js
// 1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
// 2. Esporta la funzione dal file.

const arrayStringhe = (hobbyOne, hobbyTwo, hobbyThree) => {
    return [hobbyOne, hobbyTwo, hobbyThree]
};

console.log(arrayStringhe("hobbyOne", "hobbyTwo", "hobbyThree"));
module.exports = arrayStringhe;
