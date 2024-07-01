const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let suma = 0
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      suma = suma + param[i]
    }
    if (typeof param[i] === 'string') {
      suma = suma + param[i].length
    }
  }
  return suma / param.length
}

console.log(averageWord(mixedElements))
