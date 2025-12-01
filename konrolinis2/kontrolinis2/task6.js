const arrOfArrs = [
  ["aaron", "ake", "anna", "aje"],
  ["becky", "ben", "bright"],
  ["cara", "chris"],
  ["david", "daniel", "danielle", "djenue"],
];

let arrReduce = (arr) => {
  return arr.reduce((a, b) => {
    return a.concat(b);
  });
};

console.log(arrReduce(arrOfArrs));
