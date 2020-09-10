//Pré-requisito para a busca binária: o conjunto de dados
//PRECISA estar ordenado pelo critério de busca
let comp = 0
function buscaBinaria(lista,valorBusca) {
    let inicio = 0
    let fim = lista.length -1

    while(fim >= inicio) {
        //Match.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        //Verifica se o valor na posição média é o valor da busca
        if(valorBusca === lista[meio]) {
            comp++
            return meio
        }
        else if(valorBusca < lista[meio]) {
            comp += 2
            fim = meio - 1
        }
        else { //valorBusca > lista[meio]
            comp += 2
            inicio = meio +1
        }
    }
    return -1    //Valor não encontrado

}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('---------------------------')

COMP = 0
console.time('MARIA')
console.log(buscaBinaria(vetorNomes, 'MARIA'))
console.timeEnd('MARIA')
console.log('Comparações: ', comp)

console.log('---------------------------')