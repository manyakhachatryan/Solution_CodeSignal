function solution(sequence) {
	let i = 0
	let flag = 0
	while (i < sequence.length - 1) {
	  if (sequence[i] < sequence[i + 1]) i++
	  else if (sequence[i - 1] == sequence[i + 1] && flag == 0) {
		sequence.splice(i + 1, 1)
		flag = 1
	  } else if (sequence[i] >= sequence[i + 1] && flag == 0) {
		if (i == sequence.length - 2) return true
		flag = 1
		sequence.splice(i, 1)
		if (i != 0) i--
	  } else if (flag == 1) {
		return false
	  }
	}
	return true
  }