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
let lineUser1 = 0
let lineUser2 = 0
let columUser1 = 'A'
let columUser2 = 'A'
let symbol = 'X'
let symbolUser1 = 0
let symbolUser2 = 0
let endGame = 'N'
let positionFree = 'N'
let winnerUser1 = 0
let winnerUser2 = 0
let continuar = 'S'
let jogAtual = 0

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
  let venceu = 'Y'
  if (
    tabuleiro[1][1] == 'O' &&
    tabuleiro[1][2] == 'O' &&
    tabuleiro[1][3] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[2][1] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[2][3] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[3][1] == 'O' &&
    tabuleiro[3][2] == 'O' &&
    tabuleiro[3][3] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[1][1] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[3][3] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[1][3] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[3][1] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[1][1] == 'O' &&
    tabuleiro[2][1] == 'O' &&
    tabuleiro[3][1] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[1][2] == 'O' &&
    tabuleiro[2][2] == 'O' &&
    tabuleiro[3][2] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[1][3] == 'O' &&
    tabuleiro[2][3] == 'O' &&
    tabuleiro[3][3] == 'O'
  ) {
    venceu = 0
  } else if (
    tabuleiro[1][1] == 'X' &&
    tabuleiro[1][2] == 'X' &&
    tabuleiro[1][3] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[2][1] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[2][3] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[3][1] == 'X' &&
    tabuleiro[3][2] == 'X' &&
    tabuleiro[3][3] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[1][1] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[3][3] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[1][3] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[3][1] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[1][1] == 'X' &&
    tabuleiro[2][1] == 'X' &&
    tabuleiro[3][1] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[1][2] == 'X' &&
    tabuleiro[2][2] == 'X' &&
    tabuleiro[3][2] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[1][3] == 'X' &&
    tabuleiro[2][3] == 'X' &&
    tabuleiro[3][3] == 'X'
  ) {
    venceu = 1
  } else if (
    tabuleiro[1][1] != '_' &&
    tabuleiro[1][2] != '_' &&
    tabuleiro[1][3] != '_' &&
    tabuleiro[2][1] != '_' &&
    tabuleiro[2][2] != '_' &&
    tabuleiro[2][3] != '_' &&
    tabuleiro[3][1] != '_' &&
    tabuleiro[3][2] != '_' &&
    tabuleiro[3][3] != '_'
  ) {
    venceu = 2
  }

  if (venceu == 0) {
    return 'O'
  } else if (venceu == 1) {
    return 'X'
  } else if (venceu == 2) {
    return 'E'
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

//função de escolha de linha
function choiceline() {
  let lineFunction
  lineFunction = +prompt(
    `\nJogador ${jogAtual} escolha a linha [1], [2] ou [3] que deseja colocar o ${symbolUser1}: `
  )
  while (lineFunction != 1 && lineFunction != 2 && lineFunction != 3) {
    console.log('\nDigite apenas [1], [2] ou [3]')
    lineFunction = +prompt(
      `Jogador ${jogAtual} escolha a linha [1], [2] ou [3] que deseja colocar o ${symbolUser1}: `
    )
  }
  return lineFunction
}

//função de escolha de coluna
function choiceColumn() {
  let columnFunction
  columnFunction = prompt(
    `Jogador ${jogAtual} escolha a coluna [A], [B] ou [C] que deseja colocar o ${symbolUser1}: `
  ).toUpperCase()
  while (
    columnFunction != 'A' &&
    columnFunction != 'B' &&
    columnFunction != 'C'
  ) {
    console.log()
    console.log('\nDigite apenas [A], [B] ou [C]')
    columnFunction = prompt(
      `Jogador ${jogAtual} escolha a coluna [A], [B] ou [C] que deseja colocar o ${symbolUser1}: `
    ).toUpperCase()
    console.log()
  }
  return columnFunction
}

//******************************************************************
//Interação com usuario, selecionar simbolo, linha e coluna
//******************************************************************

//Titulo
console.log('Vamos jogar o classico Jogo da Velha!!!!')
console.log('Vamos começar a jogar!!!!!!')

//Quantidade de jogadores
usuario = +prompt(
  '\nDeseja jogar contra: [1] Computador ou com [2] Outra pessoa?'
)
while (usuario != 1 && usuario != 2) {
  console.log('\nDigite apenas 1 ou 2')
  usuario = +prompt(
    'Deseja jogar contra [1] outra pessoa ou com [2] Computador?'
  )
}

//escolha x ou 0
symbol = +prompt('\nJogador 1 escolha seu símbolo para jogar [1] X ou [2] O: ')
while (symbol != 1 && symbol != 2) {
  console.log('\nDigite apenas 1 ou 2')
  symbol = +prompt('Jogador 1 escolha seu símbolo para jogar [1] X ou [2] O: ')
}
if (symbol == 1) {
  symbolUser1 = 'X'
  symbolUser2 = 'O'
} else {
  symbolUser1 = 'O'
  symbolUser2 = 'X'
}

//mostra tabuleiro
console.log(tabuleiro)

//Escolhas de posição
while (continuar == 'S') {
  while (endGame == 'N') {
    while (positionFree == 'N') {
      //Usuario escolha a linha
      jogAtual = 1
      lineUser1 = choiceline()

      //Usuario escolha coluna
      columUser1 = choiceColumn()

      //Verifica posicao livre
      positionFree = position(lineUser1, columUser1)
      if (positionFree == 'N') {
        console.log(`\nPosição ${lineUser1}, ${columUser1} está ocupada`)
      }
    }
    positionFree = 'N'
    //coloca escolha no tabuleiro
    choice(symbolUser1, lineUser1, columUser1)

    //mostra tabuleiro
    if (usuario == 2) {
      console.log(tabuleiro)
    }

    //verifica se usuario ganhou o jogo
    endGame = winner()

    if (endGame == 'N') {
      while (positionFree == 'N') {
        if (usuario == 1) {
          columUser2 = LetterPC[Math.floor(Math.random() * 3)]
          lineUser2 = Math.floor(Math.random() * 3 + 1)
          positionFree = position(lineUser2, columUser2)
        } else if (usuario == 2) {
          //Usuario 2 escolha a linha
          jogAtual = 2
          lineUser2 = choiceline()
          //Usuario escolha coluna
          columUser2 = choiceColumn()

          //Verifica posicao livre
          positionFree = position(lineUser2, columUser2)
          if (positionFree == 'N') {
            console.log(`\nPosição ${lineUser2}, ${columUser2} está ocupada`)
          }
        }
      }
      positionFree = 'N'
      //coloca escolha no tabuleiro
      choice(symbolUser2, lineUser2, columUser2)

      //verifica PC ganhou o jogo
      endGame = winner()
    }

    console.log(tabuleiro)
  }

  //Mostra na tela quem foi o ganhador
  if (
    (endGame == 'O' && symbolUser1 == 'O') ||
    (endGame == 'X' && symbolUser1 == 'X')
  ) {
    winnerUser1++
    console.log(
      `\nO jogador 1 ganhou ${winnerUser1} vezes e o Jogador 2 ganhou ${winnerUser2} vezes`
    )
  } else if (
    (endGame == 'O' && symbolUser2 == 'O') ||
    (endGame == 'X' && symbolUser2 == 'X')
  ) {
    winnerUser2++
    console.log(
      `\n O jogador 1 ganhou ${winnerUser1} vezes e o Jogador 2 ganhou ${winnerUser2} vezes`
    )
  } else if (endGame == 'E') {
    console.log('\nJogo empatado!!!!!!')
    console.log(
      `O jogador 1 ganhou ${winnerUser1} vezes e o Jogador 2 ganhou ${winnerUser2} vezes`
    )
  }

  //Verifica se quer continuar ou terminar a jogar
  continuar = prompt('Deseja continuar [S/N]').toUpperCase()
  while (continuar != 'S' && continuar != 'N') {
    continuar = prompt('Deseja continuar [S/N]').toUpperCase()
  }
  if (continuar == 'N') {
    //verifica o ganhador geral
    console.log(`\nFim de Jogo`)
    if (winnerUser1 > winnerUser2) {
      console.log(
        `O jogador 1 é o grande campeão com ${winnerUser1} vitórias contra ${winnerUser2} vitórias do jogador 2`
      )
    } else if (winnerUser1 < winnerUser2) {
      console.log(
        `O jogador 2 é o grande campeão com ${winnerUser2} vitórias contra ${winnerUser1} vitórias do jogador 1`
      )
    } else {
      console.log(
        `O jogo ficou empatado com ${winnerUser1} vitórias do jogador 1 e ${winnerUser2} vitórias do jogador 2`
      )
    }
  }
  //zerando variaveis
  endGame = 'N'
  tabuleiro = [
    [0, 'A', 'B', 'C'],
    [1, '_', '_', '_'],
    [2, '_', '_', '_'],
    [3, '_', '_', '_']
  ]
}
