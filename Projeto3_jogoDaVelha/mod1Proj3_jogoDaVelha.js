//Modulo 1 Projeto 3
//Jogo da Velha
//Dev: Vanderlei do Nascimento Miguel Júnior

const prompt = require('prompt-sync')()
console.clear()

//**************************************************************
//Declaração de variaveis
//**************************************************************

let tabuleiro = [
  [0, 'A', 'B', 'C'],
  [1, '_', '_', '_'],
  [2, '_', '_', '_'],
  [3, '_', '_', '_']
]
let LetraPC = ['A', 'B', 'C']
let lineUser = 0
let columUser = 'A'
let linePC = 0
let columPC = 'A'
let symbol = 'X'
let symbolUser = 0
let symbolPC = 0
let endGame = 'N'
let positionFree = 'N'

//******************************************************************
//Interação com usuario, selecionar simbolo, linha e coluna
//******************************************************************
console.log('Vamos jogar o classico Jogo da Velha!!!!')
console.log('Vamos começar a jogar!!!!!!')

//escolha x ou 0
symbol = +prompt('\nEscolha seu símbolo para jogar [1]X ou [2]O: ')
while (symbol != 1 && symbol != 2) {
  console.log('\nDigite apenas 1 ou 2')
  symbol = +prompt('Escolha seu símbolo para jogar [1]X ou [2]O: ')
}
if (symbol == 1) {
  symbolUser = 'X'
  symbolPC = 'O'
} else {
  symbolUser = 'O'
  symbolPC = 'X'
}

//mostra tabuleiro
console.log(tabuleiro)

//logica
while (endGame == 'N') {
  while (positionFree == 'N') {
    //Usuario escolha a linha
    lineUser = +prompt('Escolha a linha 1, 2 ou 3 que deseja jogar: ')
    while (lineUser != 1 && lineUser != 2 && lineUser != 3) {
      console.log('\nDigite apenas [1], [2] ou [3]')
      lineUser = +prompt('Escolha a linha 1, 2 ou 3 que deseja jogar: ')
    }
    //Usuario escolha coluna
    columUser = prompt('Escolha a coluna A, B ou C que deseja jogar: ')
    while (
      columUser != 'a' &&
      columUser != 'b' &&
      columUser != 'c' &&
      columUser != 'A' &&
      columUser != 'B' &&
      columUser != 'C'
    ) {
      console.log()
      console.log('\nDigite apenas [A], [B] ou [C]')
      columUser = prompt('Escolha a coluna A, B ou C que deseja jogar: ')
      console.log()
    }

    //Verifica posicao livre
    positionFree = posicao(lineUser, columUser)
  }
  positionFree = 'N'
  //coloca escolha no tabuleiro
  escolha(symbolUser, lineUser, columUser)

  //verifica se conclui o jogo
  endGame = ganhador()

  if ((endGame = 'N')) {
    while (positionFree == 'N') {
      columPC = LetraPC[Math.floor(Math.random() * 3)]
      linePC = Math.floor(Math.random() * 3 + 1)
      positionFree = posicao(linePC, columPC)
    }
    positionFree = 'N'
    //coloca escolha no tabuleiro
    escolha(symbolPC, linePC, columPC)

    //verifica se conclui o jogo
    endGame = ganhador()
  }
  console.log(tabuleiro)
}

//Mostra na tela quem foi o ganhador
if (
  (endGame == 'O' && symbolUser == 'O') ||
  (endGame == 'X' && symbolUser == 'X')
) {
  console.log('\nParabens você foi o ganhador!!!!!!!')
} else if (
  (endGame == 'O' && symbolPC == 'O') ||
  (endGame == 'X' && symbolPC == 'X')
) {
  console.log('\nVocê perdeu!!!!!!')
}

//******************************************************************
//Funções
//******************************************************************

