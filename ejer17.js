const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

function recorrido(param) {
  for (const key in param) {
    console.log(param[key])
  }
}
recorrido(alien)
