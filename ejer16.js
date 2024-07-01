const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

/*function recorrido(params) {
  for (let i = 0; i < params.length; i++) {
    console.log(params[i])
  }
}*/
function recorrido(params) {
  for (const i of params) {
    console.log(i)
  }
}

recorrido(placesToTravel)
