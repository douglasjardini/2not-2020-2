//Pré-requisito para a busca binária: o conjunto de dados
//PRECISA estar ordenado pelo critério de busca
let comp = 0

//Implementação recursiva
//uma função chama a si mesma (novamente) com pelo menos um de seus parametros alterados
//Toda função recursiva precisa ter PELO MENOS uma condição de saída, isto é, uma possibilidade
//de término que não envolve uma chamada a ela mesma

//Os parametros início e fim são OPCIONAIS. Caso a função seja chamada sem especificá-los
//eles assumirão os valores indicados
function buscaBinaria(lista,valorBusca, fnComp, inicio = 0, fim = lista.length - 1) {
    //let inicio = 0
    //let fim = lista.length - 1
    
    if(fim >= inicio) {
        //Match.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        //Verifica se o valor na posição média é o valor da busca
        if(res == 0) {
            comp++
            return meio //Condição de saída (1º saída)
        }
        else if(res < 0) {
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1) //2º saída
        }
        else { //res > 0
            comp += 2
            //inicio = meio +1
            return buscaBinaria(lista, valorBusca, fnComp, meio + 1, fim) //3º saída
        }
    }
    //Condição de saída
    return -1    //Valor não encontrado - 4º saída

}

function comparaNome(obj,valorBusca) {
    //Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0 //Igualdade
    //Um npumero negativo para indicar que o primeiro < que o segundo
    else if(valorBusca < obj.first_name) return -1
    //Um numero positivo para indicar que o primeiro > que o segundo
    else return 1 // valor busca> obj.first_name
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 66, (elPos, busca) => {
    if(busca === elPos) return 0
    else if (busca < elPos) return -1
    else return 1
}))

// Aqui termina a execução sem passar pelas linhas (buscas) abaixo
//process.exit(0)  // 0 = saindo ok, sem erros

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