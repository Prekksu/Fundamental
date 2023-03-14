// Number

let angka = 10000;

let inf = Infinity; // angka terbesar se-JAVASCRIPT
let mininf = -Infinity; // angka terkecil se-JAVASCRIPT

// cara mengubah number ke string
let strNumber = angka.toString();
let strNumber2 = angka + "";

console.log(angka.toLocaleString("id-ID")); // region currency
console.log(angka.toFixed(4)); // decimal
console.log(angka.toExponential());

console.log(1000000000000000000000 > inf);

console.log(typeof strNumber);
console.log(strNumber);
console.log(strNumber2);

console.log(angka++); // angka =+ 1 postFix (angka ditambah setelah console.log)
console.log((angka += 1)); // angka += 1 preFix (angka bertambah bersama console.log)
