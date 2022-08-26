const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const [{id}] = species;
/* console.log(id); */
function getSpeciesByIds(...ids) {
  const animal = ids.map((especie) => species.filter((id) => id.id === especie));
  return animal.map(animal => animal[0]);
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
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


