function solution(statues) {
	let min = statues[0]
	 let max = statues[0]
	 let i = 1
	 while (i < statues.length) {
	   if (statues[i] < min) min = statues[i]
	   if (statues[i] > max) max = statues[i]
	   i++
	 } 
	 let count = max - min + 1;
	 return count - statues.length
   }
   