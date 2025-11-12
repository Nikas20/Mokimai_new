"use strict;";

function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(5));
console.log(isPositive(-5));

function isLandscape(width, height) {
  if (width > height) {
    return true;
  } else {
    return false;
  }
}

function compareNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2 > num1 ? num2 : "Jie ligus";
}
console.log(compareNumbers(2, 1));
console.log(compareNumbers(1, 2));
console.log(compareNumbers(1, 1));

function specifySign(num1, num2, num3) {
  if (num1 + num2 + num3 < 0) {
    alert = "The product sign is -(minus)";
    return "The product sign is -(minus)";
  } else {
    alert = "The product sign is +(plus)";
    return "The product sign is +(plus)";
  }
}

function checkIsArmstrong(number) {
  const numStr = String(number);
  const numberOfDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numberOfDigits);
  }

  if (sum === number) {
    return true;
  } else {
    return false;
  }
}

function isMultipleOf(n, d) {
  let sum = d / n;
  sum % 1 != 0;
  return d === 0 ? false : sum % 1 == 0 ? true : false;
}
console.log(isMultipleOf(3, 15));
console.log(isMultipleOf(2, 7));

function sortNumbers(a, b, c) {
  const numbers = [a, b, c];
  return numbers.sort(function (a, b) {
    return b - a;
  });
}
console.log(sortNumbers(0, -1, 4));

function isValidTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  } else if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidTriangle(3, 4, 5));

function favoriteNumber(fav, guess) {
  if (fav > guess) {
    return "Too low";
  } else if (fav < guess) {
    return "Too high";
  } else {
    return "You got it!";
  }
}
