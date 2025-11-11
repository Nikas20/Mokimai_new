"use strict";

let automobiliuSkaicius = parseInt(prompt("Automobilių skaičius:"));
let iKeltaTelpaAutomobiliu = parseInt(prompt("Į keltą telpa automobilių:"));

let perkelesPerKartu = 0;
let liksNepakelta = 0;

perkelesPerKartu = Math.trunc(automobiliuSkaicius / iKeltaTelpaAutomobiliu);

liksNepakelta = automobiliuSkaicius - perkelesPerKartu * iKeltaTelpaAutomobiliu;

console.log(perkelesPerKartu);
console.log(liksNepakelta);
