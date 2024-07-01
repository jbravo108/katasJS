const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    let elemento = param[i]
    for (let j = i + 1; j < param.length; j++) {
      if (elemento === param[j]) {
        param.splice(j, 1)
        j = j - 1
      }
    }
  }
  console.log(param)
}
