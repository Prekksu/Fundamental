// Write a function to get the lowest, highest and average value in the array (with and without sort
// function).

let num = [1, 2, 5, 7, 6, 3];

function low(lowest) {
  lowest.sort(function (a, b) {
    return a - b;
  });
  return lowest;
}

sortedLow = low(num);
console.log(sortedLow);

arrLow = Math.min(...num);
console.log(arrLow);

function high(highest) {
  highest.sort(function (a, b) {
    return b - a;
  });
  return highest;
}

sortedHigh = high(num);
console.log(sortedHigh);

arrHigh = Math.max(...num);
console.log(arrHigh);

arrAvg = num.reduce((a, b) => a + b / num.length);

console.log(arrAvg);

// Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'

let arr = [1, 2, 3, 4];

function concatWord(words) {
  if (words.length === 0) {
    return "";
  } else if (words.length === 1) {
    return words[0];
  } else {
    let lastWord = words.pop();
    return words.join(", ") + " and " + lastWord;
  }
}
console.log(concatWord(arr));

// Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function tambahAngka(angka, angka2) {
  let hasil = [];
  for (let i = 0; i < angka.length; i++) {
    hasil.push(angka[i] + angka2[i]);
  }
  return hasil;
}

let angka = [1, 2, 3];
let angka2 = [3, 2, 1];

let hasil = tambahAngka(angka, angka2);
console.log(hasil);

// Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array

function nilai(nilaiAwal, nilaiTambahan) {
  let nilaiAkhir = [];
  nilaiAkhir.push(nilaiAwal + nilaiTambahan);
  return nilaiAkhir;
}
let nilaiAwal = ["A", "B", "C", "D"];
let nilaiTambahan = ["E"];

let nilaiAkhir = nilai(nilaiAwal, "," + nilaiTambahan);
console.log(nilaiAkhir);
