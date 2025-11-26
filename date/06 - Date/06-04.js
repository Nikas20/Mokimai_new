// Write a JavaScript function to get the month name from a particular date. 

let month_name = (date) => {
    return date.toLocaleString('en', { month: 'long' });
}

// Test Data :
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
// Output :
// "October" 
// "November"
// 


