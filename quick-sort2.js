let passadas = 0, comparacoes = 0, trocas = 0
/*
    fnComp -> Compara dois elementos do vetor
    Recebe dois valores do vetor
    Retorna:
        - True, se o PRIMEIRO valor for MAIOR que o segundo
        - False, caso contrario
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length -1) {
    //console.log({vetor, inicio, fim})
    if(fim > inicio) {  //Garante que haja, pelo menos, dois elementos para ordenar
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim
        for(let i = inicio; i < fim; i++) {
            comparacoes++
            // if (vetor[i] < vetor[posPivot])
            if(fnComp(vetor[posPivot], vetor[i])) { // Parametros invertidos
                posDiv++,
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }        
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++
        quickSort(vetor, fnComp, inicio, posDiv -1)    //Lado esquerdo
        quickSort(vetor, fnComp, posDiv +1, fim)       //Lado Direito
    }
}

/*
let nums = [90, 81, 72, 63, 54, 45, 36, 27, 18, 9]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
*/

const candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
//quickSort(candidatos, (a,b) => a.NM_CANDIDATO > b.NM_CANDIDATO)

quickSort(candidatos, (a,b) => {
    // Ordenação considerando primeiro NR_CANDIDATO > b.NM_CANDIDATO
    if(a.NR_CANDIDATO == b.NR_CANDIDATO) {
        if(a.NM_CANDIDATO > b.NM_CANDIDATO) return true
        else return false
    }
    else if(a.NRCANDIDATO > b.NR_CANDIDATO) return true
    else return false

})

console.timeEnd('Teste candidatos')
console.log(candidatos)
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})