let mostFrequentChar = (str) => {
  const arr = str.split("");
  let counts = arr.reduce((e, i) => {
    e[i] = (e[i] || 0) + 1;
    return e;
  }, {});

  let arr1 = Object.values(counts);
  let arr2 = Object.keys(counts);

  let maxV = 0;
  let max = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (maxV < arr1[i]) {
      maxV = arr1[i];
      max = i;
    }
  }
  return arr2[max];
};

console.log(mostFrequentChar("Hello world"));
