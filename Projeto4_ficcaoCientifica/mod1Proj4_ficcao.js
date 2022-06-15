//Modulo 1 Projeto 4
//Ficcao cientifica
//Dev: Vanderlei do Nascimento Miguel Júnior

const prompt = require('prompt-sync')()
console.clear()

//**************************************************************
//Declaração de variaveis
//**************************************************************

let personagem = ''
let qtdInimigos = 0
let escolha = 0
let retorno = ''
let cicloJogo = true
let vida = true
let escolhaTreinamento = 0
let escolhaAleatoria = 0
let num = 0

let dados = {
  dia: 1,
  forca: 1,
  energia: 5
}

let escolha1 = [
  `[1] Treinar`,
  `\n[2] Alimentar`,
  `\n[3] Fazer ronda`,
  `\n[4] Desafiar Samurai Supremo`
]

//******************************************************************
//Funções
//******************************************************************

//Função escolha aleatoria
function aleatorio() {
  let num = Math.floor(Math.random() * 3 + 1)
  return num
}

//Função Treinamento
function treinamento() {
  console.log(dados.energia)
  escolhaTreinamento =
    +prompt(`\n${personagem} Qual tipo de treinamento deseja realizar: 
    [1] - Treinamento com boneco.
    [2] - Treinamento de Luta .
    [3] - Treinamento de caça de animais.
    `)
  if (escolhaTreinamento == 1) {
    dados.energia--
    dados.forca++
  } else if (escolhaTreinamento == 2) {
    dados.energia - 2
    dados.forca + 3
  } else if (escolhaTreinamento == 3) {
    console.log('entrou')
    escolhaAleatoria = aleatorio()
    console.log(`${escolhaAleatoria} numero`)
    if (escolhaAleatoria == 1) {
      console.log(
        'Sua caçada foi um sucesso, você acertou um alce em apenas um tiro, nem deu para se cançar.'
      )
      dados.forca += 2
    } else if (escolhaAleatoria == 2) {
      console.log(
        'Você encontrou um urso feroz no seu caminho e teve muito trabalho para derrota-lo, conseguiu aumentar sua força, mais lhe custou muita energia'
      )
      dados.energia -= 2
      dados.forca += 3
    } else if (escolhaAleatoria == 3) {
      console.log(
        'Você encontrou uma grande patrulha inimiga em seu treinamento e não foi capaz de derrota-los, onde acabou morto em batalha como um verdadeiro guerreiro'
      )
      vida = false
      console.log(dados.energia)
    }
  }
}

//Função alimentação
function alimentacao(escolhaAlimentar) {
  dados.energia++
  return 1
}

//Função Ronda
function ronda() {}

//Função Desafiar o lider
function desafiar() {}

//Função Continuar historia
function continuar() {
  console.log()
  prompt(`Pressione ENTER para continuar...`)
}

//******************************************************************
//Escolhas
//******************************************************************

//Introdução

console.log(
  `Em uma ilha dominada pelos samurais mantinham a paz da ilha como bravos guerreiros!
  Até que um determinado dia o clâ dos ninjas que eram considerados guerreiros inferiores aos samurais, decidiram iniciar uma rebelião.
  Com o plano muito bem orquestrado os ninjas conseguiram dominar o castelo samurai e dominar a liderança da ilha
Após o ataque um samurai sobreviveu, ferido e cansado foi encontrado por um pescador: `
)
continuar()
console.clear()
console.log()

//nome de seu personagem
personagem = prompt('\nPescador: Como você se chama?')
console.log()

console.log(
  `${personagem} Venha a minha casa, posso lhe oferecer comida em troca de segurança da vila enquanto se recupera totalmente, você esta com fome e fraco, para reconquistar o castelo sugiro que você se alimente e treine primeiramente`
)
dados.energia++
console.log(`${personagem} recebeu +1 de alimento`)
continuar()
console.clear()

while (vida === true) {
  console.log(`Você esta no dia ${dados.dia},
  com ${dados.energia} de alimento e
  ${dados.forca} de força`)
  console.log()

  console.log('Escolha o que deseja fazer no momento: ')
  console.log((escolha = +prompt(`${escolha1}`)))

  //Resultado das escolhas

  if (escolha == 1) {
    console.log(`${personagem}: escolheu treinar`)
    if (dados.energia <= 2) {
      console.log(
        'Você está muito fraco para treinar, tente se alimentar primeiro!'
      )
    } else {
      retorno = treinamento()
    }
  } else if (escolha == 2) {
    console.log(`${personagem}: escolheu se alimentar`)
    escolhaAlimentar =
      +prompt(`\n${personagem} para se alimentar temos 3 opções: 
    [1] - Podemos dividir o que temos disponivel.
    [2] - Colher o que plantamos.
    [3] - Tentar caçar algo assim já servindo de treinamento também.
    `)
    retorno = alimentar(escolhaAlimentar)
  } else if (escolha == 3) {
    console.log(`${personagem}: escolheu se fazer a ronda`)
    retorno = ronda()
    dados.energia--
  } else {
    console.log(`${personagem}: escolheu desafiar o lider ninja`)
    retorno = desafiar()
  }
}
