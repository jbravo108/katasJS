function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  }
  if (numberOne < numberTwo) {
    return numberTwo
  }
}
console.log(sum(8, 12))

/*con la función math*/
function sum(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo)
}
console.log(sum(8, 3))
