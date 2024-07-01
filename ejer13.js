const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param, valor) {
  for (let i = 0; i < param.length; i++) {
    if (param.includes(valor)) {
      posicion = param.indexOf(valor)
      return `${true} ${posicion}`
    } else {
      return false
    }
  }
}

console.log(finderName(nameFinder, 'Natasha'))
