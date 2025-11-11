"use strict";

const trapecijosIlgasPagrindas = parseInt(
  prompt("Trapecijos ilgesniojo pagrindo ilgis:")
);
const trapecijosTrumasPagrindas = parseInt(
  prompt("Trapecijos trumpesniojo pagrindo ilgis:")
);
const trapecijosAukstis = parseInt(prompt("Trapecijos aukštinės ilgis:"));

const plotas =
  ((trapecijosIlgasPagrindas + trapecijosTrumasPagrindas) / 2) *
  trapecijosAukstis;

console.log(`Trapecijos plotas: ${plotas}`);
