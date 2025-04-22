#!/usr/bin/env node
function reverseArray(arr) {
	let reversed = [];
	for ( let i = arr.length - 1; i >=0--) {
		reversed.push(arr[i]);
	}
	return reversed;
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = 
reverseArray(originalArray);
console.log(reversedArray);

