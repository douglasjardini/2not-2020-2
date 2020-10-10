function quickSort(vetor, inicio = 0, fim =vetor.length -1) {
    console.log({vetor, inicio, fim})
    if(fim > inicio) {  //Garante que haja, pelo menos, dois elementos para ordenar
        let posDiv = inicio - 1
        let posPivot = fim
        for(let i = inicio; i < fim; i++) {
            if(vetor[i] < vetor[posPivot]) {
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
            }        
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        quickSort(vetor, inicio, posDiv -1)    //Lado esquerdo
        quickSort(vetor, posDiv +1, fim)       //Lado Direito
    }
}

let nums = [54, 81, 72, 36, 9, 90, 63, 27, 18, 45]

quickSort(nums)
console.log(nums)