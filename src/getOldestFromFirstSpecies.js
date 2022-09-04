const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getOldestFromFirstSpecies(id) {
  const getSpeciesId = employees.find((employee) => employee.id === id).responsibleFor;
  const oldestAnimal = species.find((element) => getSpeciesId
    .find((element2) => element.id === element2)).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(oldestAnimal);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;

/* Implemente a função getOldestFromFirstSpecies que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.

A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:

A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;

A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;

A função deverá encontrar o animal mais velho daquela espécie;

A função deverá retornar um array com as informações do animal mais velho daquela espécie.

O que será testado:

Passado o id de uma pessoa colaboradora, a função getOldestFromFirstSpecies deverá encontrar a primeira espécie de animal gerenciado por essa pessoa, e retornar um array com nome, sexo e idade do animal mais velho dessa espécie. */
