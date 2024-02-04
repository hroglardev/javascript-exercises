const removeFromArray = function (array, ...numbers) {
  let newArray = array.filter((element) => !numbers.includes(element))
  return newArray
}

// Do not edit below this line
module.exports = removeFromArray
