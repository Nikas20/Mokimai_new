"use strict;";

function daysUntilWeekend(day) {
  switch (day) {
    case "Monday":
      console.log("left 5 day");
      break;
    case "Tuesday":
      console.log("left 4 day");
      break;
    case "Wednesday":
      console.log("left 3 day");
      break;
    case "Thursday":
      console.log("left 2 day");
      break;
    case "Friday":
      console.log("left 1 day");
      break;
    case "Saturday":
      console.log("Today");
      break;
    case "Sunday":
      console.log("left 6 day");
      break;
    default:
      break;
  }
}

// console.log(daysUntilWeekend("Monday"));

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
    default:
      break;
  }
}

function daysInMounth(mounth) {
  switch (mounth) {
    case 1:
      return 31;
      break;
    case 2:
      return 28;
      break;
    case 3:
      return 31;
      break;
    case 4:
      return 30;
      break;
    case 5:
      return 31;
      break;
    case 6:
      return 30;
      break;
    case 7:
      return 31;
      break;
    case 8:
      return 31;
      break;
    case 9:
      return 30;
      break;
    case 10:
      return 31;
      break;
    case 11:
      return 30;
      break;
    case 12:
      return 31;
      break;
    default:
      break;
  }
}

function gradeToDescription(grade) {
  switch (grade) {
    case "A":
      console.log("Excellent");
      break;
    case "B":
      console.log("Good");
      break;
    case "C":
      console.log("Average");
      break;
    case "D":
      console.log("Poor");
      break;
    case "f":
      console.log("Fail");
      break;
    default:
      break;
  }
}

function lightBehavior(color) {
  switch (color) {
    case "red":
      console.log("Stop");

      break;
    case "yellow":
      console.log("Ready");
      break;
    case "green":
      console.log("Go");
      break;

    default:
      console.log("Unknown light");
      break;
  }
}

function languageCodeTranslator(language) {
  switch (language) {
    case "en":
      console.log("Hello");
      break;
    case "lt":
      console.log("Labas");
      break;
    case "fr":
      console.log("Bonjour");
      break;
    case "es":
      console.log("Hola");
      break;
    default:
      console.log("Language not supported");

      break;
  }
}

function runCommand(cmd) {
  switch (cmd) {
    case "start":
      console.log("Starting...");
      break;
    case "stop":
      console.log("Stopping...");
      break;
    case "pause":
      console.log("Pausing...");
      break;
    case "resume":
      console.log("Resuming...");
      break;
    default:
      console.log("Unknown command");

      break;
  }
}

function temperatureRange(temp) {
  switch (true) {
    case temp < 0:
      console.log("Freezing");

      break;
    case 0 <= temp <= 10:
      console.log("Cold");
      break;
    case 11 <= temp <= 20:
      console.log("Mild");
      break;
    case 21 <= temp <= 30:
      console.log("Warm");
      break;
    case 30 < temp:
      console.log("Hot");
      break;
    default:
      break;
  }
}

function typeAdvantage(type) {
  switch (type) {
    case "fire":
      console.log("grass");
      break;
    case "water":
      console.log("fire");
      break;
    case "grass":
      console.log("water");
      break;

    default:
      console.log("No advantage");
      break;
  }
}

function symbolFinder(simbol) {
  switch (simbol) {
    case "USD":
      console.log("$");
      break;
    case "EUR":
      console.log("€");
      break;
    case "GBP":
      console.log("£");
      break;
    case "JPY":
      console.log("¥");
      break;
    case "CHF":
      console.log("Fr");
      break;
    default:
      console.log("Not found");
      break;
  }
}
