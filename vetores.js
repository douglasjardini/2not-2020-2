let vetor1 = []       //Forma "moderna"
let vetor2 = Array()  //Forma "Tradicional"

//Criação de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('vaca', 'cachorro', 'gato', 'papagaio')

// inserção de novos valores em um vetor

//Forma 1: push() -> adiciona novos elementos AO FINAL do vetor
vetor1.push('laranja')
vetor1.push('limão')

console.log(vetor1)

//Forma 2: unshift() -> adiciona novos elementos AO INICIO do vetor
vetor1.unshift('maçã')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

//Forma 3: splice()
//1º parametro: a posição de inserção
//2º parametro: quantos elementos serão elimidados (para inserção == 0)
vetor1.splice(2, 0, 'morango')
console.log(vetor1)

vetor1.splice(1, 0, 'jaca')
console.log(vetor1)

//Remoção de elementos do vetor

//Forma 1: pop() - Retira o ÚLTIMO elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

//Forma 2: shift() - Retira o PRIMEIRO elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

//Forma 3: splice()
//1º parametro: a posição para remoção
//2º parametro: a quantidade de elementos a serem removidos
//O retorno de spice() na remoção será um vetor contendo o (s)
//item(s) removido(s)
let x3 = vetor1.splice(2, 1)
console.log(vetor1, x3)

//O splice também serve para fazer substituições
vetor1.splice(1, 1, 'pera')
console.log(vetor1, x3)

//Colocando mais alguns elementos no vetor
vetor1.push('amora', 'Jabuticaba')
vetor1.push('pêssego')
vetor1.push('uva')
vetor1.push('abacate')
console.log(vetor1)

//metodos de percurso de vetores

//Forma 1: usando o for tradicional
//O inicio de uma variavel é sempre na posição 0 e seu incremento
//deve ir até uma posição ANTES do seu número de elementos (length)

//i++ siginifica i = i + 1
for(let i = 0; i <vetor1.lenght; i++) {
    console.log(vetor1[i])
}

console.log('---------------------------------')

//Forma 2: for..of
//Percorrer do primeiro ao último elemento de uma forma
//mais simples que o for tradicional
for(let fruta of vetor1) {
console.log(fruta)
}

console.log('--------------------------------')

//Forma 3: forEach()
//O argumento forEach é uma função que recebe 
//cada elemnto de um vetor pra fazer algo com ele

//Argumento como arrow function
vetor1.forEach(fruta => console.log(fruta))

//Argumento como função tradicional
vetor1.forEach(function(fruta) {
    console.log(fruta)
})