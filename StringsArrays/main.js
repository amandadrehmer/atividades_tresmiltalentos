// Exercícios de interpretação de código
// ===========================================================

// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/* let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor) */

/* console.log('a. ', array) === a. undefined
    Pois a array não foi definida
console.log('b. ', array) === b. null
    Pois a array foi definida como null
console.log('c. ', array.length) === c. 11
    Pois a array foi definida com 11 elementos dentro dela
console.log('d. ', array[i]) === d. 3
    Pois a array anterior definiou o número 3 na posição 0
console.log('e. ', array) === e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    Pois a array foi definida com 11 elementos e o console vai imprimir tudo que tem na array
console.log('f. ', valor) === f. 9
    Pois o i equivale a posição 0 e a variável 'valor' tem como atribuição a posição 0 (i) + 6, ou seja, posição 0 + 6 = posição 6 = 9. Portanto, o console imprimirá f. 9, pois o 9 está na sexta posição.
*/
// -----------------------------------------------------------

// 2. Leia o código abaixo com atenção
/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? */

// SUBI NUM ÔNIBUS EM MIRROCOS 27

// -----------------------------------------------------------

// Exercícios de escrita de código
// ===========================================================

/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! */

// let nome = prompt("Digite o seu nome: ");
// let contact = prompt("Informe o seu e-mail: ");

// console.log(`O e-mail ${contact} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

// -----------------------------------------------------------

/* 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima no console o array completo

    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista */

// let listaComidasFavoritas = ["Moranga", "Sushi", "Feijão", "Abacaxi", "Lasanha"]
// console.log(listaComidasFavoritas);
// console.log("Essas são as minhas comidas preferidas: ");
// console.log(listaComidasFavoritas[0]);
// console.log(listaComidasFavoritas[1]);
// console.log(listaComidasFavoritas[2]);
// console.log(listaComidasFavoritas[3]);
// console.log(listaComidasFavoritas[4]);

// let askUser = prompt("Digite a sua comida favorita: ");
// let removeComida = listaComidasFavoritas.splice(1, 1, askUser);
// console.log(listaComidasFavoritas);

// -----------------------------------------------------------

/* 3. Faça um programa, seguindo os passos:

    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    c) Imprima o array no console

    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2

    e) Remova da lista o item de índice que o usuário escolheu.

    f) Imprima o array no console */

// let listaDeTarefas = []
// let userQuestion0 = prompt("Digite a tarefa do dia: ");
// listaDeTarefas.push(userQuestion0);
// let userQuestion1 = prompt("Digite outra tarefa do dia: ");
// listaDeTarefas.push(userQuestion1);
// let userQuestion2 = prompt("Digite outra tarefa do dia: ");
// listaDeTarefas.push(userQuestion2);

// console.log(listaDeTarefas);
// let userIndice = prompt("Informe o índice (0,1,2) da tarefa que você realizou: ");
// let removeTarefa = listaDeTarefas.splice(userIndice, 1);
// console.log(listaDeTarefas);

// -----------------------------------------------------------

// DESAFIOS
// ===========================================================

/* 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços */

// let receberFrase = prompt("Digite uma frase: ");
// let listaFrase = receberFrase.split("");
// console.log(listaFrase)

// -----------------------------------------------------------

/* 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array */

// let arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// console.log(arrayFrutas.indexOf("Abacaxi"));
// console.log(arrayFrutas.length);