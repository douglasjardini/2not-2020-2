let pilha = []

let texto = 'Ser ou não ser eis a questão'

for(let i = 0; i < texto.length; i++) {
    // Inserção na pilha deve sempre ser feita no final
    pilha.push(texto.charAt(i))
}

let inverso = ''
while(pilha.length > 0) {
    // Retirada na pilha deve ser feita também no final
    inverso += pilha.pop()
}

console.log(pilha)

console.log(inverso)