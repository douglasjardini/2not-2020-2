//Expressão de função "Tradicional"

//Características desta função
// - Um único argumento -> n
// - Seu corpo tem apenas uma linha de código com return
let quadrado = function(n) {
    return n * n
}

//A função tradicional acima pode ser transformada em uma ARROW FUNCTION
// - Desaparece a palavra function
// - O argumento não precisa de parenteses
// - Após o argumento há a flecha (arrow) =>
// - As chaves e a palavra return são omitidos
let quadrado2 = n => n * n

console.log(quadrado(6))
console.log(quadrado2(6))

//Situação alternativa 1: função sem argumento

//Retorna um número aleatório entre 0 e 99
let aleatorio = function() {
    //Math.random() -> gera um número aleatório entre 0 e 1 (fracionario)
    //Math.floor() -> "corta fora" as casas decimais de um número
    return Math.floor(Math.random() * 1000)
}

console.log('------------------------------')
console.log(aleatorio())

//Arrow function com 0 argumento
// - Os parenteses vazios marcam o lugar do argumento (obrigatórios)
let aleatorio2 = () => Math.floor(Math.random() * 1000)

//Situação tradicional com 1 e + argumentos

//Função tradicional com 1 e + argumentos
let imc = function(peso, altura) {
    return peso / (altura ** 2)
}

//Arrow function com 1 e + argumentos
//Os parenteses dos argumentos são obrigatorios quando o numero de argumentos > 1
let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc(87,1.78))
console.log(imc2(87,1.78))

//CONCLUSÃO: Os parenteses só podem ser omitidos da lista de argumentos
//de um arrow function quando há UM e APENAS UM argumento.

//Situação alternativa 3: Funcções com mais de uma linha no corpo

//Função tradicional
//5! = 5 * 4 * 3 * 2 * 1
let fatorial = function(n) {
    let res = 1
    for(let i = n; i > 1; i--) {
        res *= i
    }
    return res
}

//Arrow Function com corpo maior que uma linha
// - Não há como fazer otimizações quanto ao corpo da função
let fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) {
        res *= 1
    }
    return res
}

console.log(fatorial(5))
console.log(`O resultado é ${fatorial2(5)}`)