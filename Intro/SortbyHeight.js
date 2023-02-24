function solution(a) {
	let arr = [...a]
	let i = 0
	let j = 0
  
	arr.sort((a, b) => a - b)
	while (arr[0] == -1) arr.shift()
	while (i < a.length) {
	  if (a[i] != -1) {
		a[i] = arr[j]
		j++
	  }
	  i++
	}
	return a
  }