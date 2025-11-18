"use strict";

let a = +prompt("Įveskite kainas a");
let b = +prompt("Įveskite kainas b");

let n1 = +prompt("Įveskite kiekius n1");
let n2 = +prompt("Įveskite kiekius n2");
let n3 = +prompt("Įveskite kiekius n3");

let kaina = +prompt("Įveskite bandelės kainą");

function buy(a, b, n1, n2, n3, kaina) {
  if (kaina <= a) {
    return `Už bandeles bus sumokėta: ${kaina * n1}`;
  } else if (a < kaina && kaina < b) {
    return `Už bandeles bus sumokėta: ${kaina * n2}`;
  } else {
    return `Už bandeles bus sumokėta: ${kaina * n3}`;
  }
}
console.log(buy(a, b, n1, n2, n3, kaina));
