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

// A rota é a rota de onde as coisas (os recursos) para a sua aplicação estão (O caminho onde esses recursos estão).

// O erro de Cannot GET / acontece porque a aplicação ainda não possui nenhuma rota
// A rota é um caminho para a sua aplicação
// O Express é um framework orientado a rotas ou seja toda a sua aplicação será baseada na extrutura de rotas.
// Como mostrado aqui.


// 08 - Parâmetros
// Os parâmetros são formas de tornar rotas dinâmicas.

// Criando uma rota olá para mostrar o uso dos parâmetros.
app.get("/ola/:cargo/:nome/:cor/", function(req, res) // Para criar um parâmetro basta colocar /: depois do nome da rota e oque vier depois disso é um parâmetro ao criar um parâmetro é necessário colocar um valor nesse parâmetro na página que estiver rodando no servidor como por exemplo acessar localhost/ola/Matheus que nesse caso Matheus foi o valor que eu dei ao parâmetro, se deixar em branco dá o erro de cannot GET ola nesse caso porque o nome desta rota é ola
{
    res.send(`<h1>Olá, ${req.params.nome}!<h1/>\n<h2>Seu cargo é ${req.params.cargo}<h2/>\n<h3>Sua cor favorita é ${req.params.cor}<h3/>`) // Quando colocamos os parâmetros no navegador ele envia esses dados através de uma requisição http para o servidor node. Através do objeto req conseguimos obter dados da requisição que foi feita, inclusive parâmitros. O req.params mostra todos os parâmetros que foram utilizados na requisição
    //res.send(`<h2>Seu cargo é ${req.params.cargo}<h2/>`)
    //res.send(`<h3>Sua cor favorita é ${req.params.cor}<h3/>`)

    // Só é possível usar a função send uma vez, se usar mais de uma dará erro
    // Para contornar isso é necessário colocar o conteúdo que você deseja em uma unica res.send()
})

// Para exibir um parâmetro especifico basta colocar .nome do parâmetro depois do req.param como no exemplo acima que está req.param.nome
// E também eu aprendi o porque da variável não estar sendo reconhecida como variável na string é porque para formatação de strings com variáveis por alguma razão o JavaScript utiliza o acento grave (``) e não as aspas simples ('') ou aspas duplas ("")

// O req é responsável por receber dados de uma requisição que foi feita

// Um parâmetro é um valor dinâmico que o usuário consegue passar (introduzir.)