1. No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ; <br/>
digitar debian na barra de busca.
<br/>
2. Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;
<br/>
3. Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição; <br/>
docker container run -it debian:stable-slim
<br/>
4. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ; <br />
Para criar e executar nosso container , usamos o comando docker container run -it debian:stable-slim , lembrando que a imagem pode ser chamada no formato <imagem>:<tag> .
Outra solução também pode ser com o uso do comando create , que cria o contêiner mas não o inicia imediatamente.
Primeiro utilizamos o comando docker container create -it debian:stable-slim . Como esse comando gera um CONTAINER ID , podemos utiliza-lo como referência para o comando start , como em docker container start <CONTAINER ID> .
<br/>
5. No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container;<br/>
cat /etc/*-release
<br/>
6. Encerre o terminal ; <br/>
exit
<br/>
7. Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;<br/>
Para listar o container , podemos utilizar o comando abreviado docker ps -l (para mostrar qual foi o último container criado), assim como docker container ls -l ou ainda, passando o parâmetro -a para mostrar todos.
<br/>
8. Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers; <br/>
Foi utilizado o comando abreviado docker start <CONTAINER ID || NAMES> onde <CONTAINER ID || NAMES> foi o início do identificador único 07c0a580d818 (mostrando que n é preciso passar o valor inteiro) , o container ficou ativo (campo STATUS ) após isso.
<br/>
9. Retome o container que foi criado anteriormente nesse exercício ; <br/>
Foi utilizado o comando abreviado docker attach <CONTAINER ID || NAMES> . Já que o container foi inicializado anteriormente de modo interativo, pudemos retomar seu terminal.
<br/>
10. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;
<br/>
11. Encerre o terminal ;<br/>
exit
<br/>
12. Remova somente o container criado para esse exercício ; <br/>
Foi utilizado o comando docker container rm <CONTAINER ID || NAMES> , validado em seguida.
<br/>
13. (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;<br/>
Você descobriu o jogo ASCII-PATROL ! ⚠️ Para rodar o container e remove-lo logo em seguida, foi utilizado o comando docker run -it --rm andrius/ascii-patrol , onde o -it permite a interação com o jogo pelo terminal e o --rm garante que o container será removido ao terminar o jogo.
<br/>
14. (Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].<br/>
rodando um docker container ls -a , o container do jogo não estará presente.