"use strict";

let a = +prompt("Įveskite a reikšmę.");
let b = +prompt("Įveskite b reikšmę.");
let c = +prompt("Įveskite c reikšmę.");

function skaicai(a, b, c) {
  if (a % 3 == 0) {
    return `Atsakymas: ${a}`;
  } else if (b % 3 == 0) {
    return `Atsakymas: ${b}`;
  } else if (c % 3 == 0) {
    return `Atsakymas: ${c}`;
  } else {
    return `Atsakymas: nėra`;
  }
}

console.log(skaicai(a, b, c));
