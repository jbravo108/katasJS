const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const pelipeque = []
let pelimediana = []
let peligrande = []

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    pelipeque.push(movies[i])
  } else if (
    movies[i].durationInMinutes > 100 &&
    movies[i].durationInMinutes < 200
  ) {
    pelimediana.push(movies[i])
  } else {
    peligrande.push(movies[i])
  }
}
console.log('Categoría película pequeña:', pelipeque)
console.log('Categoría película mediana:', pelimediana)
console.log('Categoría película grande:', peligrande)
