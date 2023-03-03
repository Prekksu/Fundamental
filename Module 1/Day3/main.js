// // Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9x1
// 9x2
// …
// 9 x 10

let n = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} + ${i} = ${n * i}`);
}

// Write a code to check whether a string is a palindrome or not.

let palindrome = "kodok";
palindrome =
  palindrome === palindrome.toLowerCase().split("").reverse().join("");
if (palindrome) {
  palindrome = "ini palindrome";
} else {
  palindrome = "bukan palindrome";
}
console.log(palindrome);

// Write a code to convert centimeter to kilometer.
// cm to km = * 100000
// km hm dam m dm cm mm

let cm = 9000000;
const km = cm / 100000;
console.log(`${cm}cm = ${km}km`);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

let uang = 1000000;
var number_string = uang.toString();
(sisa = number_string.length % 3),
  (rupiah = number_string.substring(0, sisa)),
  (ribuan = number_string.substring(sisa).match(/\d{3}/g)); // (/\d{3}/g) <== regex

if (ribuan) {
  sepator = sisa ? "." : "";
  rupiah += sepator + ribuan.join(".");
}

console.log(`${uang} = Rp. ${rupiah},00`);

// Write a code to remove the ﬁrst occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”

let string = "Hello world";
let searchString = string.replace("ell", "");

console.log(searchString);

// Write a code to capitalize the ﬁrst letter of each word in a string
// Example : “hello world” → “Hello World”

let letter = "hello world";
let capitalize = letter.replace("h", "H").replace("w", "W");

console.log(capitalize);

// Write a code to reverse a string.

let text = "sapi";
reverseText = text.split("").reverse().join("");

console.log(reverseText);

// Buat segitiga

let num = 1;
for (let i = 0; i < 10; i++) {
  let a = "                      ";
  for (let j = 0; j <= i; j++) {
    a = a.replace(a[0], "");
    a += num + " ";
    num++;
  }
  console.log(`${a}`);
}
