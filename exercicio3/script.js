//# Exercício 3

//Agora, vamos manipular os arrays, adicionando ou removendo informações. 

/*Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
e faça o que se pede abaixo nas cópias dos arrays originais;*/
const clima = ["Nublado", "Ensolarado", "Neve", "Tempestade"]
const number = [20, 65, 32, 41, 88, 99, 18]
const bagunca = [true, "iphone", 29, false, "lápis", 77]

/*- Adicione um item `number` ao primeiro array. 
Utilize `console.log()` para exibir o original e a cópia;*/
const climaCopia = clima.slice()
climaCopia.push(22)
console.log(`Adicione um item number ao primeiro array`)
console.log(`Original: ${clima}`)
console.log(`Cópia: ${climaCopia}`)

/*- Remova o último item do segundo array. 
Utilize `console.log()` para exibir o original e a cópia;*/
const numberCopia = number.slice()
numberCopia.pop()
console.log(`Remova o último item do segundo array`)
console.log(`Original: ${number}`)
console.log(`Cópia: ${numberCopia}`)

/*- Remova o segundo item do terceiro array. 
Utilize `console.log()` para exibir o original e a cópia;*/
const baguncaCopia = bagunca.slice()
baguncaCopia.splice(1,1)
console.log(`Remova o segundo item do terceiro array`)
console.log(`Original: ${bagunca}`)
console.log(`Cópia: ${baguncaCopia}`)
