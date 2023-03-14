/* pseudocode anagram 
1. buat 2 declaration
2. pastikan panjanganya sama
3. jika step ke dua berbeda >>> false
4. split ke-2 string, urutkan lalu gabungkan
5. jika sama true
6. jika berbeda fals
*/

function kataAnagram(aLeng, bLeng) {
  let Leng1 = aLeng.length;
  let Leng2 = bLeng.length;

  if (Leng1 !== Leng2) {
    console.log("salah");
    return;
  }
  let aSplit = aLeng.split("").sort().join();
  let bSplit = bLeng.split("").sort().join();
  if (aSplit == bSplit) {
    console.log("anagram");
  } else console.log("bukan anagram");
}

kataAnagram("asd", "sda");
