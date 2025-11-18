"use strict";

let num1 = +prompt("Koki pažymi gavo Petriukas?");
let num2 = +prompt("Koki pažymi gavo Petriukas?");
let num3 = +prompt("Koki pažymi gavo Petriukas?");
let num4 = +prompt("Koki pažymi gavo Petriukas?");
let num5 = +prompt("Koki pažymi gavo Petriukas?");
function avg5(num1, num2, num3, num4, num5) {
  let numbers = [num1, num2, num3, num4, num5];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  let avg = sum / numbers.length;

  switch (avg) {
    case avg > 9:
      return "Petriukas gaus tris saldainius";
      break;
    case 7 <= avg <= 9:
      return "Petriukas gaus du saldainius";
      break;
    case 7 < avg:
      return "Petriukas gaus vieną saldainį";
      break;
    default:
      break;
  }
}

console.log(avg5(num1, num2, num3, num4, num5));
