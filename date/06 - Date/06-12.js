
// Write a JavaScript function to get the minimum date from an array of dates. 
let min_date = (array) => {

  let min = array[0]
   let minObj = new Date(array[0]);
  

  array.forEach(function(a) {

    let dtObj = new Date(a);

    if (dtObj < minObj) {
      min = a;
      minObj = new Date(a);
    }
  });

  return min;

}
// Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/01/03"


