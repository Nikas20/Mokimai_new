"use strict";

let num1 = +prompt("Įveskite klasies vidurki");
let num2 = +prompt("Įveskite klasies vidurki");
let num3 = +prompt("Įveskite klasies vidurki");
let num4 = +prompt("Įveskite klasies vidurki");

let bigest = 0;

function biger(num1, num2, num3, num4) {
  bigest = Math.max(num1, num2, num3, num4);
  if (bigest == num1) {
    console.log(`Didžiausias vidurkis:${bigest}`);
    console.log(
      `Kitų klasių vidurkiai skiriasi:${bigest - num2}, ${bigest - num3}, ${
        bigest - num4
      }`
    );
  } else if (bigest == num2) {
    console.log(`Didžiausias vidurkis:${bigest}`);
    console.log(
      `Kitų klasių vidurkiai skiriasi:${bigest - num1}, ${bigest - num3}, ${
        bigest - num4
      }`
    );
  } else if (bigest == num3) {
    console.log(`Didžiausias vidurkis:${bigest}`);
    console.log(
      `Kitų klasių vidurkiai skiriasi:${bigest - num1}, ${bigest - num2}, ${
        bigest - num4
      }`
    );
  } else {
    console.log(`Didžiausias vidurkis:${bigest}`);
    console.log(
      `Kitų klasių vidurkiai skiriasi:${bigest - num1}, ${bigest - num2}, ${
        bigest - num3
      }`
    );
  }
}

biger(num1, num2, num3, num4);
