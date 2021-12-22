mkdir hello-express
cd hello-express
npm init -y
npm i express
touch index.js
node index.js
npm i nodemon -D
Para parar a aplicação pressione CTRL+C no seu terminal.


Para facilitar nosso fluxo de desenvolvimento podemos utilizar um pacote chamado Nodemon que reinicia a aplicação toda vez que editamos e salvamos os nossos arquivos. Para utilizar esse pacote, vamos começar instalando ele na nossa aplicação.
npm i nodemon -D