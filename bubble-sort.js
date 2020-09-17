/*

    Adaptando o algoritmo Bubble sort para operar com vetor de objetos

    1) Acrescentar um novo parâmetro, que vai corresponder a função de
    comparação

*/

function bubbleSort(vetor) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

        //Percurso do vetor até a PENÚLTIMA POSIÇÃO (length - 2)
        for (let i = 0; i <= vetor.length -2; i++) {
            comparacoes++
            //Comparando o elemento da posição atual(i)
            //com o elemento da frente (i + 1)
            if(vetor[i] > vetor[i + 1]) {                
                //Troca usando desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }

    } while(trocas > 0)
    //Exibindo as estatísticas
    console.log({passadas, comparacoes, totalTrocas})
}

let nums = [58, 16, 33, 82, 4, 47, 25, 71, 96, 60, 41, 89]

console.time('Teste1')
bubbleSort(nums)
console.timeEnd('Teste1')

console.log(nums)

/*let empresas = require('./dados/15-mil-empresas')

console.time('Teste empresas')
bubbleSort(empresa)
console.timeEnd('Teste empresas')
console.log(empresa)*/

let nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
bubbleSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)