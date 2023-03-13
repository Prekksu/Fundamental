let arr = [10, 11, 12, 13];
console.log(arr);

arr.push(1); // menambahkan ke index terakhir => [1]
arr.pop(); // hapus element/index terakhir dari array => []
arr.shift(); // hapus element/idex paling depan dari array
arr.unshift(2); // menambahakan ke index paling depan => [2]
console.log(arr);
let join = arr.join("_"); // kebalikan split. mengubah array jadi string. separator digandi dengan parameter
console.log(join);
console.log(arr.indexOf(11)); // sama dengan string
console.log(arr.lastIndexOf(12)); // sama dengan string
console.log(arr.findIndex((val, index) => val == 11)); // return index
console.log(arr.find((val) => val == 11)); // return value
console.log(arr.filter((val) => val == 11 || val == 12)); // return value

() =>
	// arrow

	() => {
		console.log("asd");
		return 100;
	}; // cb

arr.length; // panjang array
console.log(arr.map((val, index) => (val == 11 ? "siap" : "salah"))); // looping array arr

console.log();

let arrNum = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < arrNum.length; i++) {
	sum += arrNum[i];
} // sum menggunakan loop
console.log(sum);

sum = 0;
let i = 0;
while (i < arrNum.length) {
	sum += arrNum[i];
	i++;
} // sum menggunakan while loop
console.log(sum);

sum = 0;
arrNum.map((val) => (sum += val));
console.log(sum);

sum = 0;
console.log(arrNum.map((val) => (sum += val))[arrNum.length - 1]); // sum menggunakan map tapi maksa

sum = 0;
console.log(arrNum.reduce((prev, curr) => prev + curr)); // sume menggunakan reduce

// shallow copy
// wajib spread pada saat menciptakan instance
// apapun yang kita lakukan terhadap arrCopy tidak akan mempengaruhi arrNum

let arrCopyNum = [...arrNum];
// deep copy
