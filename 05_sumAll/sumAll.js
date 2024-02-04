const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR'
  let sum = 0
  if (num1 < num2) {
    let iterator = num1

    while (iterator <= num2) {
      sum += iterator
      iterator++
    }
    return sum
  } else {
    let iterator = num2

    while (iterator <= num1) {
      sum += iterator
      iterator++
    }
    return sum
  }
}

// Do not edit below this line
module.exports = sumAll
