#!/usr/bin/env node

function secondLargest(arr) {
	if (arr.length < 2) return null; //not enough numbers
let Largest = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
	let num = arr[i];

	if (num > Largest) {
		second = Largest;
		Largest = num;
	} else if (num > second && num < largest) {
		second = num; 
	}
}
if (second === -Infinity) {
	return null;
}

	return second; 
}

console.log(secondLargest([5, 6, 7, 8, 9]));
console.log(secondLargest([7, 4, 5]));
