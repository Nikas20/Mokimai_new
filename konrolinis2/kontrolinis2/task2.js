const movies = [
  { title: "Skyfall", year: 2012, rating: 7.8, genre: "action" },
  { title: "Inside Out", year: 2015, rating: 8.2, genre: "animation" },
  { title: "The Room", year: 2003, rating: 3.7, genre: "drama" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "Frozen", year: 2013, rating: 7.5, genre: "animation" },
];

let filterArr = (arr) => {
  return arr
    .filter((e) => e.year > 2010 && e.rating >= 7.5)
    .sort((a, b) => b.rating - a.rating);
};

console.log(filterArr(movies));
