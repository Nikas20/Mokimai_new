// Write a JavaScript function that will return the number of minutes in hours and minutes.
let timeConvert = (minut) => {
  let hour = Math.round(minut / 60);
  let minutLeft = minut - hour * 60;
  return `${hour} hour(s) and ${minutLeft} minute(s).`;
};
// Test Data :
console.log(timeConvert(200));
// Output :
// "200 minutes = 3 hour(s) and 20 minute(s)."
