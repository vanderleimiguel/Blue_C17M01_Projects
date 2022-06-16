//Modulo 1 Projeto 4
//Ficcao cientifica
//Dev: Vanderlei do Nascimento Miguel Júnior

const prompt = require('prompt-sync')()
console.clear()

//**************************************************************
//Declaração de variaveis
//**************************************************************

let personagem = ''
let escolha = 0
let vida = true
let escolhaEnergia = 0
let escolhaTreinamento = 0
let escolhaAleatoria = 0
let escolhaProposta = 0
let confianca = true
let proposta = true

let dados = {
  dia: 1,
  forca: 140,
  energia: 50,
  periodo: 'manha',
  turno: 1,

  mudaPeriodo: function (turno) {
    if (turno == 1) {
      this.periodo = 'manha'
    } else if (turno == 2) {
      this.periodo = 'tarde'
    } else if (turno == 3) {
      this.periodo = 'noite'
    }
  },

  mudaForca: function (pontos) {
    this.forca += pontos
    if (pontos > 0) {
      console.log(`Você ganhou ${pontos} de força`)
    } else {
      console.log(`Você perdeu ${pontos} de força`)
    }
  },

  mudaEnergia: function (pontos) {
    this.energia += pontos
    if (pontos > 0) {
      console.log(`Você ganhou ${pontos} de energia`)
    } else {
      console.log(`Você perdeu ${pontos} de energia`)
    }
  }
}

let escolhaPrincipal = [
  `\n[1] Treinar`,
  `\n[2] Alimentar`,
  '\n[3] Desafiar mestre',
  `\n[4] Desafiar lider Supremo`,
  '\n[5] Desistir'
]

//******************************************************************
//Funções
//******************************************************************

//Função escolha aleatoria
function aleatorio() {
  let num = Math.floor(Math.random() * 3 + 1)
  return num
}

//funcao verifica o que foi digitado
function opcoes(valor) {
  while (valor != 1 && valor != 2 && valor != 3) {
    console.log()
    console.log('\nDigite apenas [1], [2] ou [3]')
  }
}

//Função Continuar historia
function continuar() {
  console.log()
  prompt(`Pressione ENTER para continuar...`)
}

//Função Treinamento
function treinamento() {
  console.log(`\n${personagem} Qual tipo de treinamento deseja realizar: 
    [1] - Treinamento com boneco.
    [2] - Treinamento com companheiro de Luta.
    [3] - Treinamento de caça de animais.
    `)
  escolhaTreinamento = +prompt()
  while (
    escolhaTreinamento != 1 &&
    escolhaTreinamento != 2 &&
    escolhaTreinamento != 3
  ) {
    console.log('\nDigite apenas [1], [2] ou [3]')
    escolhaTreinamento = +prompt()
  }
  if (escolhaTreinamento == 1) {
    console.log(
      'Você fez um treinamento individual e conseguiu melhorar suas habilidades '
    )
    dados.mudaForca(10)
  } else if (escolhaTreinamento == 2) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria == 1) {
      console.log(
        'Você e seu companheiro fizeram um bom treinamento, onde você conseguiu uma boa evolução, consumindo pouca energia'
      )
      dados.mudaEnergia(-10)
      dados.mudaForca(10)
    } else if (escolhaAleatoria == 2) {
      console.log(
        'Você e seu comapnheiro realizaram um treinamento forte, onde você conseguiu um aumento consideravel de força, porem foi muito desgastante, consumindo energia também'
      )
      dados.mudaEnergia(-20)
      dados.mudaForca(20)
    } else if (escolhaAleatoria == 3) {
      console.log(
        'Seu companheiro de luta levou o treinamento como uma batalha real e tentou impressionar o mestre, você venceu porém consumiu demais a sua energia'
      )
      dados.mudaEnergia(-30)
      dados.mudaForca(30)
    }
  } else if (escolhaTreinamento == 3) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria == 1) {
      console.log(
        'Sua caçada foi um sucesso, você acertou um alce em apenas um tiro, nem deu para se cansar'
      )
      dados.mudaEnergia(30)
      dados.mudaForca(10)
    } else if (escolhaAleatoria == 2) {
      console.log(
        'Você encontrou um urso feroz no seu caminho e teve muito trabalho para derrota-lo, conseguiu aumentar sua força, mais lhe custou energia'
      )
      dados.mudaEnergia(-10)
      dados.mudaForca(30)
    } else if (escolhaAleatoria == 3) {
      console.log('Você montou uma armadilha e conseguiu capturar um javali')
      dados.mudaEnergia(30)
    }
  }
}

