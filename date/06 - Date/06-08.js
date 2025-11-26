// Write a JavaScript function to get difference between two dates in days.
let date_diff_indays = (date1, date2) => {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  return Math.round((d2.getTime() - d1.getTime()) / (24 * 60 * 60 * 1000));
};
// Test Data :
console.log(date_diff_indays("04/02/2014", "11/04/2014"));
console.log(date_diff_indays("12/02/2014", "11/04/2014"));
// Output :
// 216
// -28
