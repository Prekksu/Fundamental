// code to ﬁnd area of rectangle.
function areaRectangle(a, b) {
	let area = a * b;
	return area;
}

// code to ﬁnd perimeter of rectangle.
function perimeterRectangle(a, b) {
	let perimeter = 2 * (a + b);
	return perimeter;
}

let a = 5;
let b = 6;
console.log("Area = " + areaRectangle(a, b));
console.log("Perimeter = " + perimeterRectangle(a, b));

// code to ﬁnd diameter, circumference and area of a circle.
function diameterCircle(r){
    let diameter = 2 * r;
    return diameter
}

function circumferenceCircle(pi, diameter){
    let circumference = 2 * pi * r;
    return circumference;
}

function areaCircle(pi, r){
    let area = pi * r * r;
    return area;
}

let r = 5;
let pi = 3.14;
console.log("Diameter = " + diameterCircle(r));
console.log("Circumference = " + circumferenceCircle(pi, r));
console.log("area = " + areaCircle(pi, r));

// code to ﬁnd angles of triangle if two angles are given.
function angleTriangle(p, q){
    let angle = 180 - p - q;
    return angle;
}

let p = 45;
let q = 45;
console.log("Angle = " + angleTriangle(p,q));

// code to get difference between dates in days.
let date1 = new Date("02/27/2023");
let date2 = new Date("06/09/2023")

var Difference_In_Time = date2.getTime() - date1.getTime();    
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
console.log("Total number of days between dates = " + Difference_In_Days);

// code to convert days to years, months and days
function getFormatedStringFromDays(days){
    var years = Math.floor(days / 365);
    var year_text = years == 1 ? 'year ' : 'years ';
    var months = Math.floor(days / 30);
    var mon_text = months <= 1 ? ' month ' : ' months ';
    var days = days % 30;
    var day_text = days <= 1 ? ' day' : ' days';

    return years + year_text + months + mon_text + days + day_text;
}
  
console.log(getFormatedStringFromDays(800));