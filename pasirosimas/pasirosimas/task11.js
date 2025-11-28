const books = [
  { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
  { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
  { title: "CSS Mastery", pages: 200, tags: ["css"] },
  { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] },
];

let searchBooks = (books, { minPages, hasTag }) => {
  return books.filter((e) => e.pages >= minPages && e.tags.includes(hasTag));
};

console.log(searchBooks(books, { minPages: 150, hasTag: "css" }));
