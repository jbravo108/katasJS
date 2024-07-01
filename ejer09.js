const numbers = [1, 2, 3, 5, 81, 37, 58, 2]

function sumAll(param) {
  let suma = 0
  for (let index = 0; index < param.length; index++) {
    suma = suma + param[index]
    // insert code
  }
  return suma
}

console.log(sumAll(numbers))
