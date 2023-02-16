function solution(inputArray) {
  let result = inputArray[0] * inputArray[1]
  let i = 1
  while (i < inputArray.length - 1) {
    if (result < inputArray[i] * inputArray[i + 1])
      result = inputArray[i] * inputArray[i + 1]
    i++
  }
  return result
}
