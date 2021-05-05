const sum = require('./sum');

describe('requisito 1', () => {
  it('teste se o retorno de sum é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('teste se o retorno de sum é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)',
    () => {
    expect(() => {
      sum(4, "5")}).toThrow();
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)',
    () => {
    expect(() => {
      sum(4, "5")}).toThrow(new Error('parameters must be numbers'));
  });
}) 
