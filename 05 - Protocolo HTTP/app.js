// Usando o protocolo HTTP padrão do NodeJS
// Chamando a função http nativa do NodeJS
var http = require("http")

// Abrindo um servidor de Back-End
// Dizendo em qual porta o servidor vai escutar
// Aqui estou criando um servidor http e dizendo que ele vai escutar na porta 80
http.createServer(function(req, res){

    res.end("Olá, galera!\nBem vindos ao meu site internacional!")

}).listen(30)
console.log("O servidor esta rodando!")
