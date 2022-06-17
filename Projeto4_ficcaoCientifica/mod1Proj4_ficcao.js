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
let escolhaLuta = 0
let confianca = true
let proposta = true
let desistir = false
let resultadoLuta = 'ninguem'

let dados = {
  dia: 1,
  forca: 100,
  energia: 100,
  periodo: 'manha',
  turno: 1,
  forcaLider: 300,

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
    if (this.forca < 0) {
      this.forca = 0
    }
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
  },

  mudaForcaLider: function (pontos) {
    this.forcaLider += pontos
    if (this.forcaLider < 0) {
      this.forcaLider = 0
    }
    console.log(`O lider perdeu ${pontos} de força`)
  }
}

let escolhaPrincipal = [
  `\n[1] Treinar`,
  `\n[2] Alimentar`,
  '\n[3] Desafiar mestre',
  `\n[4] Desafiar lider Supremo`,
  `\n[5] Descansar`,
  '\n[6] Desistir de todo o treinamento'
]

//******************************************************************
//Funções
//******************************************************************

//Função escolha aleatoria
function aleatorio() {
  let num = Math.floor(Math.random() * 3 + 1)
  return num
}

//Função Continuar historia
function continuar() {
  console.log()
  prompt(`Pressione ENTER para continuar...`)
}

//Função escolha Treinamento
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
        'Você e seu companheiro realizaram um treinamento forte, onde você conseguiu um aumento consideravel de força, porem foi muito desgastante, consumindo energia também'
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
      dados.mudaEnergia(-20)
      dados.mudaForca(30)
    } else if (escolhaAleatoria == 3) {
      console.log('Você montou uma armadilha e conseguiu capturar um javali')
      dados.mudaForca(30)
    }
  }
}

//Função escolha ganhar energia
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
      dados.mudaForca(20)
    } else if (escolhaAleatoria == 3) {
      console.log('Você montou uma armadilha e conseguiu capturar um javali')
      dados.mudaEnergia(30)
    }
  }
}

