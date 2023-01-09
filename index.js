const boardRegions = document.querySelectorAll(`#gameBoard span`) // Pegando todos os elementos da minha section idgameboard span
let  vBoard = []
let turnPlayer = ``

function updateTitle(){
        const playerInput = document.getElementById(turnPlayer) // selecionando o jogador que fara a jogada da vez pegando a variavel criada acima com uma string vazia
        document.getElementById(`turnPlayer`).innerText = playerInput.value // seleciona o id e passa o valor do player input para o turnPlayer
}
function initializeGame(){
        vBoard = [[` `,` `,` `],[` `,` `,` `],[` `,` `,` `]]// criando um array bidimensional com três linhas com 3 colunas
        turnPlayer = `player1`     // Selecionando o player que começara a partida
        document.querySelector(`h2`).innerHTML = `Vez de: <span id="turnPlayer"></span>`//  Selecionando o elemento h2 e inserindo nele o player que ira fazer a rodada
        updateTitle() //  chamo updatetitle ele pega o player1 e exibe o nome dele 
        boardRegions.forEach(function(element){
                element.classList.remove(`win`) 
                element.innerText = ``
                element.addEventListener(`click`,handleBoardClick)
        })

}
function handleBoardClick(ev){

}
document.getElementById(`start`).addEventListener(`click`,initializeGame)