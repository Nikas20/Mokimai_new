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

function midScore(a, b, c ) {
  let  num =[a, b, c ]

  let length = num.length

  for (let index = 0; index < length; index++) {
    const sum = array[index]; 
  }
  return sum / length
}

function bigestScore(a, b) {
 return Math.max(a, b)
}

function checkLock(a, b, c, d) {
  const numbers = [a, b, c, d]


  if (numbers[0] = 3 || numbers[0] == 5 || numbers[0] == 7) {
    if (numbers[1] == 2) {
      if (5 >= numbers[2] <= 100) {
        if (20 < numbers[2] || 9 > numbers[2]) {
          return "correct"
        } else{
          return" incorrect because the fourth number is between 9 and 20"
        }
      }else{
        return" incorrect because the third number is between 5 and 100"
      }
    }else{
      return "'incorrect' because the second number isn't a 2"
    }
  } else{
    return "'incorrect' because the first number isn't a 3, 5, or 7"
  }

}

function canIGet(str, num) {
 if (str == "MacBook Air" && num == 999) {
  return true
 } else if (str == "MacBook Pro" && num == 1299) {
  return true
 } else if (str == "Mac Pro" && num == 2499) {
  return true
 } else if (str == "Apple Sticker" && num == 1) {
  return true
 } else {
  return false
 }
}

function tipAmount(num, str) {
  let amount = 0;

  if (str == "good") {
    amount = 20
return num / 100 * amount
  } else if (str == "fair") {
    amount = 15
return num / 100 * amount
  } else if (str == "poor") {
    amount = 10
return num / 100 * amount
  } else {
    return "mot corect"
  }
}

function totalAmount(num, str) {

return num + tipAmount(num, str)

}

function splitAmount(num, str, pepl) {
  let number = num / pepl
  return number + tipAmount(number, str)
}

function isEven(num) {
  return n % 2 == 0;
}

function isOdd(num) {
  return Math.abs(n % 2) == 1;
}

function rockPaperScissors(player1, player2) {
  if (player1 == player2) {
    return "draw"
  } else  if (player1 == "rock" && player2 == "scissors") {
    return "Win Playr 1"
  } else  if (player1 == "scissors" && player2 == "rock") {
    return "Win Playr 2"
  } else  if (player1 == "paper" && player2 == "rock") {
    return "Win Playr 1"
  } else  if (player1 == "rock" && player2 == "paper") {
    return "Win Playr 2"
  } else  if (player1 == "scissors" && player2 == "paper") {
    return "Win Playr 1"
  } else  if (player1 == "paper" && player2 == "scissors") {
    return "Win Playr 2"
  } else {
    return "not corect"
  }
}

function letterGrade(num) {
  if (num <= 59) {
    return "F"
  } else if (60 <= num <= 62) {
    return "D-"
  } else if (63 <= num <= 66) {
    return "D"
  } else if (67 <= num <= 69) {
    return "D+"
  } else if (70 <= num <= 72) {
    return "C-"
  } else if (73 <= num <= 76) {
    return "C"
  } else if (77 <= num <= 79) {
    return "C+"
  } else if (80 <= num <= 82) {
    return "B-"
  } else if (83 <= num <= 86) {
    return "B"
  } else if (87 <= num <= 89) {
    return "B+"
  } else if (90 <= num <= 92) {
    return "A-"
  } else if (93 <= num <= 96) {
    return "A"
  } else if (97 <= num <= 99) {
    return "A+"
  }
}

function daysInMonthByNumber(monthNum) {
  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    throw new Error(`Expected a month number from 1-12, received: ${monthNum}`);
  }

  // This is your job. :)
}