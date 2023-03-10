// Create a function that can create a triangle pattern according to the height we provide like the
// following :
function triangle(num) {
  for (let i = 0; i < 4; i++) {
    let a = "";
    for (let j = 0; j <= i; j++) {
      if (num < 10) {
        a += "0" + num + " ";
      } else a += num + " ";
      num++;
    }
    console.log(a);
  }
}
triangle(1);

// // Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping

function loop(n) {
  for (let i = 1; i <= n; i++)
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
}
loop(15);

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

function BMI(w, h) {
  BMI = w / h ** 2;
  if (BMI < 18.5) {
    return "less weight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "ideal";
  } else if (BMI >= 25 && BMI <= 29.9) {
    return "overweight";
  } else if (BMI >= 30 && BMI <= 39.9) {
    return "very overweiht";
  } else {
    return "obesity";
  }
}
console.log(BMI(75, 1.78));

// // Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function arrayNum(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
    } else console.log([i]);
  }
}
arrayNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

function strSplit(text) {
  strSplit2 = text.split(" ");
  return strSplit2;
}
console.log(strSplit("Hello World"));
