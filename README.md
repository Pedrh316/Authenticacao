# Índice 
* [Tutorial](#Tutorial)

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
