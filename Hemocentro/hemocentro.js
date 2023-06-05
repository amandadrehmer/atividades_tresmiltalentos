let listaDoadores = []

function menu(){
    let user = prompt(`===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
    1. Cadastrar doador
    2. Listar doadores
    3. Buscar doador por tipo sanguíneo
    4. Buscar doador por data da última doação
    5. Sair
    Escolha uma opção:`)

    switch(user){
        case '1':
            cadastrarDoador();
            break;
    
        case '2':
            listarDoadores();
            break;
        case "3":
            buscarDoadorTipoSanguineo();
            break
        case "4":
             buscarDoadorDataDoação();
             break
        default:
            break
    
    }
} 

menu()

function cadastrarDoador(){
   
    let doador = {
        nome: prompt('Digite seu nome completo: '),
        idade: Number(prompt('Digite sua idade: ')),
        peso: Number(prompt('Digite seu peso: ')),
        tipoSanguineo: prompt('Digite seu tipo sanguineo: ').toLocaleUpperCase(),
        ultimaDoacao: prompt('Digite a data da sua última doação (dd/mm/aaaa): '),
    }

    listaDoadores.push(doador)


    let usuario = prompt("Quer voltar para o menu?").toLocaleLowerCase();
    if(usuario === 'sim'){
        menu()
    } else (usuario === 'não')
    
}

function listarDoadores() {

    let nomes = ""
    for (let doador of listaDoadores) {
        
        nomes += `LISTAGEM DE DOADORES:
        --------------------
        NOME: ${doador.nome} | IDADE: ${doador.idade} | PESO: ${doador.peso} | TIPO SANGUÍNEO: ${doador.tipoSanguineo} | ÚLTIMA DOAÇÃO: ${doador.ultimaDoacao}
        --------------------`
    }

    alert(nomes)

    let usuario = prompt("Quer voltar para o menu?").toLocaleLowerCase();
    if(usuario === 'sim'){
        menu()
    } else (usuario === 'não')
    
}   

function buscarDoadorTipoSanguineo(){
    let usuarioTipo = prompt("Digite o tipo sanguíneo desejado: ").toLowerCase();
    let texto = ""
    if(listaDoadores.length === 0){
        alert(`Não há cadastro`);
    } else {
        for (let doador of listaDoadores) {
            if (doador.tipoSanguineo.includes(usuarioTipo)) {
                texto += `------------------------
                RESULTADO DA BUSCA:
                ------------------------
                NOME  | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
                -----------------------------------------------------------------
                ${doador.nome}    | ${doador.idade}    |  ${doador.peso}  |      ${doador.tipoSanguineo}        |   ${doador.ultimaDoacao}  
                -----------------------------------------------------------------`}
        }
        alert(texto)
    }

    let usuario = prompt("Quer voltar para o menu?").toLocaleLowerCase();
    if(usuario === 'sim'){
        menu()
    } else(usuario === 'não')
}
    
function buscarDoadorDataDoação(){
    let userData = prompt("Digite a data desejada (dd/mm/aaaa): ").toLowerCase();
    let mensagem = ""
    if(listaDoadores.length === 0){
        alert(`Não a cadastro`);
    } else {
        for (let doador of listaDoadores) {
        if (doador.tipoSanguineo.includes(userData)){
                texto += `------------------------
                RESULTADO DA BUSCA:
                ------------------------
                NOME  | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
                -----------------------------------------------------------------
                ${datas.nome}    | ${datas.idade}    |  ${datas.peso}  |      ${datas.tipoSanguineo}        |   ${datas.ultimaDoacao}  
                -----------------------------------------------------------------`}
        }
        alert(mensagem)
    }

    let usuario = prompt("Quer voltar para o menu?").toLocaleLowerCase();
    if(usuario === 'sim'){
        menu()
    } else(usuario === 'não')
}