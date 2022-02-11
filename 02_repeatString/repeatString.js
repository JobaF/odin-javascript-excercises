const repeatString = (string, repetitions) => {
  if (parseInt(repetitions) < 0) return 'ERROR'
  let result = ''
  for (let i = 0; i < repetitions; i++) {
    result += string
  }
  return result
}

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString
