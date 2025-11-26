// Write a JavaScript function to test whether a date is a weekend.
let is_weekend = (date) => {
  let date2 = new Date(date);
  let day = date2.getDay();
  if (day == 6 || day == 0) {
    return "weekend";
  } else {
    return "undefined";
  }
};
// Note : Use standard Saturday/Sunday definition of a weekend.
// Test Data :
console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));
// Output :
// "weekend"
// "weekend"
// undefined
