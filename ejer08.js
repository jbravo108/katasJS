const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let nombreLargo = param[0]
  for (let i = 0; i < param.length; i++) {
    let palabra = param[i]
    if (palabra.length > nombreLargo.length) {
      nombreLargo = palabra
    }
  }
  return nombreLargo
}
console.log(findLongestWord(avengers))
