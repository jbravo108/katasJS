const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  let contador = {}
  for (let i = 0; i < param.length; i++) {
    if (contador[param[i]] == 0) {
      contador[param[i]] = 1
    } else {
      contador[param[i]] = contador[param[i]] + 1
    }
  }
  console.log(contador)
}

repeatCounter(counterWords)
