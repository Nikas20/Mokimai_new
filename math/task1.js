"use strict";

function getMax(a, b, c) {
  return Math.max(a, b, c);
}

let result = getMax(12, 34, 56);
console.log(result);

function countlength(num) {
  let str = num.toString();
  return str.length;
}
console.log(countlength(12345));

function randomInteger(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(randomInteger(0, 1));
console.log(randomInteger(0, 100));
console.log(randomInteger(5, 20));

function toDecimals(number, dec) {
  return (Math.round(number * 100) / 100).toFixed(dec);
}

console.log(toDecimals(2.100212, 2));
console.log(toDecimals(2.100212, 3));
console.log(toDecimals(2100, 2));

function isPowerOfTwo(num) {
  let number = Math.log(2) / Math.log(num);

  if (number % 1 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(4));
