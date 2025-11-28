const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 }
];

let rezult = products.map((e) => ({
   title: e.title,
   price: e.price, 
   priceWithVAT: e.price * 1.21
})
)

console.log(rezult);
