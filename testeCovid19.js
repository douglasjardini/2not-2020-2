function buubbleSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, trocas = 0
    let trocas
    do {
        passadas++
        trocas = 0
        
        for(let i = 0; i< = vetor.length -2; i++) {
            comparacoes++
            if(fnComp(vetor[i], vetor[i + 1])) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }
    } while(trocas > 0)
    console.log({passadas, comparacoes, totalTrocas})
}

const covid19 = require('./dados/covid-19')

const covid191000 = covid19.slice(0, 999)

console.time('Teste Covid19')
buubbleSort(covid191000, (a, b) => a.date.localeCompare(b.city, 'pt-BR') > 0)
console.timeEnd('Teste Covid19')

console.log(covid191000)