var cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
];

let coolCities = (cities) => {
  return cities.filter((e) => e.temperature < 70);
};

// console.log(coolCities(cities));

let cityNames = (cities) => {
  return cities.map((e) => e.name);
};

// console.log(cityNames(cities));
