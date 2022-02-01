Faça o deploy no Heroku utilizando o CLI.

Inicialize o Heroku com o comando heroku create .

Renomeie o remote padrão:
git remote rename heroku homolog

Criar um novo remote chamado prod
heroku create --remote prod

Altere a variável de ambiente de homolog para uma mensagem específica para o ambiente:
heroku config:set MESSAGE="HOMOLOG: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-HOMOLOG

Crie a variável de ambietne de prod com uma mensagem 
específica para o ambiente:
heroku config:set MESSAGE="PROD: Variáveis de ambiente funcionam" --app NOME-DO-APP-DE-PROD

Faça deploy do app de prod :

git push prod master