//função escolha de posição
function escolha(simbol, lin, colun) {
  console.log(simbol)
  console.log(lin)
  console.log(colun)
  if (lin == 1 && colun == 'A') {
    tabuleiro[1][1] = simbol
  } else if (lin == 1 && colun == 'B') {
    tabuleiro[1][2] = simbol
  } else if (lin == 1 && colun == 'C') {
    tabuleiro[1][3] = simbol
  } else if (lin == 2 && colun == 'A') {
    tabuleiro[2][1] = simbol
  } else if (lin == 2 && colun == 'B') {
    tabuleiro[2][2] = simbol
  } else if (lin == 2 && colun == 'C') {
    tabuleiro[2][3] = simbol
  } else if (lin == 3 && colun == 'A') {
    tabuleiro[3][1] = simbol
  } else if (lin == 3 && colun == 'B') {
    tabuleiro[3][2] = simbol
  } else if (lin == 3 && colun == 'C') {
    tabuleiro[3][3] = simbol
  }
}

//função verifica se houve ganhador
function ganhador() {
  let venceu = 'Y'
  if (
    tabuleiro[1][1] == 'O' &&
    tabuleiro[1][2] == 'O' &&
    tabuleiro[1][3] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[2][1] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[2][3] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[3][1] == 'O' &&
    tabuleiro[3][2] == 'O' &&
    tabuleiro[3][3] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[1][1] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[3][3] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[1][3] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[3][1] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[1][1] == 'O' &&
    tabuleiro[2][1] == 'O' &&
    tabuleiro[3][1] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[1][2] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[3][2] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[1][3] == 'O' &&
    tabuleiro[2][3] == 'O' &&
    tabuleiro[3][3] == 'O'
  ) {
    venceu = '0'
  } else if (
    tabuleiro[1][1] == 'X' &&
    tabuleiro[1][2] == 'X' &&
    tabuleiro[1][3] == 'X'
  ) {
    venceu = '1'
  } else if (
    tabuleiro[2][1] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[2][3] == 'X'
  ) {
    venceu = '1'
  } else if (
    tabuleiro[3][1] == 'X' &&
    tabuleiro[3][2] == 'X' &&
    tabuleiro[3][3] == 'X'
  ) {
    venceu = '1'
  } else if (
    tabuleiro[1][1] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[3][3] == 'X'
  ) {
    venceu = '1'
  } else if (
    tabuleiro[1][3] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[3][1] == 'X'
  ) {
    venceu = '1'
  } else if (
    tabuleiro[1][1] == 'X' &&
    tabuleiro[2][1] == 'X' &&
    tabuleiro[3][1] == 'X'
  ) {
    venceu = '1'
  } else if (
    tabuleiro[1][2] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[3][2] == 'X'
  ) {
    venceu = '1'
  } else if (
    tabuleiro[1][3] == 'X' &&
    tabuleiro[2][3] == 'X' &&
    tabuleiro[3][3] == 'X'
  ) {
    venceu = '1'
  }
  if (venceu == 0) {
    return 'O'
  } else if (venceu == 1) {
    return 'X'
  } else {
    return 'N'
  }
}

//função verifica posição livre
function posicao(linha, coluna) {
  let posicaoLivre2 = 'N'
  if (
    (tabuleiro[1][1] == '_' && linha == 1 && coluna == 'A') ||
    (tabuleiro[1][2] == '_' && linha == 1 && coluna == 'B') ||
    (tabuleiro[1][3] == '_' && linha == 1 && coluna == 'C') ||
    (tabuleiro[2][1] == '_' && linha == 2 && coluna == 'A') ||
    (tabuleiro[2][2] == '_' && linha == 2 && coluna == 'B') ||
    (tabuleiro[2][3] == '_' && linha == 2 && coluna == 'C') ||
    (tabuleiro[3][1] == '_' && linha == 3 && coluna == 'A') ||
    (tabuleiro[3][2] == '_' && linha == 3 && coluna == 'B') ||
    (tabuleiro[3][3] == '_' && linha == 3 && coluna == 'C')
  ) {
    posicaoLivre2 = 'S'
    return 'S'
  } else {
    posicaoLivre2 = 'N'
    return 'N'
  }
}
