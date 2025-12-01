const products = [
  "  Super PHONE 3000 ",
  "mega-laptop",
  "WiFi ROUTER",
  "portable-charger ",
  "USB cable",
];

let transformEach = (arr) => {
  return arr.map((e) => e.trim().replace("-", " ").toLowerCase());
};
console.log(transformEach(products));
