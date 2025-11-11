"use strict";

let podeliu = parseInt(prompt("Puodelių, kuriuos reikia supakuoti, skaičius:"));

let pilnuDezuciu = 0;
let lekutis = 0;

pilnuDezuciu = Math.round(podeliu / 3);
lekutis = podeliu - pilnuDezuciu * 3;
console.log(`Pilnų dėžučių skaičius: ${pilnuDezuciu}`);
console.log(`Nesupakuotų puodelių skaičius: ${lekutis}`);
