const add = function () {
  return arguments[0] + arguments[1]
}

const subtract = function () {
  return arguments[0] - arguments[1]
}

const sum = function () {
  return arguments[0].reduce((a, b) => a + b, 0)
}

const multiply = function () {
  let result = 1
  for (let i = 0; i < arguments[0].length; i++) {
    result *= arguments[0][i]
  }
  return result
}

const power = function () {
  return Math.pow(arguments[0], arguments[1])
}

let f = []
const factorial = function (n) {
  if (n == 0 || n == 1) return 1
  if (f[n] > 0) return f[n]
  return (f[n] = factorial(n - 1) * n)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
