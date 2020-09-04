/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

let estado2 = {
    nome: 'Alagoas',
    sigla: 'AL',
    area: 27848.14,
    populacao: 3322820
}

let estado3 = {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area: 52811.05,
    populacao: 3479010
}

let estado4 = {
    nome: 'Paraíba',
    sigla: 'PA',
    area: 56469.78,
    populacao: 3996496
}

let estado5 = {
    nome: 'Pernambuco',
    sigla: 'PE',
    area: 98148.32,
    populacao: 9496294
}

let estado6 = {
    nome: 'Ceará',
    sigla: 'CE',
    area: 148920.47,
    populacao: 9075649
}

let estado7 = {
    nome: 'Piauí',
    sigla: 'PI',
    area: 251577.74,
    populacao: 3264531
}

let estado8 = {
    nome: 'Maranhão',
    sigla: 'MA',
    area: 331937.45,
    populacao: 7035055
}

let estado9 = {
    nome: 'Bahia',
    sigla: 'BA',
    area: 564733.18,
    populacao: 14812617
}

estadosNe.push(estado1)
estadosNe.push(estado2)
estadosNe.push(estado3)
estadosNe.push(estado4)
estadosNe.push(estado5)
estadosNe.push(estado6)
estadosNe.push(estado7)
estadosNe.push(estado8)
estadosNe.push(estado9)

//Outra forma de acrescentar objetos ao vetor
//estadosNe.push(estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8,estado9)

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/

let densidadeDemo = (area, populacao) => populacao / area

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/

console.log(`O estado ${estado1.nome} possui ${estado1.area} de área, com uma população de ${estado1.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado1.area, estado1.populacao)}`)
console.log(`O estado ${estado2.nome} possui ${estado2.area} de área, com uma população de ${estado2.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado2.area, estado2.populacao)}`)
console.log(`O estado ${estado3.nome} possui ${estado3.area} de área, com uma população de ${estado3.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado3.area, estado3.populacao)}`)  
console.log(`O estado ${estado4.nome} possui ${estado4.area} de área, com uma população de ${estado4.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado4.area, estado4.populacao)}`)
console.log(`O estado ${estado5.nome} possui ${estado5.area} de área, com uma população de ${estado5.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado5.area, estado5.populacao)}`)
console.log(`O estado ${estado6.nome} possui ${estado6.area} de área, com uma população de ${estado6.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado6.area, estado6.populacao)}`)
console.log(`O estado ${estado7.nome} possui ${estado7.area} de área, com uma população de ${estado7.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado7.area, estado7.populacao)}`)
console.log(`O estado ${estado8.nome} possui ${estado8.area} de área, com uma população de ${estado8.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado8.area, estado8.populacao)}`)
console.log(`O estado ${estado9.nome} possui ${estado9.area} de área, com uma população de ${estado9.populacao} habitantes e densidade demográfica de ${densidadeDemo(estado9.area, estado9.populacao)}`)

console.log('*******************************')
/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().
  
*/

let atrib = n => n

for(let atrib in estado1) {
    console.log(`Atributo: ${atrib}; valor:  ${estado1[atrib]}`)
}
console.log(atrib(estado1))
console.log('-------------------------------')
for(let atrib in estado2) {
    console.log(`Atributo: ${atrib}; valor:  ${estado2[atrib]}`)
}
console.log(atrib(estado2))
console.log('-------------------------------')
for(let atrib in estado3) {
    console.log(`Atributo: ${atrib}; valor:  ${estado3[atrib]}`)
}
console.log(atrib(estado3))
console.log('-------------------------------')
for(let atrib in estado4) {
    console.log(`Atributo: ${atrib}; valor:  ${estado4[atrib]}`)
}
console.log(atrib(estado4))
console.log('-------------------------------')
for(let atrib in estado5) {
    console.log(`Atributo: ${atrib}; valor:  ${estado5[atrib]}`)
}
console.log(atrib(estado5))
console.log('-------------------------------')
for(let atrib in estado6) {
    console.log(`Atributo: ${atrib}; valor:  ${estado6[atrib]}`)
}
console.log(atrib(estado6))
console.log('-------------------------------')
for(let atrib in estado7) {
    console.log(`Atributo: ${atrib}; valor:  ${estado7[atrib]}`)
}
console.log(atrib(estado7))
console.log('-------------------------------')
for(let atrib in estado8) {
    console.log(`Atributo: ${atrib}; valor:  ${estado8[atrib]}`)
}
console.log(atrib(estado8))
console.log('-------------------------------')
for(let atrib in estado9) {
    console.log(`Atributo: ${atrib}; valor:  ${estado9[atrib]}`)
}
console.log(atrib(estado9))
console.log('*******************************')
/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.
*/

for(let atrib of estadosNe) {
console.log(atrib)
}

console.log('*******************************')
      
/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

         */

let vetor1 = []
vetor1.unshift('Alagoas')
vetor1.splice(2, 0, 'Ceará')
vetor1.splice(3, 0, 'Maranhão')
vetor1.splice(1, 0, 'Bahia')
vetor1.splice(4, 0, 'Paraíba')
vetor1.splice(5, 0, 'Pernabuco')
vetor1.splice(6, 0, 'Piauí')
vetor1.splice(7, 0, 'Rio Grande do Norte')
vetor1.push('Sergipe')

console.log(vetor1)