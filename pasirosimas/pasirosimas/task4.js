const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] },
];

const tags = posts.map((e) => e.tags);

const rezult = tags[0]
  .concat(tags[1].filter((e) => !tags[0].some((el) => el == e)))
  .concat(tags[2].filter((e) => !tags[0].some((el) => el == e)))
  .sort();

console.log(rezult);
