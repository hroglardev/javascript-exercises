const findTheOldest = function (people) {
  const thisYear = new Date().getFullYear()
  let ageOfOldest = 0
  let oldest = people[0]

  people.forEach((person) => {
    if (person.hasOwnProperty('yearOfDeath')) {
      let age = person.yearOfDeath - person.yearOfBirth
      if (age > ageOfOldest) {
        ageOfOldest = age
        oldest = person
      }
    } else {
      let age = thisYear - person.yearOfBirth
      if (age > ageOfOldest) {
        ageOfOldest = age
        oldest = person
      }
    }
  })

  return oldest
}

// Do not edit below this line
module.exports = findTheOldest
