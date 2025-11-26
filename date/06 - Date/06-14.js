
// Write a JavaScript function to get the amount of days of a year. 
let days_of_a_year = (year) => {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365
}
// Test Data :
console.log(days_of_a_year(2015)); 
// 365
console.log(days_of_a_year(2016));
// 366


