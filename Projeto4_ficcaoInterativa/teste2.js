var x = 3
var y = 4

var sY = 0
var fY = y

contY = 0
contX = 0

if (x == 0) {
  fY = 1
} else {
  while (contX < x - 1) {
    while (contY < y) {
      sY = sY + fY
      contY = contY + 1
    }
    fY = sY
    sY = 0
    contY = 0

    contX = contX + 1
  }
}
console.log(fY)
