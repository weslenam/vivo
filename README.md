# vivo-test
```
Vivo - Usuarios do Github
```

```
Recursos usados no Frontend
```
- Vue
- Vuex: controle de estado de objetos
- Vue-router: controle de rotas
- Axios: cliente assincrono
- Vuetify: framework padrao Material Design

```
Recursos usados no Backend / API
```
- Python
- Django
- Sqlite: banco de dados

## Requer docker e docker compose

### Como rodar aplicação
```
Fazer o clone deste projeto ou o download via arquivo compactado
Após os downloads
```
```
Usando uma tela de terminal ou o orquestrador de container, neste caso o docker compose executar o comando “docker-composer up” dentro da pasta “vivo”
```
```
Rodar a aplicação
Abrir o navegador e informar o endereço conforme o orquestrador, caso esteja em ambiente local será: http://localhost:8080
```
### Pontos importantes sobre a aplicação
- Usar o docker-compose considero como ambiente pre-produção porem para por em produção  e escalavel a implantação torna-se rapida;
- As portas podem estar ocupadas dependendo do servidor de aplicação e antes de produção devem ser analisadas;
- O banco de dados pode ser explorado tambem utilizando um micro-serviço para este projeto;

#### Originalmente a aplicação estava no bitbucket
[repositorio do backend] (https://bitbucket.org/weslenam/api/src/master/)
[repositorio do frontend] (https://bitbucket.org/weslenam/frontend/src/master/)

#### Arquivo como_rodar.pdf enviado anteriormente
[como_rodar.pdf] (https://drive.google.com/file/d/17mehJO3iV-Y9RiRTQvb9oSzxFYMbeF9l/view?usp=sharing)

## Project Setup and RUN
```
docker-compose up
```
