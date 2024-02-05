const add = function (number1, number2) {
  return number1 + number2
}

const subtract = function (number1, number2) {
  return number1 - number2
}

const sum = function (args) {
  return args.reduce((accumulator, current) => accumulator + current, 0)
}

const multiply = function (args) {
  return args.reduce((accumulator, current) => accumulator * current)
}

const power = function (number1, number2) {
  return number1 ** number2
}

const factorial = function (number) {
  if (number === 0 || number === 1) return 1
  let counter = 1
  let total = 1
  while (counter <= number) {
    total *= counter
    counter++
  }
  return total
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
