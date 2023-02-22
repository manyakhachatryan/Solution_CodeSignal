function solution(n) {
	let arr = []
	  let sum = 0
	  let i = 0
	  while (n > 0) {
		arr.push(n % 10)
		n = Math.floor(n / 10)
	  }
	  while (i < arr.length / 2) {
		sum = sum + arr[i]
		sum = sum - arr[arr.length - 1 - i]
		i++
	  }
	  if (arr.length % 2 == 1 || sum != 0) return false
	  if (sum == 0) return true
	}