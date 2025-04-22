#!/usr/bin/env node
function countOccurrence(arr) {
	let counts = {};
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (counts[num]) {
			counts[num] += 1;
		} else {
			counts[num] = 1;
		}
	}
	
	return counts;
}


console.log(countOccurrence([1, 1, 1, 2, 3, 2, 4, 3, 4, 2, 5]));
