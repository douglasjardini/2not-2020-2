/*

    6 + {8 / [3 - (9 * 2)] + (4*3)}

*/

const Stack = require('./lib/Stack2')

let analisador = new Stack()

let expr = '6 + { 8 / [3 - (9 * 2)] + (4*3)}'
//let expr = '6 + { 8 / [3 - (9 * 2)] + (4*3)} + (2 -'

for(let i = 0; i < expr.length; i++) {
    switch(expr.charAt(i)) {
        case '{':  // quando abre a chave
            analisador.push({pos: i, tipo: 'CH'})
            break
        case '[':  // quando abre o colchete
            analisador.push({pos: i, tipo: 'CO'})
            break
        case '(':  // quando abre o parentese
            analisador.push({pos: i, tipo: 'PA'})
            break
        case '}':  // quando fecha o colchete
            info = analisador.pop()
            // Info não pode ser vazio e seu tipo deve ser CH
            if(info && info.tipo == 'CH') {
                console.log(`Chave aberta na posição ${info.pos} e fechada na posição ${i}.`)
            }
            else {
                console.log(`Erro: Chave fechando na posção ${i} não tem abertura correspondente.`)
            }
            break
        case ']':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo de ser CO
            if(info && info.tipo == 'CO') {
                console.log(`Colchete aberto na posição ${info.pos} e fechando na posição ${i}.`)
            }
            else {
                console.log(`Erro: colchete fechando na posição ${i} não tem abertura correspondente.`)
            }
            break
        case ')':
            info = analisador.pop()
            // info não pode ser vazio e seu tipo de ser PA
            if(info && info.tipo == 'PA') {
                console.log(`Parenteses aberto na posição ${info.pos} e fechando na posição ${i}.`)
            }
            else {
                console.log(`Erro: parenteses fechando na posição ${i} não tem abertura correspondente.`)
            }            
    }

}




//Analisador residuo da pilha
while(analisador.size() > 0) {  //Enquanto ainda houver elementos na pilha
    info = analisador.pop()
    switch(info.tipo) {
        case 'PA':
            console.log(`ERRO: Parentese aberto na posição ${info.pos} naõ tem o fechamento correspondente.`)
            break
        case 'CO':
            console.log(`ERRO: Colchete aberto na posição ${info.pos} naõ tem o fechamento correspondente.`)
            break
        case 'CH':
            console.log(`ERRO: Chave aberto na posição ${info.pos} naõ tem o fechamento correspondente.`)
    }
}

console.log(analisador)