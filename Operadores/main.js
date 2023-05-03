// Exercício de interpretação
/* 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */

// a. false  || b. false || c. true || d. boolean

/* 2. 3. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// O erro está na falta da função Number, pois quando utilizamos prompt nos é retornado uma string. Ou seja, se o user escrever 3 e 4 a funcão soma retornaria '34', mas se utilizármos Number(prompt()) teríamos 7.

// ------------------------------------------------------------------------

// Exercísios de escrita de código

/* 1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo) */

// let age = Number(prompt("Digite a sua idade: "))
// let ageBff = Number(prompt("Digite a idade da (o) sua (seu) melhor amiga(o): "))

// console.log("Sua idade é maior do que a do seu melhor amigo? ", age >= ageBff)
// console.log("Sua idade é maior do que a do seu melhor amigo? ", age - ageBff)

/*2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

// let valpar = Number(prompt("Digite um número PAR: "));
// console.log(valpar%2 === 0);

// c) O padrão será sempre 0, pois para ser par o resto precisa ser dois
// d) Se o usuário inserir um número ímpar o console imprimirá o número 1, pois o resto da divisão de um número ímpar é 1.

/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas */

// let age = Number(prompt("Digite a sua idade: "));
// console.log("A idade do usuário em meses é: ", age*12)
// console.log("A idade do usuário em dias: ", age*365)
// console.log("A idade do usuário em horas: ", age*(365*24))

/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.

*/

// let number1 = Number(prompt("Digite dois número: "))
// let number2 = Number(prompt("Digite o segundo nome: "))

// console.log("O primeiro número é maior que segundo? ", number1 >= number2);
// console.log("O primeiro número é igual ao segundo? ", number1 === number2);
// console.log("O primeiro número é divisível pelo segundo? ", number1%number2===0);
// console.log("O segundo número é divisível pelo segundo? ", number2%number1===0);

