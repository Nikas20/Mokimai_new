"use strict";

let senosIlgis = parseInt(prompt("Sienos ilgis"));
let senosAukstis = parseInt(prompt("Sienos aukštis"));
let plitosKaina = parseFloat(prompt("Plytos kaina"));
// sm permerstos i m
const plitosIlgis = 0.2;
const plitosAukstis = 0.1;

let senosPlotis = senosIlgis * senosAukstis;
let plitosPlotis = plitosIlgis * plitosAukstis;

const plituKiekis = Math.round(senosPlotis / plitosPlotis);

const visuPlituKaina = plituKiekis * plitosKaina;

console.log(`Plytų kiekis: ${plituKiekis}`);
console.log(`Plytos kainuos ${visuPlituKaina} Lt`);
