// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// // Output:
// 71.04

var math = 75.25;
var bangla = 65;
var english = 80;
var religion = 35.45;
var social = 99.5;
var totalNumber = math + bangla + english + religion + social;
var average = totalNumber / 5;
average = average.toFixed(2);
average = parseFloat(average);
console.log(average);
