const supportedGenres = [
  'medieval',
  'classical',
  'romantic',
  'modern',
  'baroque',
  'renaissance'
]

export function match(param) {
  const foundGenre = supportedGenres.find(genre => genre.toLowerCase() === param.toLowerCase())
  console.log(foundGenre)
  return foundGenre ? true : false
}