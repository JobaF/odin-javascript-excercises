function removeFromArray(array, value, secondValue = false) {
  let arr = array
  for (let i = 1; i <= arguments.length; i++) {
    arr = arr.filter((v) => v !== arguments[i])
  }
  return arr
}

// Do not edit below this line
module.exports = removeFromArray
