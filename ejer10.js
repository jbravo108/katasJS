const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let suma = 0
  for (let i = 0; i < param.length; i++) {
    suma = suma + param[i]
  }
  return suma / param.length
}
console.log(Math.round(average(numbers)))
/*lo redondeo para que no salgan tantos decimales*/
