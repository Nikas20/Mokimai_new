"use strict";

const S = 264;
let v = parseInt(prompt("Koks automobilio greitis?"));

// km/h perdararu i m/s
v = v * 0.277777778;

let t = Math.round((S / v) * 100) / 100;

console.log(`Automobilis tunelį pravažiuos per ${t} s`);
