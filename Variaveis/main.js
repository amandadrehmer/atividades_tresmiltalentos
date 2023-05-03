// EXERCÍCIOS - INTERPRETAÇÃO
// 1) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a1 = 10
let b1 = 10

console.log(b)

b = 5
console.log(a1, b1)

// Será impresso primeiramente o 10 (do B) e depois o 10, 5 (A e a nova atribuição da variável B)

// ---------------------------------------------------------------------------------

// 2) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a2 = 10
let b2 = 20
c = a
b = c
a = b

console.log(a, b, c)

// Será impresso: 10, 10, 10

// ---------------------------------------------------------------------------------

// 3) Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/* MELHORIAS:
let horasTrabalho = prompt("Quantas horas você trabalha por dia?")
let recebeDia= prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalho/recebeDia} por hora`)
*/

// ---------------------------------------------------------------------------------
// EXERCÍCIOS - ESCRITA
/* 1. Construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

    g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu */

let nome
let age
console.log(typeof nome)
console.log (typeof age)
// O tipo impresso foi: undefined; Pois a variável não foi definida a nenhum tipo de dado.

nome = prompt("Escreva o seu nome: ")
age = parseInt(prompt("Escreva a sua idade: "))
console.log(typeof nome)
console.log (typeof age)
// Irá aparecer "string" e "number", pois o prompt sempre retorna, como padrão, uma string e o comando "parseInt" transforma o prompt em número inteiro/number.

console.log(`Olá ${nome}, você tem ${age}. Onde ${nome} e ${age} são os valores que o usuário inseriu.`)

// ---------------------------------------------------------------------------------

/* 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. */

const ask1 = prompt("Você gosta de One Direction? Digite 'S' ou 'N'")
const ask2 = prompt("Você se acha legal? Digite 'S' ou 'N'")
const ask3 = prompt("Você gosta de banana? Digite 'S' ou 'N'")

console.log(`${ask1} gosto do One Direction. ${ask2} me acho legal. ${ask3} gosto de banana.`)

// ---------------------------------------------------------------------------------

/* 3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial 
let a = 10
let b = 25

Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

Aqui faremos uma lógica para trocar os valores

Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 

*/

let a = 10
let b = 25
let aux1 = a
let aux2 = b

a = aux2
b = aux1

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
