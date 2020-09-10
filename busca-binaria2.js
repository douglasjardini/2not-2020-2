//Pré-requisito para a busca binária: o conjunto de dados
//PRECISA estar ordenado pelo critério de busca
let comp = 0
function buscaBinaria(lista,valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length -1

    while(fim >= inicio) {
        //Match.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        //Verifica se o valor na posição média é o valor da busca
        if(res == 0) {
            comp++
            return meio
        }
        else if(res < 0) {
            comp += 2
            fim = meio - 1
        }
        else { //res > 0
            comp += 2
            inicio = meio +1
        }
    }
    return -1    //Valor não encontrado

}

function comparaNome(obj,valorBusca) {
    //Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0 //Igualdade
    //Um npumero negativo para indicar que o primeiro < que o segundo
    else if(valorBusca < obj.first_name) return -1
    //Um numero positivo para indicar que o primeiro > que o segundo
    else 1 // valor busca> obj.first_name
}

let listaNomes = require('./dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'FAUSTO', comparaNome))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log("-------------------------------")
comp = 0 
console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', (obj, bsusca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações: ', comp)