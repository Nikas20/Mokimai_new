"use strict";

let marioSaldainiai = parseInt(prompt("Kiek saldainių gauna Marius?"));
let poKiekSuvalgoSaldainiu = parseInt(prompt("Po kiek saldainių suvalgo?"));
let denosIkiKaledu = parseInt(prompt("Kelios dienos liko iki Kalėdų?"));

let kiekPerDenasGauna = denosIkiKaledu * marioSaldainiai;
let kiekPerDenasSuvalge = denosIkiKaledu * poKiekSuvalgoSaldainiu;
let kiekLiko = kiekPerDenasGauna - kiekPerDenasSuvalge;
let dovanas = Math.trunc(kiekLiko / 4);
let likutis = kiekLiko - dovanas * 4;

console.log(`Marius dovanas paruoš ${dovanas} draugų.`);
console.log(`Supakavus dovanas liks ${likutis} saldainiai.`);
