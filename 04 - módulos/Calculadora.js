// Para carregar um módulo é necessário require() que carrega um módulo que você indicar
// Nesse caso colocando o caminho com ./ indica que queremos buscar o módulo que está na mesma pasta onde estamos

// Aqui guarda-se ou armazena-se o módulo de Somar dentro da variável FuncaoSomar
var FuncaoSomar = require("./Soma")
// Aqui foi feita a mesma coisa com os outros
// Cada um

// Multiplicação
var FuncaoMultiplicar = require("./Multiplicação")

// Subtração
var FuncaoSubtrair = require("./Subtração")

// Divisão
var FuncaoDividir = require("./Divisão")


console.log(FuncaoSomar(2, 3))
console.log(FuncaoMultiplicar(100, 10))
console.log(FuncaoSubtrair(10, 5))
console.log(FuncaoDividir(5, 2))