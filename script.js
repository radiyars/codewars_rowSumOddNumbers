// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {

	let startNumber = 0;
	let resNumber = 0;

	for (let i = 1; i < n; i++) {
		startNumber += i;
	}

	startNumber = startNumber * 2 + 1;

	for (let i = startNumber; i < startNumber + n * 2; i += 2) {
		resNumber += i;
	}

	return resNumber
}



console.log(rowSumOddNumbers(42));

