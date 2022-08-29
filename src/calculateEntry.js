const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrants = [
  { name:  'Lara Carvalho', age:  5 },
  { name:  'Frederico Moreira', age:  5 },
  { name:  'Pedro Henrique Carvalho', age:  5 },
  { name:  'Maria Costa', age:  18 },
  { name:  'Núbia Souza', age:  18 },
  { name:  'Carlos Nogueira', age:  50 },
  ];

function countEntrants(entrants) {
  return {
    child: entrants.filter((person) => person.age < 18).length,
    adult: entrants.filter((person) => person.age >= 18 && person.age < 50).length,
    senior: entrants.filter((person) => person.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  return countEntrants(entrants).child * prices.child
  + countEntrants(entrants).adult * prices.adult
  + countEntrants(entrants).senior * prices.senior;
}
console.log(calculateEntry());
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };

/* A

A função calculateEntry será responsável por somar o valor da entrada das pessoas no zoológico:
Ela recebe um array e deve retornar a soma total dos valores do ingresso. Para isso:

Retorne 0 se nenhum parâmetro for passado ou seja um array vazio;

Utilize a função countEntrants para ter a quantidade total de pessoas por faixa etária;

Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: 187.94.

De olho na dica eyes: O valor a ser cobrado pela faixa de idades também consta no arquivo de dados.

Exemplo de uso da função calculateEntry:

calculateEntry(entrants);
Saída:

187.94
O que será testado:

A função countEntrants:

Ao receber um array de visitantes, retorna um objeto com a contagem.
A função calculateEntry:

Retorna 0 se nenhum argumento for passado;

Retorna 0 se um objeto vazio for passado;

Ao receber um array de pessoas com 3 crianças, 2 pessoas adultas e 1 pessoa mais velha retorna o valor correto;

Ao receber um array com 1 pessoa adulta retorna o valor correto;

Ao receber um array com 1 pessoa mais velha retorna o valor correto;

Ao receber um array com 1 criança retorna o valor correto;

Ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto.
 */