/*1.1------------- */
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
/*1.2------------- */
avengers[0] = 'IRONMAN'
console.log(avengers[0])
/*1.3------------- */
console.log(avengers.length)
/*1.4------------- */
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])
/*1.5------------- */
/* He renombrado el array para que no cause error al declarar 2 variables con el mismo nombre*/
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.pop()
console.log(rickAndMortyCharacters2[0])
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1])
/*1.6------------- */
/* He renombrado el array para que no cause error al declarar 2 variables con el mismo nombre*/
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1)
console.log(rickAndMortyCharacters3)
