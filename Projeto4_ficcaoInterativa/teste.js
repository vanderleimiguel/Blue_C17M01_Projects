const main = params => {
  let list = []
  numbers(1000)

  function numbers(num) {
    for (let i = 2; i <= num; i++) {
      if (numbersPrimo(i)) {
        list.push(i)
      }
    }
  }

  function numbersPrimo(num2) {
    for (let index = 2; index < num2; index++) {
      if (num2 % index === 0) {
        return false
      }
    }
    return true
  }

  var sum = 0
  for (let i = 0; i < list.length; i++) {
    sum += list[i]
  }
  console.log(sum)
  return sum
}
main()
