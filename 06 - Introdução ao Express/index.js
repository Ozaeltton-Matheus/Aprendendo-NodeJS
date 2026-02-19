// Chamando o módulo Express
const express = require("express")

// A variável app está recebendo a função express que vem do módulo express
// E a função express cria uma instância, que é uuma cópia completa do framework para a variável app
// Qualquer coisa que for usada do express será usada apartir dessa variável app
// É ideal transformar as variáveis em uma constante para evitar erros, isso evita que a variável seja sobrescrita.
const app = express()

// Criando a rota principal da aplicação
// Pelo que entendi o function(req, res) é com base na requisição recebida do servidor enviamos uma resposta e o app.get("/") obtém a / que é o diretório raiz do meu projeto que é para dizer ao servidor daonde ele tem que pegar as coisas para a aplicação.
app.get("/", function(req, res)
{   // E o res.send(Envia uma resposta para  dizer que está tudo bem e que está conseguindo pegar os arquivos da /)
    res.send("Olá, internacional!\nSejá bem-vindo á minha aplicação!\nEla está Robertocarlizando!")
})


app.get("/Acerca_de/", function(req, res)
{
    res.send("Minha página de Acerca de")
})

// Rotas são formas de apontar para caminhos de diretórios para que a aplicação acesse esses diretórios e seus recursos (arquivos do projeto)

// Chamando a função listen você cria o servidor e diz que ele vai escutar na porta que você indicou, que neste caso foi a 80
// É bem mais fácil e bem mais simples comparado com a função nativa do NodeJS para criação de um servidor HTTP
// Um adendo é que a função listen precisa sempre ser a ultima a ser chamada no código

// O function exibe o console.log("O servidor está escutando na porta 80!") quando o servidor estiver escutando na porta especificada, neste caso é a 80
app.listen(80, function()
{

    console.log("O servidor está escutando na porta 80!")

})
// Para acessar o servidor é aquele padrão de sempre coloca localhost:porta neste caso é localhost:80.

// O erro deCannot GET / acontece porque a aplicação ainda não possui nenhuma rota
// A rota é um caminho para a sua aplicação