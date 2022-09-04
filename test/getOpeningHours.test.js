const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se o requisito é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se ao não receber parâmetro retorna um objeto com todos os horários', () => {
    expect(getOpeningHours()).toEqual({
      Friday: { close: 8, open: 10 },
      Monday: { close: 0, open: 0 },
      Saturday: { close: 10, open: 8 },
      Sunday: { close: 8, open: 8 },
      Thursday: { close: 8, open: 10 },
      Tuesday: { close: 6, open: 8 },
      Wednesday: { close: 6, open: 8 },
    });
  });
  it('Testa se ao receber um parâmetro com horário fora do expediente retorna a string "The Zoo is closed"', () => {
    expect(getOpeningHours('Friday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Testa se ao receber um parâmetro com horário correto retorna "The zoo is open"', () => {
    expect(getOpeningHours('Saturday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa se ao receber um horário inválido retorna "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Friday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Testa se ao receber um dia inválido retorna "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Sexta-cheira', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se ao receber o horário com minutos inválidos retorna o erro "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Friday', '6:61-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Testa se ao receber um formato hora escrito fora do padrão recebe o erro "The hour should represent a number', () => {
    expect(() => getOpeningHours('Friday', '0I:00-AM')).toThrow('The hour should represent a number');
  });
  it('Testa se ao receber hora fora do padrão AM/PM retorna "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Friday', '19:00-LU')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
