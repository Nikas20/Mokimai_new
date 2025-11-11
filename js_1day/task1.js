"use strict";

let pamokuPirmadieni = +prompt("Kiek pamokų yra pirmadienį?");
let pamokuAntradieni = +prompt("Kiek pamokų yra antradienį?");
let pamokuTreciadieni = +prompt("Kiek pamokų yra trečiadienį?");
let pamokuKetvirtadieni = +prompt("Kiek pamokų yra ketvirtadienį?");
let pamokuPenktadieni = +prompt("Kiek pamokų yra penktadienį?");

let sum = parseInt(
  pamokuPirmadieni +
    pamokuAntradieni +
    pamokuTreciadieni +
    pamokuKetvirtadieni +
    pamokuPenktadieni
);
let min = sum * 45;

console.log(`Pamokų skaičius: ${sum}`);
console.log(`Tai sudaro minučių: ${min}`);
