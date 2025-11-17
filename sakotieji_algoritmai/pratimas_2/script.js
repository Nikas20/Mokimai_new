"use strict";

let svorisG = +prompt("Kiek sveria varlė?")
let svorisKg = svorisG / 1000
let kiekis = +prompt("Kiek varlių norima stebėti?")

function name(svorisKg, kiekis) {
   let sumSvoris = svorisKg * kiekis
   if (sumSvoris > 5) {
    return "Varlių stebėjimui pakanka"
   } else {
    return "Varlių stebėjimui per maža"
   }
}
console.log(name(svorisKg, kiekis));
