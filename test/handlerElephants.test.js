const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se o requisito é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Testa o retorno se a função não recebe parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se retorna o valor correto (4) ao receber o parâmetro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se retorna o array com nomes ao receber o parâmetro name', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se retorna a média 10.5 ao receber o parâmetro averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa se a função retorna erro ao fornecer um parâmetro que não é string', () => {
    expect(handlerElephants(50)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se ao receber o parâmetro location, retorna a localização correta', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Testa se ao receber o parâmetro "popularity" a função retornar o valor 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Testa se ao receber o parâmetro availability retorna os dias de disponibilidade', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Testa se ao receber um parâmetro desconhecido retorna null', () => {
    expect(handlerElephants('50')).toEqual(null);
  });
});
