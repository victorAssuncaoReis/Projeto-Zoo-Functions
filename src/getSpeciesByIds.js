const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

/* console.log(id); */
function getSpeciesByIds(...ids) {
  const animalFunc = ids.map((especie) => species.filter((id) => id.id === especie));
  return animalFunc.map((animal) => animal[0]);
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;

/* Faça com que a função getSpeciesByIds possa receber vários parâmetros;

Retorne um array vazio se a função não receber um id;

Retorne as seguintes informações do arquivo data:

Se a função receber apenas um id, retorne a espécie do animal referente a este id;

Se a função receber vários ids, retorne todas as espécies referente a esses ids.

O que será testado:

A função getSpeciesByIds, caso não receba nenhum parâmetro, deve retornar um array vazio;

A função getSpeciesByIds, caso receba como parâmetro um único ID, deve retornar um array com a espécie referente a esse ID;

A função getSpeciesByIds, caso receba mais de um ID, deve retornar um array com as espécies referentes aos IDs. */
