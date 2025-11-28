const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" }
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 }
];

const rezult = people.map(human => {
    let merge = scores.find(e => e.id == human.id)
    return merge ? {...human, ...merge} : human;
})

console.log(rezult);
