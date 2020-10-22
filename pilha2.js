const Stack = require('./lib/Stack')

let pilha = new Stack()

let texto = 'Ser ou não ser eis a questão'

for(let i = 0; i < texto.length; i++) {
    // Inserção na pilha deve sempre ser feita no final
    pilha.push(texto.charAt(i))
}

console.log(pilha)

let inverso = ''
while(pilha.size() > 0) {
    // Retirada na pilha deve ser feita também no final
    inverso += pilha.pop()
}

console.log(inverso)

/*
console.log(pilha)

pilha.push(9)
pilha.push(-8)
pilha.push(0)
pilha.push(7)

console.log(pilha)
console.log('Ultimo elemento: ', pilha.peek())
console.log('Tamanho: ', pilha.size())

//pilha.unshift(3)

let x = pilha.pop()
console.log('x: ', x)
console.log('Ultimo elemento: ', pilha.peek())
console.log('Tamanho: ', pilha.size())
console.log(pilha.data)
*/