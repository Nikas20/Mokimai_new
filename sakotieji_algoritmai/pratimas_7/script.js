"use strict";

let variant = +prompt("Įveskite užduoties variantą.");
let a = +prompt("Įveskite a reikšmę.");
let b = +prompt("Įveskite b reikšmę.");

function jonukoProblema(variant, a, b) {
  switch (variant) {
    case 1:
      return a * b + 3;
    case 2:
      return a + b;
    case 3:
      return a - b;
    default:
      break;
  }
}

console.log(jonukoProblema(variant, a, b));
