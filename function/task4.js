function celsiusToFahrenheit(temp) {
  return temp * 1.8 + 32;
}

// console.log(celsiusToFahrenheit(10));

function compareBMI(mass1, height1, mass2, height2) {
  let pers1 = mass1 / (height1 * height1);
  let pers2 = mass2 / (height2 * height2);
  return pers1 > pers2 ? true : false;
}

// console.log(compareBMI(70, 185, 68, 187));

function calcArea(a, b, c) {
  let s = (a + b + c) / 2;

  let area = Number.parseFloat(
    Math.sqrt(s * (s - a) * (s - b) * (s - c))
  ).toFixed(2);

  return area;
}

// console.log(calcArea(5, 6, 7));

function whatType(somthing) {
  return typeof somthing;
}
// console.log(whatType(true));

function remainderOf(num1, num2) {
  let left = Math.round(num1 % num2);
  return left;
}
// console.log(remainderOf(10, 1));
// console.log(remainderOf(10, 2));
// console.log(remainderOf(10, 3));
// console.log(remainderOf(10, 4));
// console.log(remainderOf(129, 17));

function hello() {
  return "Hello, world!";
}

function callNTimes(num, funk) {
  for (let index = 0; index < num; index++) {
    console.log(funk());
  }
}

// console.log(callNTimes(5, hello));
