//# Exercício 2

//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, 
//utilizando `console.log()`:
const number = [32, 85, 42, 87, 29, 98]
const arrayString = ["Rio de Janeiro", "Recife", "Porto Alegre", "São Paulo"]
const arrayGeral = [12, "Natal", 30, true]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(`Quantidade de itens Number: ${number.length}`)
console.log(`Quantidade de itens String: ${arrayString.length}`)
console.log(`Quantidade de itens Geral: ${arrayGeral.length}`)

/*- Imprima o primeiro item do primeiro array, o segundo item do segundo array, 
e o terceiro item do terceiro array;*/

console.log(`Primeiro item de Number: ${number[0]}`)
console.log(`Segundo item de String: ${arrayString[1]}`)
console.log(`Terceiro item de Geral: ${arrayGeral[2]}`)


/*- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, 
e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
Isto é, um `includes()` verdadeiro, e outro falso.*/

console.log(`Em number tem o número 42? ${number.includes(42)}`)
console.log(`Em geral tem a cidade de Manaus? ${arrayGeral.includes("Manaus")}`)