//Função ganhar energia
function ganharEnergia() {
  console.log(`\n${personagem} para se alimentar temos 3 opções: 
  [1] - Podemos dividir o que temos disponivel.
  [2] - Colher o que plantamos.
  [3] - Caçar algo para comer.
  `)
  escolhaEnergia = +prompt()
  while (escolhaEnergia != 1 && escolhaEnergia != 2 && escolhaEnergia != 3) {
    console.log('\nDigite apenas [1], [2] ou [3]')
    escolhaEnergia = +prompt()
  }

  //Energia Opção 1
  if (escolhaEnergia == 1) {
    console.log(
      'Vamos dividir a colheita do dia anterior, porém temos pouco, ja que você não ajudou na colheita'
    )
    dados.mudaEnergia(10)

    //Energia Opção 2
  } else if (escolhaEnergia == 2) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria <= 2) {
      console.log(
        'A colheita foi muito boa, conseguimos executar o trabalho sem muita força'
      )
      dados.mudaEnergia(20)
    } else {
      console.log(
        'A colheita foi boa, porem as raizes estava muito fortes e tivemos que usar muita força para tira-las'
      )
      dados.mudaEnergia(30)
      dados.mudaForca(-10)
    }

    //Energia Opção 3
  } else if (escolhaEnergia == 3) {
    escolhaAleatoria = aleatorio()
    if (escolhaAleatoria == 1) {
      console.log(
        'Sua caçada foi um sucesso, você acertou um alce em apenas um tiro, nem deu para se cansar'
      )
      dados.mudaEnergia(30)
      dados.mudaForca(10)
    } else if (escolhaAleatoria == 2) {
      console.log(
        'Você encontrou um urso feroz no seu caminho e teve muito trabalho para derrota-lo, conseguiu aumentar sua força, mais lhe custou energia'
      )
      dados.mudaEnergia(-10)
      dados.mudaForca(30)
    } else if (escolhaAleatoria == 3) {
      console.log('Você montou uma armadilha e conseguiu capturar um javali')
      dados.mudaEnergia(30)
    }
  }
}

//Função Desafiar Mestre
function desafiarMestre() {
  console.log('A luta com seu mestre irá iniciar esteja preparado: ')
  continuar()
  console.clear()
  if (dados.forca < 100) {
    console.log(
      `${personagem}, eu te derrotei com facilidade, você deve aumentar sua força se quer me derrotar e principalmente derrotar o lider supremo. `
    )
    dados.mudaEnergia(-30)
  } else if (dados.forca >= 100 && dados.forca < 150) {
    console.log(
      `${personagem}, você me derrotou, porem ainda tem muito que aprender se deseja desafiar o lider supremo. `
    )
    dados.mudaEnergia(-50)
  } else {
    console.log(
      `${personagem}, você conseguiu me derrotar com facilidade, acredito estar preparado para enfretar o lider supremo, porém sempre tome cuidado. `
    )
    dados.mudaEnergia(-50)
  }
}

//Função Desafiar o lider Supremo
function desafiarLiderSupremo() {
  console.log('duelo')
}

//******************************************************************
//Introdução a historia
//******************************************************************

//Introdução

console.log(
  `Em uma ilha remota, dominada pelos samurais, o samurai lider supremo, é muito rigido com seu povo.
  Existe uma tradição onde um outro guerreiro samurai pode desafiar seu lider para conseguir governar a ilha, caso derrote o seu lider.
  Porém todos que tentaram foram mortos, nenhum conseguiu derrubar o lider supremo.
  Em uma pequena vila um existe um antigo mestre que esta treinando um jovem samurai para tentar desafiar o lider e governar com mais paz o povo da ilha.
  O nome do samurai é: ... `
)
console.log()

//nome de seu personagem
personagem = prompt('Qual o nome de seu personagem? ')

console.clear()
console.log(
  `O nome do samurai é ${personagem}, ele precisa treinar e conseguir primeiramente ganhar de seu mestre que irá avalia-lo se esta pronto para o desafio com o lider supremo.`
)
console.log()
continuar()
console.clear()

