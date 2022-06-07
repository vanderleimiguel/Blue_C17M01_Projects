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
let LetterPC = ['A', 'B', 'C']
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

//Titulo
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

//Escolhas de posição
while (endGame == 'N') {
  while (positionFree == 'N') {
    //Usuario escolha a linha
    lineUser = +prompt(
      `\nEscolha a linha [1], [2] ou [3] que deseja colocar o ${symbolUser}: `
    )
    while (lineUser != 1 && lineUser != 2 && lineUser != 3) {
      console.log('\nDigite apenas [1], [2] ou [3]')
      lineUser = +prompt(
        `Escolha a linha [1], [2] ou [3] que deseja colocar o ${symbolUser}: `
      )
    }
    //Usuario escolha coluna
    columUser = prompt(
      `Escolha a coluna [A], [B] ou [C] que deseja colocar o ${symbolUser}: `
    ).toUpperCase()
    while (columUser != 'A' && columUser != 'B' && columUser != 'C') {
      console.log()
      console.log('\nDigite apenas [A], [B] ou [C]')
      columUser = prompt(
        `Escolha a coluna [A], [B] ou [C] que deseja colocar o ${symbolUser}: `
      ).toUpperCase()
      console.log()
    }

    //Verifica posicao livre
    positionFree = position(lineUser, columUser)
    if (positionFree == 'N') {
      console.log(`\nPosição ${lineUser}, ${columUser} está ocupada`)
    }
  }
  positionFree = 'N'
  //coloca escolha no tabuleiro
  choice(symbolUser, lineUser, columUser)

  //verifica se conclui o jogo
  endGame = winner()

  if ((endGame = 'N')) {
    while (positionFree == 'N') {
      columPC = LetterPC[Math.floor(Math.random() * 3)]
      linePC = Math.floor(Math.random() * 3 + 1)
      positionFree = position(linePC, columPC)
    }
    positionFree = 'N'
    //coloca escolha no tabuleiro
    choice(symbolPC, linePC, columPC)

    //verifica se conclui o jogo
    endGame = winner()
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
function choice(symbol, line, column) {
  if (line == 1 && column == 'A') {
    tabuleiro[1][1] = symbol
  } else if (line == 1 && column == 'B') {
    tabuleiro[1][2] = symbol
  } else if (line == 1 && column == 'C') {
    tabuleiro[1][3] = symbol
  } else if (line == 2 && column == 'A') {
    tabuleiro[2][1] = symbol
  } else if (line == 2 && column == 'B') {
    tabuleiro[2][2] = symbol
  } else if (line == 2 && column == 'C') {
    tabuleiro[2][3] = symbol
  } else if (line == 3 && column == 'A') {
    tabuleiro[3][1] = symbol
  } else if (line == 3 && column == 'B') {
    tabuleiro[3][2] = symbol
  } else if (line == 3 && column == 'C') {
    tabuleiro[3][3] = symbol
  }
}

//função verifica se houve ganhador
function winner() {
  let venceu = 'N'
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
function position(linha, coluna) {
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
