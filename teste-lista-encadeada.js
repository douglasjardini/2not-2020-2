const LinkedList = require('./lib/LinkedList')

let lista = new LinkedList()
console.log(lista.toString(), lista.size())

lista.push('amarelo')
console.log(lista.toString(), lista.size())

lista.push('branco')
console.log(lista.toString(), lista.size())

lista.push('rosa')
console.log(lista.toString(), lista.size())

lista.push('azul')
console.log(lista.toString(), lista.size())