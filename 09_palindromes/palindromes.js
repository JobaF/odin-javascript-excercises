const palindromes = function (string) {
  const regex = /[A-Za-z]+/gi
  const match = string.match(regex).join('').toLowerCase()
  return match === match.split('').reverse().join('')
}

// Do not edit below this line
module.exports = palindromes
