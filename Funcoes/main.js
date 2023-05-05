// -----------------------------------------------------------------------------------------------
// Exercícios de interpretação de código
/* 1. Leia o código abaixo
    
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
    
    a) O que vai ser impresso no console?
    Será impresso: 10 e 50
    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? 
    Não apareceria nada

    */

/* 2. Leia o código abaixo
    
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
a. Explique o que essa função faz e qual é sua utilidade
Essa função retorna true ou false caso há cenoura ou não na resposta do usuário. Não retorna o toLowerCase(), pois o sistema só retorna a última função.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra` 
     
     i. true
     ii. true
     iii. true
     */

// -----------------------------------------------------------------------------------------------
// Exercícios de escrita de código

/* 1. Escreva as funções explicadas abaixo:
    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
    Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
    b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. */

// function informacoes (){
//     return ("Eu sou Amanda, tenho 17 anos, moro em SL e sou estudante.")
// }

// function informacoes2(nome, age, city, job){
//     return (`Eu sou ${nome}, tenho ${age} anos, moro em ${city} e sou ${job}.`)
// }

// let user1 = prompt("Digite o seu nome? ");
// let user2 = Number(prompt("Digite a sua idade: "));
// let user3 = prompt("Qual é a sua cidade? ");
// let user4 = prompt("Informe a sua profissão ");
// console.log(informacoes2(user1,user2,user3,user4));


/* 2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */

// function somaDuas (num1, num2){
//     const soma = num1 + num2
//     return soma
// }
// let user2a = Number(prompt("Digite um número: "));
// let user22 = Number(prompt("Informe outro número: "));
// console.log(somaDuas(user2a, user22));

// function trueOrFalse(num3,num4){
//     return (num3 >= num4)
// }

// let numero2b = Number(prompt("Digite um número: "));
// let numbero2bb = Number(prompt("Digite outro número: "));
// console.log(trueOrFalse(numero2b,numbero2bb))

// function parOuNao(num3){
//     return (num3 %2 === 0)
// }

// let numero2b = Number(prompt("Digite um número: "));
// console.log(parOuNao(numero2b));

// function mensagem(letra){
//     return [letra.length, letra.toLowerCase()]
// };

// let usuario = prompt("Digite algo: ");
// console.log(mensagem(usuario));

/* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10 */

// function soma (num1, num2){
// return (num1+num2)
// };

// function subtracao (num1, num2){
//     return (num1-num2)
// };

// function multiplicacao (num1, num2){
//     return (num1*num2)
// };

// function divisao (num1, num2){
//     return (num1/num2)
// };

// let user0 = Number(prompt("Digite um número: "));
// let user1 = Number(prompt("Informe outro número: "));
// console.log(soma(user0, user1));
// console.log(subtracao(user0, user1));
// console.log(multiplicacao(user0, user1));
// console.log(divisao(user0, user1));

// -----------------------------------------------------------------------------------------------
// DESAFIOS

/* 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
// const imprimir = (parametro) => {
//     console.log(parametro)
// }

b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo */

// const somatoria = (n1,n2) =>{
//     const soma = n1 + n2
//     imprimir(soma)
// }

/* 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. */
