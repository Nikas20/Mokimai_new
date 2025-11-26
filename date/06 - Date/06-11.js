
//  Write a JavaScript function to get the maximum date from an array of dates.
let max_date = (array) => {
    let max = array[0]
   let maxObj = new Date(array[0]);
  

  array.forEach(function(a) {

    let dtObj = new Date(a);

    if (dtObj > maxObj) {
      max = a;
      maxObj = new Date(a);
    }
  });

  return max;

}
// Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
// Output :
// "2015/02/02"



