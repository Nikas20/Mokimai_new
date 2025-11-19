"use strict;";

let sumOfRange = (leftSummand, rightSummand) => {
  let sum = 0;

  for (let i = leftSummand; i <= rightSummand; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumOfRange(1, 5));
// console.log(sumOfRange(-3, 4));

let fizzbuzz = (num) => {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
      str = str + ".";
    } else if (i % 3 == 0 && i % 5 != 0) {
      str = str + "fizz";
    } else if (i % 3 != 0 && i % 5 == 0) {
      str = str + "buzz";
    } else {
      str = str + "fizzbuzz";
    }
  }
  return str;
};

// console.log( fizzbuzz(3));
// console.log(fizzbuzz(15));

let numberJoinerWhile = (startNum, endNum) => {
  let str = "";
  let i = startNum;
  while (i <= endNum) {
    if (str == "") {
      str = i;
    } else {
      str = str + "_" + i;
    }
    i++;
  }

  return str;
};

// console.log(numberJoinerWhile(1, 10));
// console.log(numberJoinerWhile(12, 14));

let numberJoinerFor = (startNum, endNum) => {
  let str = "";

  for (let i = startNum; i <= endNum; i++) {
    if (str == "") {
      str = i;
    } else {
      str = str + "_" + i;
    }
  }

  return str;
};

//console.log(numberJoinerFor(1, 10));
// console.log(numberJoinerFor(12, 14));

let numberJoinerFancy = (startNum, endNum, operator = "_") => {
  let str = "";

  for (let i = startNum; i <= endNum; i++) {
    if (operator != "_") {
      if (str == "") {
        str = i;
      } else {
        str = str + operator + i;
      }
    } else {
      if (str == "") {
        str = i;
      } else {
        str = str + "_" + i;
      }
    }
  }
  return str;
};

// console.log(numberJoinerFancy(1, 10));
// console.log(numberJoinerFancy(1, 5, "~"));
// console.log(numberJoinerFancy(3, 6, "_BANANAS"));

let gcd = (num1, num2) => {
  let min = Math.min(num1, num2);
  let result = 0;
  for (let i = 1; i <= min; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      result = i;
    }
  }
  return result;
};

// console.log(gcd(3, 15));
// console.log(gcd(50, 20));

let factors = (num) => {
  let numbers = [];
  let j = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      numbers[j] = i;
      j++;
    }
  }

  return numbers;
};

// console.log(factors(1));
// console.log(factors(12));
// console.log(factors(42));

let makeSquare = (num) => {
  let str = "*";

  for (let i = 0; i < num; i++) {
    if (num == 1) {
      str = "*";
    } else {
      str += "*";
    }
  }
  for (let i = 0; i < num; i++) {
    console.log(str);
  }
};

// makeSquare(5);
// makeSquare(1);
// makeSquare(9);

let makeBox = (width, heiht) => {
  let str = "";
  for (let i = 0; i < heiht; i++) {
    if (i == 0 || i == heiht - 1) {
      for (let i = 0; i < width; i++) {
        str += "*";
      }
      console.log(str);
      str = "";
    } else {
      for (let i = 0; i < width; i++) {
        if (i == 0 || i == width - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
      console.log(str);
      str = "";
    }
  }
};

// makeBox(6, 4);
// makeBox(6, 6);
// makeBox(7, 4);

let makeBanner = (str) => {
  let char = "*";
  let padingLenght = (window.innerWidth - str.length) / 20;

  let pading = "";
  for (let i = 0; i < padingLenght; i++) {
    pading += char;
  }

  console.log(pading + " " + str + " " + pading);
};

makeBanner("Welcome to DigitalCrafts");
