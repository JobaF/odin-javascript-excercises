const caesar = function (string, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const positiveShift =
    shift > 26 ? shift % 26 : shift < 0 ? 26 - (Math.abs(shift) % 26) : shift
  return string
    .split('')
    .map((a) => {
      if (alphabet.includes(a)) {
        if (a.charCodeAt(0) <= 90) {
          const shifted = a.charCodeAt(0) + positiveShift
          return shifted > 90
            ? String.fromCharCode(shifted - 26)
            : String.fromCharCode(shifted)
        } else {
          const shifted = a.charCodeAt(0) + positiveShift
          return shifted > 122
            ? String.fromCharCode(shifted - 26)
            : String.fromCharCode(shifted)
        }
      } else return a
    })
    .join('')
}
// Do not edit below this line
module.exports = caesar
