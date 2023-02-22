function solution(s1, s2) {
	let arr1 = s1.split('')
	let arr2 = s2.split('')
	let count = 0
	let j = 0
	let i = 0
   
	while (i < arr1.length) {
	   j = 0
	   while (j < arr2.length) {
		 if (arr1[i] == arr2[j]) {
		   arr1.splice(i, 1)
		   arr2.splice(j, 1)
		   count++
		   i--
		   break
		 } else j++
	   }
	   i++
	 }
	 return count
   }
   