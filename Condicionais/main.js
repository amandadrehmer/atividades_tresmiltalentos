// Exercícios de interpretação de código
/* 1. Leia o código abaixo:
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} 

a) Explique o que o código faz. Qual o teste que ele realiza? 

b) Para que tipos de números ele imprime no console "Passou no teste"? 

c) Para que tipos de números a mensagem é "Não passou no teste"? */

// a) O código testa se o número é par ou não. A condição 'numero % 2 === 0' destaca o resto da divisão do número, posto pelo usuário, e caso este resto seja 0, significa que o número é par.
// b) Para os números pares
// c) Para os números ímpares

// ---------------------------------------------------------

/* 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? */

// a) O código acima serve para automatizar a pesquisa do usuário em relação aos preços das frutas de um mercado.
// b) Será impresso: O preço da fruta Maçã é R$ 2.25
// c) A mensagem seria: O preço da fruta Pêra é R$ 5. Ele imprime essa mensagem, pois sem o 'break' o código continua sendo executado até que ocorra essa "quebra" no código.

// ---------------------------------------------------------

/* 3. Leia o código abaixo:
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. */

// a) Na primeira linha há uma variável que guarda a resposta do usuário (um número).

// b) Se o usuário digitar 10, será impresso: Esse número passou no teste. Além disso, será impresso uma mensagem avisando que a variável 'mensagem', não está definida, pois a função 'console.log(mensagem)' está fora da condicional.
// Se o usuário digitar -10, o código não será executado, pois o número não entra na condição 'numero>0', ou seja, o -10 é um número menor que 0. 

// c) Sim, haverá. A variável 'mensagem', não está definida, pois a função 'console.log(mensagem)' está fora da condicional.

// ---------------------------------------------------------------------------------------------
// Exercícios de escrita de código

/* 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."` */

// const user1 = Number(prompt("Digite a sua idade: "));
// if (user1 >= 18){
//     console.log("Você pode dirigir");
// } else if (user1 < 18){
//     console.log("Você não pode dirigir")
// }

// ---------------------------------------------------------

/* 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else */

// const user2 = prompt("Digite o seu turno: 'M' para matutino; 'V' para vespertino ou 'N' para noturno.");
// const letra = user2.toUpperCase()
// if (letra === 'M'){
//     console.log("Bom dia! :)")
// } else if (letra === 'V'){
//     console.log("Boa tarde!")
// } else if (letra === 'N'){
//     console.log("Boa noite!")
// }

// ---------------------------------------------------------

/* 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora. */

// const user3 = prompt("Digite o seu turno: 'M' para matutino; 'V' para vespertino ou 'N' para noturno.")
// const maius = user3.toUpperCase()
// switch (maius) {
//     case 'M':
//         console.log("Bom dia!");
//         break;
//     case 'V':
//         console.log("Boa tarde!");
//         break;
//     case 'N':
//         console.log("Boa noite!");
//         break;
//     default:
//         console.log("Não existe esse turno, meu consagrado.")
//         break;
// }

// ---------------------------------------------------------

/* 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :(" */

// const filme = prompt("Digite o gênero do filme: ");
// const preco = Number(prompt("Digite o preço: "));
// if (filme === 'fantasia' && preco < 15){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// ---------------------------------------------------------------------------------------------
// DESAFIOS

/* 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input. */

/* 2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
        
    - Exemplo de saída: Jogo Nacional
        
        ```
        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ 1980
        Valor total:  R$ 19800
        
        ```
        
    - Exemplo de saída: Jogo Internacional */