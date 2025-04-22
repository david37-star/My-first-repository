#!/usr/bin/env node
function customMap(arr, fn) {
	for(let i = 0; i < arr.length; i++) {
		let newValue = fn(arr[i], i);
		result.push(newValue);
	}
	return result;
}


let nums = [1, 2, 3, 4, 5]; 
function square(x) {
	return x * x;
}
 console.log(customMap(nums, square));
