const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((empregado) => empregado.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const comparacao = employees.filter((empregado) => empregado.managers
    .some((empregado2) => empregado2 === managerId));
  return comparacao.map((nome) => `${nome.firstName} ${nome.lastName}`);
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };

// Feito com a ajuda de Luis Gustavo da turma 25-b e Gabriel Matos Boubee
/* Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:
A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:

Deve retornar true se o id passado for de uma pessoa gerente;
Deve retornar false se o id passado não for de uma pessoa gerente.
A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:

Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:

Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
Exemplo de output:

[ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
Para lançar o erro, você vai utilizar a função construtora Error da biblioteca padrão do JavaScript.

Exemplo:

throw  new  Error('O id inserido não é de uma pessoa colaboradora gerente!');
Você pode ler mais sobre a função construtora Error, neste link.

O que será testado:

A função isManager deve retornar true se o ID passado for de uma pessoa gerente;

A função isManager deve retornar false se o ID passado não for de uma pessoa gerente;

A função getRelatedEmployees, caso o ID passado for da pessoa gerente, deve retornar um array contendo nome e sobrenome das pessoas colaboradoras pelas quais ela é responsável;

A função getRelatedEmployees, caso o ID passado não for da pessoa gerente, deve disparar um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!' */