//******************************************************************
//Menu de escolhas principais
//******************************************************************

while (vida === true && confianca === true) {
  //Atualiazação de dados principais
  if (dados.turno >= 4) {
    dados.turno = 1
    dados.dia++
  }
  dados.mudaPeriodo(dados.turno)
  console.log(`\nVocê esta no dia ${dados.dia},
  no periodo da ${dados.periodo},
  com ${dados.energia} de energia e
  ${dados.forca} de força`)
  console.log()

  //Encontro com lider supremo
  if (dados.forca >= 150 && proposta == true) {
    console.log(`O samurai lider supremo, soube do samurai ${personagem}, um jovem muito habilidoso e decidiu encontra-lo pessoalmente.
  Ao encontrar o samurai ${personagem}, o lider supremo fez uma proposta para ele:`)
    console.log()
    console.log(
      `${personagem} eu soube de sua dedicação e evolução, quero que você entre para minha guarda pessoal, lhe ofereço dinheiro e comida em fartura`
    )
    console.log(`\no que decide, esse será sua unica proposta: 
  [1] - Você agradece a proposta e decide continuar em sua vila.
  [2] - Aceita a proposta, trai seu mestre por dinheiro e prazeres para o resto de sua vida.
  [3] - Fica com raiva da proposta e decide desafia-lo no mesmo momento.
  `)
    escolhaProposta = +prompt()
    while (
      escolhaProposta != 1 &&
      escolhaProposta != 2 &&
      escolhaProposta != 3
    ) {
      console.log('\nDigite apenas [1], [2] ou [3]')
      escolhaProposta = +prompt()
    }
    console.log()
    if (escolhaProposta == 1) {
      console.log(
        'Obrigado pelo proposta grande lider supremo, mais no momento prefiro continar em minha pequena vila'
      )
      console.log()
      proposta = false
    } else if (escolhaProposta == 2) {
      console.log('Otima proposta, eu aceito lutar ao seu lado ')
      console.log()
      confianca = false
      proposta = false
      continue
    } else {
      console.log(
        'Você é pior do que eu imaginava, nunca me juntarei a você e quero desafia-lo aqui mesmo para um duelo pelo governo da ilha'
      )
      console.log()
      desafiarLiderSupremo()
      proposta = false
    }
  }

  //Escolha principal da atividade a ser realizada
  console.log(
    `${personagem} Escolha o que deseja fazer no momento: ${escolhaPrincipal}`
  )
  escolha = +prompt()
  while (
    escolha != 1 &&
    escolha != 2 &&
    escolha != 3 &&
    escolha != 4 &&
    escolha != 5
  ) {
    console.log('\nDigite apenas [1], [2], [3], [4] ou [5]')
    escolha = +prompt()
  }
  console.log()

  //Resultado das escolhas principais

  //Escolha principal opção 1
  if (escolha == 1) {
    console.log(`${personagem}: escolheu treinar`)
    console.log()
    if (dados.energia <= 60) {
      console.log(
        'Você está com pouca energia para treinar, tente se alimentar primeiro!'
      )
    } else {
      treinamento()
      dados.turno++
      continuar()
      console.clear()
    }

    //Escolha principal opção 2
  } else if (escolha == 2) {
    console.log(`${personagem}: escolheu se alimentar`)
    console.log()
    ganharEnergia()
    dados.turno++
    continuar()
    console.clear()

    //Escolha principal opção 3
  } else if (escolha == 3) {
    console.log(`${personagem}: escolheu desafiar o mestre`)
    console.log()
    if (dados.energia <= 80) {
      console.log(
        'Você está com pouca energia para enfrentar o mestre, tente se alimentar primeiro!'
      )
    } else {
      desafiarMestre()
    }
    dados.turno++
    continuar()
    console.clear()

    //Escolha principal opção 4
  } else if (escolha == 4) {
    console.log(`${personagem}: escolheu desafiar o lider supremo`)
    console.log()
    retorno = desafiarLiderSupremo()
    dados.turno++
    continuar()
    console.clear()

    //Escolha principal opção 5
  } else if (escolha == 5) {
    console.log(`${personagem}: escolheu desistir`)
    console.log()
  }
}
if (confianca == false) {
  console.log('confianca false')
}
