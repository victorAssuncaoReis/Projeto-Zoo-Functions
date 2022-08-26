const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .filter((ele) => employeeName === ele.firstName || employeeName === ele.lastName)[0];
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;

/* Implemente a função getEmployeeByName que deve buscar por pessoas colaboradoras através de seu primeiro ou último nome.

Retorne um objeto vazio caso a função não receba parâmetros;

Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome no seguinte formato: */
