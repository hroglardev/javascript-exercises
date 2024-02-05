const palindromes = function (string) {
  let removeSpecialChars = string.replace(/[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s]/g, '')
  return removeSpecialChars.toLowerCase().split('').reverse().join('') === removeSpecialChars.toLowerCase()
}

// Do not edit below this line
module.exports = palindromes
