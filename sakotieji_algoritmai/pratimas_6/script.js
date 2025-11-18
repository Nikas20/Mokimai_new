"use strict";

let paukstis1 = +prompt(
  "veskite kiek kiekvienos rūšies paukščių liko žiemoti:"
);
let paukstis2 = +prompt(
  "veskite kiek kiekvienos rūšies paukščių liko žiemoti:"
);
let paukstis3 = +prompt(
  "veskite kiek kiekvienos rūšies paukščių liko žiemoti:"
);

function ziemojantysPauksciai(paukstis1, paukstis2, paukstis3) {
  let array = [paukstis1, paukstis2, paukstis3];
  array.sort((a, b) => b - a);
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log(
    `Skirtumas tarp didžiausio ir mažiausio kiekio: ${
      array.shift(0) - array.pop()
    }`
  );
}

ziemojantysPauksciai(paukstis1, paukstis2, paukstis3);
