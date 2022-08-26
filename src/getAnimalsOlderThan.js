const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');
const { residents } = species;
console.log(residents);
function getAnimalsOlderThan(animal, age) {
}

//Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.
/* Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:

Os animais devem ter essa idade ou serem mais velhos.
Retorne um valor booleano.

O que será testado:

A função, ao receber uma espécie e uma idade como parâmetros, deve testar se todos os animais desta espécie possuem a idade mínima especificada. */
module.exports = getAnimalsOlderThan;
