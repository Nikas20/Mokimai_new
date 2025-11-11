"use strict";

let po5ct = parseInt(prompt("Kiek yra monetų po 5 ct?"));
let po20ct = parseInt(prompt("Kiek yra monetų po 20 ct?"));
let po2Lt = parseInt(prompt("Kiek yra monetų po 2 Lt?"));

po5ct = (po5ct / 100) * 5;
po20ct = (po20ct / 10) * 2;
po2Lt = po2Lt * 2;
const sum = po2Lt + po20ct + po5ct;
console.log(`Taupyklėje yra ${sum} Lt.`);
