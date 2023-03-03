// Create a function that can create a triangle pattern according to the height we provide like the
// following :

let num = 1;
for (let i = 0; i < 4; i++) {
  let a = "";
  for (let j = 0; j <= i; j++) {
    a  ,10+= "0" + num + " ";
    num++;
  }
  console.log(`${a}`);
}

// // Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

let w = 75;
let h = 178;
function BMI(w, h) {
  BMI = w / h ** 2;
  if (BMI < 18.5) {
    console.log("less weight");
  } else if (BMI >= 18.5) {
    console.log("ideal");
  } else if (BMI > 24.9) {
    console.log("overweight");
  } else if (BMI > 29.9) {
    console.log("very overweiht");
  } else if (BMI >= 40) {
    console.log("obesity");
  }
}
