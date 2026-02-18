// Para tornar os arquivos um módulo é preciso criar uma variável para armazenar a função e apagar o nome da função
// Essa é uma forma de também se criar uma função no JavaScript
var Soma = function(a , b)
{

	return a + b

}

// Para exportar o módulo (ou tornar a função um módulo)você usa module.exports = nome da variável
module.exports = Soma

// É possivel exportar qualquer coisa valores, objetos
