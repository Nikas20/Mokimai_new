// Write a JavaScript function to get the current date.
let curday = (separator) => {
  let myDate = new Date(Date.now());
  return (
    myDate.getMonth() +
    separator +
    myDate.getDay() +
    separator +
    myDate.getFullYear()
  );
};
// Note : Pass a separator as an argument.
// Test Data :
console.log(curday("/"));
console.log(curday("-"));
// Output :
// "11/13/2014"
// "11-13-2014"
