const repeatString = function (string, num) {
  if (num < 0) return 'ERROR'
  let repeatedString = ''
  let counter = 0
  while (counter < num) {
    repeatedString += string
    counter++
  }
  return repeatedString
}

// Do not edit below this line
module.exports = repeatString
