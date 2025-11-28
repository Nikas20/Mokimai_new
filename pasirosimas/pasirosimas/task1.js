const temperatures = [18, 25, 30, 10, 28];

let result = temperatures.map((e) => ({
  temp: e,
  status: e >= 25 ? "hot" : e >= 15 && e < 25 ? "warm" : "cold",
}));

console.log(result);
