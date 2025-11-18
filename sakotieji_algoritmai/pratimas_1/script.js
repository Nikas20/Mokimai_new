"use strict";

let h = +prompt("Iš kokio aukščio šoka parašiutininkas?");
let t = +prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?");

const g = 9.8;

function survivParasut(h, t) {
  let temp = Math.sqrt((2 * h) / g);

  if (temp > t) {
    return "Parašiutas išsiskleis";
  } else {
    return "Parašiutas neišsiskleis";
  }
}

console.log(survivParasut(h, t));
