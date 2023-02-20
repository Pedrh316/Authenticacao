# Índice
* [Sobre](#Sobre)
* [Tutorial](#Tutorial)

# Sobre
A construção deste projeto tem por objetivo consolidar meus conhecimentos em tratamentos de rotas privadas e publicas através do próprio react com a biblioteca chamada react-router-dom. Algumas funcionalidades interessantes nesse projeto são:
- Animação de loading durante os envios de formulários e mudanças nos tipos de rotas (privadas e publicas);  
- Mensagens de erro no formulário com as melhores práticas, além da utilização de regex no atributo pattern dos inputs HTML, para validação dos campos dos mesmos;  
- Navegação rápida por meio do tratamento de rotas no próprio front-end, o que impede a continuação de requisições HTTP GET;  
- Banco de dados MongoDB para armazenamento dos dados do usuário e geração do token para melhor experiência do mesmo.  
- Os menus são modificados de acordo com o status de autenticação do cliente, além de possuir itens para demonstração prática do funcionamento do controle de rotas públicas e privadas.  

## Arquitetura
Sobre a arquitetura do projeto, fora utilizado práticas de clean architecture para melhor manutenção como a criação das camadas UseCases para interação com o servidor, Controllers para separar a lógica da camada de rotas, Schemas no frontend, que servem como as models do backend para criar estruturas de interface dos fomulários, Hooks para criação de hooks customizados, utils para criação de constantes que serão utilizadas no projeto deixando o projeto mais desacoplado, entre outros.

Como o projeto tem a utilização do back-end, preferi deixar o link somente do repositório do projeto no github. Portanto, abaixo está o link do tutorial para que o leitor possa rodar isso em sua própria máquina no sistema operacional windows.

# Tutorial
## Requisitos
- MongoDB
- Node
- Git

## Passos
1 - Abra o terminal CMD e Navegue até uma pasta onde possa colocar o seu repositório através do comando cd;  
2 - no repositório escolhido, digite o comando git clone https://github.com/Pedrh316/Authenticacao.git  
3 - vá até a pasta server, crie um arquivo chamado .env e passe o seguinte código a ele:  
```env
  TOKEN_KEY=AWETgnoge1095y1803tgfvASDWTW@!@!
  MONGO_DB_ROUTE=mongodb://localhost:27017/user
```
  OBS: os valores passados no TOKEN_KEY trata-se de uma chave privada que a biblioteca jsonwebtoken utilizará para fazer validação dos mesmo. O valor da variável deve ser secreta.

## Execução
1 - Para executar a aplicação react no vite, vá até a pasta client e digitarmos no terminal o comando ```npm run dev```  
2 - Para iniciar o servidor, vá até a pasta server e digite no terminal o comando ``` node index ```  
3 - Por fim, abra seu navegador e digite a url http:localhost:5173.   

## Visualização

![rota de login](https://user-images.githubusercontent.com/36244802/220136108-d20d0e41-a899-43d7-9a17-8dddd8e4b7e8.png)
<hr>

![rota não unauthorized](https://user-images.githubusercontent.com/36244802/220136219-32878b6b-28a8-420c-a942-732a964f226a.png)

<hr>

![rota principal](https://user-images.githubusercontent.com/36244802/220136295-8f36743f-83ca-4b4f-9809-6ab47344a3f0.png)
