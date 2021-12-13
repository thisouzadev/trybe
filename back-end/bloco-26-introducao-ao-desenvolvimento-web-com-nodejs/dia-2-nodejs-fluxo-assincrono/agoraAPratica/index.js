const readline = require('readline-sync');

// Criamos uma lista dos scripts disponíveis
// Utilizamos objetos com `name` e `script` para facilitar a criação da lista que será exibida
const scripts = [
  { name: 'Calcular 3 numeros random', script: './math.js' },
  { name: 'familia simpson', script: './simpsom.js' },
  { name: 'Encontre um membro dos simpsons pelo id', script: './simpsom2.js' },
  { name: 'Filtrar os id 10 e 6 do simpsom', script: './simpsom3.js' },
  { name: 'criando o novo simpsonsFamily.json', script: './simpsom4.js' },
  { name: 'inserindo nelsin muntz no id 11', script: './simpsom5.js' },
  { name: 'Inserindo Maggie no simpsonsFamily', script: './simpsom5.js' },
  { name: 'criando arquivos txt', script: './arrayTofile.js' },
  { name: 'Faça sua pergunta', script: './question.js'},
  { name: 'fizzBuzz', script: './fizzBuzz.js'}
];

// Iteramos sobre os scripts para criar a lista numerada
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

// Adicionamos uma linha a mais no começo da mensagem
mensagem.unshift('Escolha um número para executar o script correspondente');

// Juntamos todos os elementos em uma string, separando-os por uma quebra de linha
mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

// Chamamos o script selecionado
// Note que, no dia a dia, é mais comum utilizarmos outras formas de executar arquivos externos
// No entanto, para fins didáticos, o `require` nos atende por enquanto.
require(script.script);