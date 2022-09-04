const data = require('../data/zoo_data');

const { species, employees } = data;

/* console.log(employees); */

const nameCheck = (param) => employees
  .some((ele) => ele.firstName === param.name || ele.lastName === param.name);

const idCheck = (param) => employees.some((ele) => ele.id === param.id);

const nameFind = (param) => employees
  .find((ele) => ele.firstName === param.name || ele.lastName === param.name);

const idFind = (param) => employees.find((ele) => ele.id === param.id);

const animalsResponsability = (param) => nameFind(param).responsibleFor
  .map((ele) => species.find((ele2) => ele === ele2.id));

const animalsIdResponsability = (param) => idFind(param).responsibleFor
  .map((ele) => species.find((ele2) => ele === ele2.id));
/* console.log(animalsResponsability({name: 'Sharonda'})); */

const resultNameParam = (param) => ({
  id: nameFind(param).id,
  fullName: `${nameFind(param).firstName} ${nameFind(param).lastName}`,
  species: animalsResponsability(param).map((ele) => ele.name),
  locations: animalsResponsability(param).map((ele) => ele.location),
});

const resultIdParam = (param) => ({
  id: idFind(param).id,
  fullName: `${idFind(param).firstName} ${idFind(param).lastName}`,
  species: animalsIdResponsability(param).map((ele) => ele.name),
  locations: animalsIdResponsability(param).map((ele) => ele.location),
});

const resultNoParam = () => {
  const resultado = [];
  employees.forEach((ele, index) => {
    const speciesId = species.filter((ele1) =>
      ele.responsibleFor.some((ele2) => ele1.id === ele2));
    resultado[index] = {
      id: ele.id,
      fullName: `${ele.firstName} ${ele.lastName}`,
      species: speciesId.map((animal) => animal.name),
      locations: speciesId.map((local) => local.location),
    };
  });
  return resultado;
};

/* console.log(resultNameParam({name: 'Sharonda'})); */
function getEmployeesCoverage(param) {
  if (param === undefined) {
    return resultNoParam();
  }
  if (idCheck(param) === true) {
    return resultIdParam(param);
  }
  if (nameCheck(param) === true) {
    return resultNameParam(param);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;

// feito com a ajuda da Mirella, Thiago, Boubee e Karla

/* Implemente a função getEmployeesCoverage que deverá retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.

A função vai receber um objeto como parâmetro que vai determinar o seu comportamento, sendo:

name: o nome ou sobrenome da pessoa a ser buscada;

id: o id da pessoa a ser buscada.

A função deve retornar um objeto no seguinte formato:

{
id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
fullName: "Sharonda Spry", // nome completo: firstName + lastName
species: [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
locations: [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
}
Para isso:

Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade name:

a propriedade name pode possuir como valor o primeiro ou último nome da pessoa colaboradora, portanto garanta que seu código funciona das duas maneiras.
Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade id;

Retorne um array com as informações de todas as pessoas colaboradoras caso a função não receba parâmetro;

Lance um erro caso o id seja inválido.

Exemplos de uso da função getEmployeesCoverage:

Caso o parâmetro seja um objeto com nome e id, retorne as informações da pessoa colaboradora
Caso a função não receba parâmetros, retorne um array com a informação de todas as pessoas colaboradoras
Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, lance um erro

De olho na dica eyes: Crie funções que dividam as tarefas em partes menores. Por exemplo, você pode criar uma função getSpecies encarregada somente por buscar o nome das espécies que a pessoa é responsável.

O que será testado:

A função, caso o objeto passado por parâmetro tenha a propriedade name, deverá retornar somente a pessoa correspondente;

A função poderá receber como parâmetro um objeto com a propriedade name recebendo o segundo nome como valor;

A função, caso o objeto passado por parâmetro tenha a propriedade id, deverá retornar somente a pessoa correspondente;

A função, caso não receba parâmetros, deverá retornar uma lista com a cobertura de todas as pessoas colaboradoras;

A função, caso não haja nenhuma pessoa com o name ou id especificados deverá lançar um error. */
