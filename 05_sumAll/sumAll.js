const sumAll = function (firstNum, secondNum) {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
    return 'ERROR'
  } else if (firstNum < 0 || secondNum < 0) {
    return 'ERROR'
  } else {
    let sum = 0
    const bigger = firstNum > secondNum ? firstNum : secondNum
    const smaller = firstNum < secondNum ? firstNum : secondNum

    for (let i = smaller; i <= bigger; i++) {
      sum += i
    }
    return sum
  }
}
// Do not edit below this line
module.exports = sumAll
