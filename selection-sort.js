/*
    Função de comparação fnComp
    - Recebe dois valores para comparação
    - Retorno
        - true se o PRIMEIRO valor for MAIOR que o segundo
        - false se for o contrario    
*/
function selectionSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0

    //Função que encontra o meonor número em um seguimento de vetor (subvetor)
    // A função deve retornar a posição do menor valor encontrado
    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length; i++) {
            //if(vetor[i] < vetor[posMenor]) posMenor = i
            if(! fnComp(vetor[i], vetor[posMenor])) posMenor = i
            comparacoes++
    }
    return posMenor
}

    //O for externo vai até a penultima posição
    for(i = 0; i < vetor.length - 1; i++) {
        passadas++

        //Busca-se o menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)

        //Caso o valor encontrado seja menor que o valor atual,
        //procede-se à troca
        comparacoes++
        //if(vetor[posMenor] < vetor[i]) {
            if(fnComp(vetor[i], vetor[posMenor])) { // Ordem dos artumentos invertido
            //Permuta de valores usando desestruturação
            [vetor[posMenor], vetor[i]] = [vetor[i] = vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

let candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
selectionSort(candidatos, (x, y) => x.NN_CANDIDATO < y.NN_CANDIDATO)
console.timeEnd('Teste candidatos')
//Medindo a memória utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(candidatos)
console.log('Memoria utilizada (MB):', memoria)