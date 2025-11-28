const products = [
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "Monitor", price: 120, inStock: true },
  { title: "USB Cable", price: 5, inStock: true },
];

let result = products
  .filter((e) => e.inStock)
  .filter((e) => e.price >= 10)
  .sort((a, b) => a.price - b.price)
  .map((e) => e.title);

console.log(result);
