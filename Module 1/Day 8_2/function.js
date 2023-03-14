let f1 = (parameter) => {
	// expression
};

function f2(parameter) {
	return [];
}

console.log(typeof f2());

function recursive(a, sum = 0) {
	sum += a; // 5 9 12 14 15
	if (a == 1) {
		return sum;
	}
	return recursive(a - 1, sum); // (4, 5) (3, 9) (2, 12) (1, 14)
}

console.log(recursive(5));
