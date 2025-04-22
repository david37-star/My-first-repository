#!/usr/bin/env node
function reverseArray(arr) {
	let reversed = [];
	for ( let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i]);
	}
		return reversed
}

const originalArray = [1, "dog", "cat", "fish", "goat"];
const reversedArray =
reverseArray(originalArray);
console.log(reversedArray);
