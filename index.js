const boardRegions = document.querySelectorAll(`#gameBoard span`) // Pegando todos os elementos da minha section idgameboard span
let  vBoard = [ ]
let turnPlayer = `` // Jogador da vez 

function updateTitle(){ // serve para mostrar o jogador da vez  
        const playerInput = document.getElementById(turnPlayer) // selecionando o jogador que fara a jogada da vez pegando a variavel criada acima com uma string vazia
        document.getElementById(`turnPlayer`).innerText = playerInput.value // seleciona o id e passa o valor do playerInput para o turnPlayer variavel criada acima com uma string vazia
}
function initializeGame(){// preperação para começar o jogo
        vBoard =[['', '', ''], ['', '', ''], ['', '', '']]// criando um array bidimensional com três linhas com 3 colunas
        turnPlayer = `player1`     // Selecionando o player1 que começara a partida
        document.querySelector(`h2`).innerHTML = `Vez de: <span id="turnPlayer"></span>`//  Selecionando o elemento h2 e inserindo nele o player que ira fazer a rodada
        updateTitle() //  chamo a função  updatetitle ele pega o player1 e exibe o nome dele 
        boardRegions.forEach(function(element){   
                element.classList.remove(`win`) 
                element.innerText = ``
                element.classList.add(`cursor-pointer`)
                element.addEventListener(`click`,handleBoardClick) // Adicionando um evento de click no board regions
        })

}
function disableRegions(element){
        element.style.cursor = `default`
        element.removeEventListener(`click`, handleBoardClick) // Retirando o evento click no boardRegions
}
function handleBoardClick(ev){
        console.log(`Clicou`)
        const span = ev.currentTarget
        const region = ev.currentTarget.dataset.region // n.n
        const rowColumPair = region.split(`.`) //  Cria um array [`n`,`n`]
        const row = rowColumPair[0] // Aqui to selecionando a linha na posição zero
        const colum = rowColumPair[1] //  aqui to selecionando a coluna na posição 1
        if(turnPlayer === `player1`){
                span.innerText = `X`
                vBoard[row][colum] = `X`
        }
        else {
                span.innerHTML = `O`
                vBoard[row][colum] = `O`
        }
        console.clear()
        console.table(vBoard)
        // Desabilita a região clicada
        disableRegions(span)
        // Verifica se alguém venceu
        const winRegions = getWinRegions()
        if (winRegions.length > 0) {
        } else if (vBoard.flat().includes('')) {
          turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
          updateTitle()
        } else {
          document.querySelector('h2').innerHTML = 'Empate!'
        }
}

function getWinRegions(){
        const winRegions = []
        if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
                winRegions.push(`0.0`,`0.1`,`0.2`)
        if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
                winRegions.push(`1.0`,`1.1`,`1.2`)
        if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
                winRegions.push(`2.0`,`2.1`,`2.2`)
        if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
                winRegions.push(`0.0`,`1.0`,`2.0`)
        if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
                winRegions.push(`0.1`,`1.1`,`2.1`)
        if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
                winRegions.push(`0.2`,`1.2`,`2.2`)
        if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
                winRegions.push(`0.0`,`1.1`,`2.2`)
        if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
                winRegions.push(`0.2`,`1.1`,`2.0`)
        return winRegions
}
document.getElementById(`start`).addEventListener(`click`,initializeGame)