function flatten(arr) {
  return arr.reduce((a, b) => {
    return a.concat(b);
  });
}

let arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays));
