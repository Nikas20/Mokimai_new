const items = [
  { name: "Phone", description: "A very nice smartphone with good camera", price: 500 },
  { name: "Laptop", description: "Powerful laptop for work and games", price: 1200 }
];

let rezult = items.map((item) =>
    `${item.name} (${item.price}€): ${item.description.slice(0,22)}...`
)


console.log(rezult);
