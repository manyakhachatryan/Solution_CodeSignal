function solution(inputString) {
  let a = inputString.split('').reverse().join('')
  let i = 0
  while (i < a.length) {
    if (inputString[i] != a[i]) return false
    i++
  }
  return true
}
