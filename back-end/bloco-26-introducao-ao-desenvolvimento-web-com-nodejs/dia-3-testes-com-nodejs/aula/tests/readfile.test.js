const readfile = require('../readfile');
const fs = require('fs/promises');
const sinon = require("sinon");
const { expect } = require( 'chai' );

describe('ler um arquivo', () => { 
  
  // quando o arquivo é lido com sucesso
  describe('o output', () => {

    before(()=> {
      sinon.stub(fs, 'readFile').resolves('Harry Potter');
    });

    after(() => {
      fs.readFile.restore();
    });
    
    it('é uma string', async () => {
      const result = await readfile('PSAJPJASDIOJSIAODJ.txt'); // retorna "Harry Potter"
      expect(result).to.be.a('string');
    });

    it('o resultado é igual ao conteudo do arquivo', async () => {
      const result = await readfile('BATINHAFRITA.txt');
      expect(result).to.be.equal("Harry Potter");
    });
  });

  // quando ocorre algum problema na leitura do arquivo
  describe('erro na leitura do arquivo', () => {

    before(() => {
      sinon.stub(fs, 'readFile').rejects('Erro na leitura do arquivo');
    });

    after(() => {
      fs.readFile.restore();
    });

    describe('o output',  () => {
      it('é null', async () => {
        const result = await readfile('BATINHAFRITA.txt');
        expect(result).to.be.null;
      });
    });
  });

});


