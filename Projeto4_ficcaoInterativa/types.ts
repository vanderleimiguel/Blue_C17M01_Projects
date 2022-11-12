// boolean (true / false)
let isBlue: boolean
isBlue = true

// string ("blue", 'blue', `blue`)
let message: string
message = `blue ${true}`

// number (int, float, hex, binary)
let value: number
value = 12

// array (type[])
let items: string[]
items = ['blue', 'edtech']

// tuple posicao e tipo()
let title: [number, string]
title = [1, 'blue']

// enum
enum Colors {
  white = '#fff',
  blue = '#3944bc'
}

// any (qualquer coisa) NÃO RECOMENDADO!
let thing: any
thing = 1
thing = 'blue'
thing = true

// null / undefined
type Blue = string | undefined

// void (vazio)
// Situação ao qual existe um retorno. Porém um retorno vazio.
function logger() {
  console.log('blue')
}

// never
// Situação onde nunca haverá algum retorno de um metodo ou função;
function error(): never {
  throw new Error('error')
}

// object
let cart: object
cart = {
  key: 'blue'
}

// object key
// para declarar tipagem a um atributo de objeto.
// No exemplo abaixo: a variável 'cart' recebe a tipagem de objeto: por receber o objeto com atributo 'a', que por sua vez recebe o tipo number.
let cart2: { a: number } = {
  a: 1
}

// ------------------------------------------------------------------------------------
// type alias e union

// Id pode receber um valor numério ou uma string ou um valor indefinido.
type Id = number | string | undefined
// atribuindo o tipo Id a uma variável.
let name2: Id
// name possui agora o tipo Id, onde o valor poder ser numérico ou string ou indefinido.

// Platform poderá receber o tipo "windows" ou "Linux" ou "Mac Os".
type Platform = 'Windows' | 'Linux' | 'Mac Os'
let pcSistem: Platform = 'Windows' // sem erro
let pcSistem: Platform = 'batata' // com erro

function logDetails(id: Id, item: string) {
  console.log(`O produto ${id} é um ${item}).`)
}

logDetails(123, 'notebook')
logDetails('123', 'notebook')

function logInfo(id: Id, user: string) {
  console.log(`O usuário ${id} é o ${user}).`)
}

logInfo(123, 'Marcus')
logInfo('123', 'Marcus')

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform('Windows')
renderPlatform('android') // error

// type alias e union

type AccountInfo = {
  id: number
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: 'Thiago'
}

type CharacterInfo = {
  nickname: string
  level: number
}

const character: CharacterInfo = {
  nickname: 'thi.code',
  level: 100
}

// intersection

// intersection
type PlayerInfo = AccountInfo & CharacterInfo

const player: PlayerInfo = {
  name: 'Thiago',
  nickname: 'thi.code',
  id: 123,
  level: 100
}