//Função escolha Desafiar Mestre
function desafiarMestre() {
  console.log('A luta com seu mestre irá iniciar esteja preparado: ')
  continuar()
  console.clear()
  if (dados.forca < 150) {
    console.log(
      `${personagem}, eu te derrotei com facilidade, você deve aumentar sua força se quer me derrotar e principalmente derrotar o lider supremo. `
    )
    dados.mudaEnergia(-30)
  } else if (dados.forca >= 150 && dados.forca < 250) {
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

//Função escolha Desafiar o lider Supremo
function desafiarLiderSupremo() {
  console.log(`Chegou o grande dia, você acredita estar preparado para o duelo com o lider supremo e vai até o castelo.
  o campo de batalha está preparado e vamos iniciar o duelo:`)

  while (resultadoLuta == 'ninguem') {
    continuar()
    console.clear()
    console.log(`
    ${personagem}, Força ${dados.forca}
    Lider, Força ${dados.forcaLider}`)

    console.log(`\n${personagem} Escolha sua ação: 
  [1] - Atacar
  [2] - Defender
  `)
    escolhaLuta = +prompt()
    while (escolhaLuta != 1 && escolhaLuta != 2) {
      console.log('\nDigite apenas [1], [2]')
      escolhaLuta = +prompt()
    }
    if (escolhaLuta == 1) {
      escolhaAleatoria = aleatorio()
      if (escolhaAleatoria == 1) {
        console.log(
          'O ataque teve sucesso e o lider supremo não conseguiu defender'
        )
        dados.mudaForcaLider(-40)
      } else if (escolhaAleatoria == 2) {
        console.log(
          'O lider supremo desviou de seu ataque e lhe acertou em seguida'
        )
        dados.mudaForca(-20)
      } else if (escolhaAleatoria == 3) {
        console.log('O lider supremo conseguiu defender o ataque')

        dados.mudaForcaLider(-10)
      }
    } else if (escolhaLuta == 2) {
      escolhaAleatoria = aleatorio()
      if (escolhaAleatoria == 1) {
        console.log(
          'Você defendeu bem o ataque do Lider e ainda conseguiu contra atacar em seguida'
        )

        dados.mudaForcaLider(-20)
      } else if (escolhaAleatoria == 2) {
        console.log(
          'O Lider conseguiu ultrapassar a sua defesa e lhe atingiu um golpe poderoso'
        )
        dados.mudaForca(-30)
      } else if (escolhaAleatoria == 3) {
        console.log('Você defendeu o ataque')
      }
    }
    if (dados.forca == 0) {
      resultadoLuta = 'lider'
      return 'lider'
    } else if (dados.forcaLider == 0) {
      resultadoLuta = 'personagem'
      return 'personagem'
    } else {
      resultadoLuta = 'ninguem'
    }
  }
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
  `O nome do samurai é ${personagem}, ele precisa treinar e conseguir primeiramente ganhar de seu mestre que irá avalia-lo se esta pronto para o desafio com o lider supremo.
  Seu mestre irá orienta-lo em escolhas que deverão ser realizadas 1 a cada periodo do dia, manhã, tarde e noite`
)
console.log()

//******************************************************************
//Menu de escolhas principais
//******************************************************************

while (
  vida === true &&
  confianca === true &&
  desistir == false &&
  resultadoLuta == 'ninguem'
) {
  continuar()
  console.clear()
  //Atualiazação de dados principais

  dados.mudaPeriodo(dados.turno)
  console.log(`\nVocê esta no dia ${dados.dia},
  no periodo da ${dados.periodo},
  com ${dados.energia} de energia e
  ${dados.forca} de força`)
  console.log()

  //Encontro com lider supremo
  if (dados.forca >= 200 && proposta == true && dados.turno <= 3) {
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
      console.log(
        `${personagem}, surpreende em sua decisão e escolhe se juntar ao lider supremo.`
      )
      console.log()
      confianca = false
      proposta = false
      continue
    } else {
      console.log(
        'Você é pior do que eu imaginava, nunca me juntarei a você e quero desafia-lo aqui mesmo para um duelo pelo governo da ilha'
      )
      console.log()
      retorno = desafiarLiderSupremo()
      proposta = false
      if (retorno == 'lider') {
        resultadoLuta = 'lider'
        console.log('O Lider venceu o desafio')
      } else if (retorno == 'personagem') {
        resultadoLuta = 'personagem'
        console.log('Você venceu o desafio')
      }
      continue
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
    escolha != 5 &&
    escolha != 6
  ) {
    console.log('\nDigite apenas [1], [2], [3], [4], [5] ou [6]')
    escolha = +prompt()
  }
  console.log()

  //Resultado das escolhas principais

  //Escolha principal opção 1
  if (escolha == 1) {
    console.log(`${personagem}: escolheu treinar`)
    console.log()
    if (dados.turno >= 4) {
      console.log('Você já treinou nos três periodos, melhor ir descansar')
    } else if (dados.energia <= 150) {
      console.log(
        'Você está com pouca energia para treinar, tente se alimentar primeiro!'
      )
    } else {
      treinamento()
      dados.turno++
    }

    //Escolha principal opção 2
  } else if (escolha == 2) {
    if (dados.turno >= 4) {
      console.log('Você já treinou nos três periodos, melhor ir descansar')
    } else {
      console.log(`${personagem}: escolheu se alimentar`)
      console.log()
      ganharEnergia()
      dados.turno++
    }

    //Escolha principal opção 3
  } else if (escolha == 3) {
    console.log(`${personagem}: escolheu desafiar o mestre`)
    console.log()
    if (dados.turno >= 4) {
      console.log('Você já treinou nos três periodos, melhor ir descansar')
    } else if (dados.energia <= 150) {
      console.log(
        'Você está com pouca energia para enfrentar o mestre, tente se alimentar primeiro!'
      )
    } else {
      desafiarMestre()
      dados.turno++
    }

    //Escolha principal opção 4
  } else if (escolha == 4) {
    console.log(`${personagem}: escolheu desafiar o lider supremo`)
    console.log()
    if (dados.turno >= 4) {
      console.log('Você já treinou nos três periodos, melhor ir descansar')
    } else if (dados.energia <= 200) {
      console.log(
        'Você está com pouca energia para desafiar o lider supremo, tente se alimentar primeiro!'
      )
    } else {
      retorno = desafiarLiderSupremo()
      if (retorno == 'lider') {
        console.log('O Lider venceu o desafio')
      } else {
        console.log('Você venceu o desafio')
      }
      continuar()
      console.clear()
    }

    //Escolha principal opção 5
  } else if (escolha == 5) {
    if (dados.turno >= 3) {
      dados.mudaEnergia(30)
    } else if (dados.turno == 2) {
      dados.mudaEnergia(10)
    }
    dados.turno = 1
    dados.dia++

    console.log('Você completou mais um dia, continue sua jornada')

    //Escolha principal opção 6
  } else if (escolha == 6) {
    console.log(`${personagem}: escolheu desistir`)

    desistir = true
    console.log()
    continuar()
    console.clear()
  }
}

//******************************************************************
//Mensagens Finais
//******************************************************************

console.clear()

if (confianca == false) {
  console.log(`${personagem} cansado do treinamento e da vida na vila, fica encantado com a proposta do lider supremo
  Esquece o povo e se junta ao Governo do Lider em troca de beneficios pessoais.`)
} else if (desistir == true) {
  console.log(
    `Com o intenso treinamento ${personagem} resolveu desistir e seguir a vida como habitante normal na vila, mesmo insatisfeito com as escolha de governo do lider supremo.`
  )
} else if (retorno == 'lider') {
  console.log(
    `${personagem} acaba sendo derrotado e morto, como grande guerreiro e lenda, simbolo da resistencia do governo do Lider Supremo.`
  )
} else if (retorno == 'personagem') {
  console.log(
    `${personagem} vende o desafio e assume o cargo de lider supremo, governando a ilha em favor do povo e ficou conhecido como um grande lider de paz e conforto para seu povo.`
  )
}

console.log()
console.log('FIM DE JOGO!!!!!!!!')
