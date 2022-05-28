//Modulo 1 Projeto 1
//Jornada do Heroi
//Dev: Vanderlei do Nascimento Miguel Júnior

const prompt = require('prompt-sync')()

let quantidadeSim = 0

console.log(
  'Com base em analises e estudos realizados em outras edições da copa do mundo de futebol'
)
console.log(
  'foi desenvolvido 5 perguntas chaves para verificar a preparação e chances'
)
console.log('de ganhar a edição atual')
console.log()
console.log(
  'Para saber se está preparado para iniciar e ganhar a Copa do Mundo de 2022, responda as perguntas a seguir: '
)
console.log()
console.log('Responda S para SIM')
console.log('Responda N para NÃO')
console.log()

const perguntas = [
  'Você definiu um esquema tatico?',
  'Você convocou os melhores jogadores de cada posição',
  'Você fez uma boa preparação e treinamento antes de iniciar a copa?',
  'você treinou simulações de situações de jogo?',
  'Você treinou situações de bola parada e penaltis?'
]

for (let i = 0; i <= 4; i++) {
  resposta = prompt(`${perguntas[i]}: `).toUpperCase()

  if (resposta == 'S') {
    quantidadeSim++
  } else if (resposta != 'N') {
    quantidadeSim = -1
    break
  }
}

console.log()

if (quantidadeSim == 5) {
  console.log(
    `Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`
  )
} else if (quantidadeSim == 4) {
  console.log(
    `Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`
  )
} else if (quantidadeSim == 3) {
  console.log(
    `Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`
  )
} else if (quantidadeSim == 1 || quantidadeSim == 2) {
  console.log(`Você falha, mas ainda consegue fugir da situação.`)
} else if (quantidadeSim >= 0) {
  console.log(`Você falha miseravelmente.`)
} else {
  console.log(`Resposta Invalida, responda apenas S para sim e N para não`)
}
