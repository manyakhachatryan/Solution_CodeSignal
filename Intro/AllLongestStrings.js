function solution(inputArray) {
	let arr = []
	let max = inputArray[0].length
	let i = 1
  
	while (i < inputArray.length) {
	  if (max < inputArray[i].length) max = inputArray[i].length
	  i++
	}
	i = 0
	while (i < inputArray.length) {
	  if (inputArray[i].length == max) arr.push(inputArray[i])
	  i++
	}
	return arr
  }
  