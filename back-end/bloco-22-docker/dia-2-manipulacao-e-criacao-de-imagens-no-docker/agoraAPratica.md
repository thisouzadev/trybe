Agora a prática

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!<br/>
Exercício 1 :
Vamos aprimorar nossos conhecimentos sobre imagens.
Para isso:
1. Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura: 1.1. Tag title com o seguinte texto "Trybe"; 1.2. Tag H1 com o seguinte texto "Missão da Trybe"; 1.3. Tag p com o seguinte texto "Gerar oportunidade para pessoas"; 1.4. Salve o arquivo em qualquer lugar da sua máquina com a extensão html <br/>
2. Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.<br/>
`docker run -d --name site-trybe2 -p 8881:80 -v "$PWD/:/usr/local/apache2/htdocs/" httpd:2.4`
3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser.<br/>
`http://localhost:4545/primeiro-teste.html`
4. Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto "Nosso negócio é GENTE! #VQV";<br/>
5. Obtenha o id do container httpd:2.4 ;<br/>
`docker ps`
6. Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host ;<br/>
  `docker inspect <COLOQUE AQUI SEU CONTAINER ID>`
7. Agora pare o container httpd:2.4 ;<br/>
 `docker stop <COLOQUE AQUI SEU CONTAINER ID>`
8. Exclua o seu container;<br/>
 `docker rm <COLOQUE AQUI SEU CONTAINER ID>`
9. Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;<br/>
 `cd <Endereço da sua máquina local>`
 ls -la
 <br/>
10. Obtenha o IMAGE ID do servidor;<br/>
 `docker rmi -f <COLOQUE AQUI SEU IMAGE ID>`
 <br/>
11. Depois de obter o IMAGE ID , exclua a imagem.<br/>
 `docker rmi -f <COLOQUE AQUI SEU IMAGE ID>`
 <br/>


`Exercício 2 :
Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (Uma vaca falante no terminal 🐮!) !
A ideia é deixarmos a mensagem para o cowsay parametrizável, dessa forma, conseguiremos executar o comando:
    ``docker container run cowsay Muuuuuuhhh``
    E ter a seguinte saída no terminal:
    `____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     || `
<br/>
1. Crie um Dockerfile utilizando a imagem chuanwen/cowsay .
<br/>
`FROM chuanwen/cowsay:latest`
<br/>
2. Agora defina um ENTRYPOINT para a execução do comando. <br/>
Lembre-se que com ele, diferente do CMD o comando não poderá ser sobrescrito com o docker run , porém, conseguiremos passar parâmetros ao binário, exploraremos esse recurso para poder passar a mensagem.
 `ENTRYPOINT [ "/usr/games/cowsay" ]`
3. Utilize o CMD para definir uma mensagem padrão.<br/>
`CMD [ "#VQV Trybe" ]`
<br/>
4. Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
<br/>
`$ docker image build ./ -t cowsay`
<br/>
5. Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM TRYBE" , para exibir um dragão junto com a vaquinha.
<br/>
`$ docker container run cowsay -f moofasa "#VQV TRYBE"`