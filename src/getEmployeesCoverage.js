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
  throw new Error('Informa????es inv??lidas');
}

module.exports = getEmployeesCoverage;

// feito com a ajuda da Mirella, Thiago, Boubee e Karla

/* Implemente a fun????o getEmployeesCoverage que dever?? retornar as informa????es sobre a pessoa colaboradora e por quais esp??cies ela ?? respons??vel.

A fun????o vai receber um objeto como par??metro que vai determinar o seu comportamento, sendo:

name: o nome ou sobrenome da pessoa a ser buscada;

id: o id da pessoa a ser buscada.

A fun????o deve retornar um objeto no seguinte formato:

{
id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
fullName: "Sharonda Spry", // nome completo: firstName + lastName
species: [ "otters", "frogs" ], // esp??cies as quais a pessoa ?? respons??vel
locations: [ "SE", "SW" ], // Um array contendo todas as localiza????es das esp??cies
}
Para isso:

Retorne as informa????es da pessoa correspondente ao receber um objeto com a propriedade name:

a propriedade name pode possuir como valor o primeiro ou ??ltimo nome da pessoa colaboradora, portanto garanta que seu c??digo funciona das duas maneiras.
Retorne as informa????es da pessoa correspondente ao receber um objeto com a propriedade id;

Retorne um array com as informa????es de todas as pessoas colaboradoras caso a fun????o n??o receba par??metro;

Lance um erro caso o id seja inv??lido.

Exemplos de uso da fun????o getEmployeesCoverage:

Caso o par??metro seja um objeto com nome e id, retorne as informa????es da pessoa colaboradora
Caso a fun????o n??o receba par??metros, retorne um array com a informa????o de todas as pessoas colaboradoras
Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, lance um erro

De olho na dica eyes: Crie fun????es que dividam as tarefas em partes menores. Por exemplo, voc?? pode criar uma fun????o getSpecies encarregada somente por buscar o nome das esp??cies que a pessoa ?? respons??vel.

O que ser?? testado:

A fun????o, caso o objeto passado por par??metro tenha a propriedade name, dever?? retornar somente a pessoa correspondente;

A fun????o poder?? receber como par??metro um objeto com a propriedade name recebendo o segundo nome como valor;

A fun????o, caso o objeto passado por par??metro tenha a propriedade id, dever?? retornar somente a pessoa correspondente;

A fun????o, caso n??o receba par??metros, dever?? retornar uma lista com a cobertura de todas as pessoas colaboradoras;

A fun????o, caso n??o haja nenhuma pessoa com o name ou id especificados dever?? lan??ar um error. */
