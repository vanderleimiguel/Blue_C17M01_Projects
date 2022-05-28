//Modulo 0 - Projeto 0
//Detetive
//Dev: Vanderlei do Nascimento Miguel Júnior

const prompt = require('prompt-sync')()

let quantidadeSim = 0

const perguntas = [
  'Você esteve proximo a vitima?',
  'Você teve contato com a vitima?',
  'Você falou com a vitima?',
  'Vocês discutiram?',
  'Vocês se agrediram fisicamente?'
]

console.log(
  'Detetive encontra vitima assassinada com uma pessoa proximo ao local'
)
console.log()
console.log('Responda as perguntas a seguir, s para sim, n para não')
console.log()

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

if (quantidadeSim >= 4) {
  console.log(`Você é CULPADO`)
} else if (quantidadeSim == 3) {
  console.log(`Você é SUSPEITO`)
} else if (quantidadeSim >= 0) {
  console.log(`Você é INOCENTE`)
} else {
  console.log(`Resposta Invalida, responda S para sim e N para Não`)
}
