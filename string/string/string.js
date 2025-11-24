"use strict;";

let task1 = (str) => {
  let result;
  result = str.replaceAll(" ", "");
  console.log(result);
};
// task1("V a l e n t i n");
let task2 = (str) => {
  let result;
  result = +str;
  console.log(result);
};
// task2("20");
let task3 = (str) => {
  let result;
  result = str.slice(0, 1);
  console.log(result);
};
// task3("Viktor");
let task4 = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      result++;
    }
  }
  console.log(result);
};
// task4("Mew mew mew");
let task5 = (str) => {
  let array = [];
  array = str.split(" ");
  let result;
  result = array
    .filter((e) => e.length >= 3)
    .join(" ")
    .toString();
  console.log(result);
};
// task5("A la li lua lu all");

let is_string = (str) => {
  let result;
  result = typeof str === "string";
  console.log(result);
};
// is_string("w3resource");
// is_string([1, 2, 4, 0]);

let is_Blank = (str) => {
  let result;
  result = str === "";
  console.log(result);
};
// is_Blank("");
// is_Blank("abc");

let string_to_array = (str) => {
  let result;
  result = str.split(" ");
  console.log(result);
};
// string_to_array("Robin Singh");
let truncate_string = (str, num) => {
  let result;
  result = str.slice(0, num);
  console.log(result);
};
// truncate_string("Robin Singh", 4);

let abbrev_name = (str) => {
  let result;
  let strArray = str.split(" ");
  result = strArray[0] + " " + strArray[1].slice(0, 1) + ".";
  console.log(result);
};
// abbrev_name("Robin Singh")

let protect_email = (str) => {
  let result;
  let strArray = str.split("@");
  result = strArray[0].slice(0, strArray[0].length / 2) + "..." + strArray[1];
  console.log(result);
};
// protect_email("robin_singh@example.com");

let string_parameterize = (str) => {
  let result;
  let strArray = str.split(" ");
  result = strArray.join("-").toLowerCase();
  console.log(result);
};
// string_parameterize("Robin Singh from USA.");

let capitalize = (str) => {
  let result;
  result = str[0].toUpperCase() + str.slice(1);
  console.log(result);
};
// capitalize('js string exercises');

let capitalize_Words = (str) => {
  let result;
  let strArray = str.split(" ");

  result = strArray.map((e) => e[0].toUpperCase() + e.slice(1)).join(" ");
  console.log(result);
};
// capitalize_Words("js string exercises");

let swapcase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result +=
      str[i] === str[i].toUpperCase()
        ? str[i].toLowerCase()
        : str[i].toUpperCase();
  }
  console.log(result);
};
// swapcase("AaBbc");

let camelize = (str) => {
  let result = "";
  let strArray = str.split(" ");
  result += strArray.map((e) => e[0].toUpperCase() + e.slice(1)).join("");
  console.log(result);
};
// camelize("JavaScript Exercises")
// camelize("JavaScript exercises")
// camelize("JavaScriptExercises")

let uncamelize = (str, operator = " ") => {
  let result;
  let strArray = str.split(/(?=[A-Z])/);
  result = strArray.join(operator);

  console.log(result);
};
// uncamelize("helloWorld");
// uncamelize("helloWorld", "-");
// uncamelize("helloWorld", "_");

let repeat = (str, num = 1) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  console.log(result);
};
// repeat('Ha!')
// repeat('Ha!',2)
// repeat('Ha!',3)

let insert = (str, str2 = "", char = 0) => {
  let result;

  result =

  console.log(result);
};
insert('We are doing some exercises.')
insert('We are doing some exercises.','JavaScript ')
insert('We are doing some exercises.','JavaScript ',18)
let humanize_format = (str) => {
  let result;

  console.log(result);
};

let text_truncate = (str) => {
  let result;

  console.log(result);
};
