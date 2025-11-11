"use strict";

let sausainai = parseInt(prompt("Kiek sausainių iškepė Tautvydas?"));
let darSausainiu = parseInt(
  prompt("Keli draugai dar atsinešė po tiek pat sausainių?")
);
let visoDaliviu = parseInt(prompt("Kiek žmonių iš viso dalyvavo šventėje?"));

let visoSausainiu = 0;
let dalivisGavo = 0;
let tatvidoSausainiai = 0;

visoSausainiu = sausainai + sausainai * darSausainiu;

dalivisGavo = Math.round(visoSausainiu / visoDaliviu);

tatvidoSausainiai = visoSausainiu - dalivisGavo * visoDaliviu;

console.log(`Kiekvienas šventės dalyvis gavo
po ${dalivisGavo} sausainius`);
console.log(`Tautvydui papildomai atiteko ${tatvidoSausainiai}
sausainiai`);
