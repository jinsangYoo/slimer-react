export function padLeadingZeros(num: number, size: number) {
  var s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

export function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
