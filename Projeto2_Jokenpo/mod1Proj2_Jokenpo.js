//Modulo 1 Projeto 2
//Jokenpo
//Dev: Vanderlei do Nascimento Miguel Júnior

const prompt = require('prompt-sync')()

const opcoes = ['Pedra', 'Papel', 'Tesoura']
let vitoriaUsuario = 0
let vitoriaComputador = 0
let continuar = 'S'

while (continuar == 'S') {
  console.log('Jogo Jokenpô')
  const rodadas = +prompt('\nEscolha quantas rodadas deseja jogar: ')

  for (let i = 0; i < rodadas; i++) {
    console.log('\nDigite a opção conforme tabela abaixo: ')
    console.log()
    console.log('[0] Pedra \n[1] Papel \n[2] Tesoura')
    let opcaoUsuario = +prompt('\nQual sua opção: ')

    while (opcaoUsuario > 2 || isNaN(opcaoUsuario)) {
      console.log()
      opcaoUsuario = +prompt(
        'Escolha entre: \n[0] Pedra [1] Papel [2] Tesoura \nQual sua opção: '
      )
    }

    const opcaoComputador = Math.floor(Math.random() * 3)
    console.log()
    console.log(`Você escolheu: ${opcoes[opcaoUsuario]}`)
    console.log(`O computador escolheu: ${opcoes[opcaoComputador]}`)

    if (opcaoUsuario == opcaoComputador) {
      console.log('\n\nEmpatou')
    } else if (
      (opcaoUsuario == 0 && opcaoComputador == 2) ||
      (opcaoUsuario == 1 && opcaoComputador == 0) ||
      (opcaoUsuario == 2 && opcaoComputador == 1)
    ) {
      console.log('\n\nVocê Ganhou!!!!')
      vitoriaUsuario++
    } else {
      console.log('\n\nVocê Perdeu!!!!!')
      vitoriaComputador++
    }
  }

  console.log(`\nVocê venceu ${vitoriaUsuario} vezes`)
  console.log(`O computador venceu ${vitoriaComputador} vezes`)
  console.log()

  if (vitoriaUsuario > vitoriaComputador) {
    console.log('Você é o campeão!!!!!')
  } else if (vitoriaUsuario < vitoriaComputador) {
    console.log('O Computador é o campeão!!!!!')
  } else {
    console.log('O jogo empatou!!!!')
  }

  continuar = prompt('Deseja continuar [S/N]').toUpperCase()
  while (continuar != 'S' && continuar != 'N') {
    continuar = prompt('Deseja continuar [S/N]').toUpperCase()
  }
}
