function solution(matrix) {
    let j = 0
  let sum = 0
  let i = 0

  while (i < matrix[0].length) {
    j = 0
    while (j < matrix.length) {
      if (matrix[j][i] > 0) {
        sum += matrix[j][i]
        j++
      } else {
        break
      }
    }
    i++
  }
  return sum
}
