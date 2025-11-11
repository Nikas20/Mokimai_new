"use strict";

const zuv1 = parseInt(prompt("Kiek žuvų gyvena akvariume?"));
const zuv2 = parseInt(prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną?"));
const day = parseInt(prompt("Kiek dienų praėjo?"));

let sum = zuv1;

for (let i = 0; i < day; i++) {
  sum += zuv2;
}

console.log(`Po ${day} dienų akvariume gyvens ${sum} žuvų`);
