const findTheOldest = function (people) {
  return people.reduce((max, curr) => {
    const deduction = curr.yearOfDeath || new Date().getFullYear()
    const age = deduction - curr.yearOfBirth
    const currElement = { ...curr, age }
    return max.age > currElement.age ? max : currElement
  }, 0)
}
// Do not edit below this line
module.exports = findTheOldest
