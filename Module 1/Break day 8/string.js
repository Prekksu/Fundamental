let str = "asd";
let str2 = "ayam goreng";

console.log(str);
console.log(str2);

console.log(str2.charAt(1)); // karakter index ke 1
console.log(str.length); // hitung semua karakter di dalam srting termasuk spasi
console.log(str2.includes("d fgh")); // cari kata "d fgh" di dalam string. return true/false
// contoh
if (str2.includes("d fgh")) console.log("ada huruf d fgh");

console.log(str2.indexOf("ayan"));
// mencari index perawal karakter dari searchString. ex ayam => "a"
// tetapi apabila searchString tidak terdapat di string maka return -1
// indexOf selalu yang pertama dari searchString

if (str2.indexOf("ayam") == -1)
	console.log("ga ada kucing di dalam variable itu");
else console.log("isi search string terdapat dalam variable");

console.log(str2.lastIndexOf("a"));
// kebalikan indexOf

console.log(str2.slice(0, 4));
// start dari 0 dan bayak karakter
// index 0 = a. 4 = a.y.a.m

console.log(str2.toLocaleLowerCase("id-ID"));
console.log(str2.toLowerCase()); // huruf kecil
console.log(str2.toUpperCase()); // huruf besar

console.log(str2.replace("ayam", "kucing")); // (/ayam/g, kucing) >>> jika ayam banyak

let number = 10000;
// tulis => Rp. 10.000
console.log("Rp " + number.toLocaleString("id-ID"));
console.log(`Rp ${number.toLocaleString("id-ID")}`);
