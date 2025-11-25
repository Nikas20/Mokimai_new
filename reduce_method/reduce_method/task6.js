let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  const result = [1, 2, 3, 4, 5, 6];
  result[0] = arr.filter(
    (e) => e.age >= 18 && e.age <= 25 && e.voted == true
  ).length;
  result[1] = arr.filter((e) => e.age >= 18 && e.age <= 25).length;
  result[2] = arr.filter(
    (e) => e.age >= 26 && e.age <= 35 && e.voted == true
  ).length;
  result[3] = arr.filter((e) => e.age >= 26 && e.age <= 35).length;
  result[4] = arr.filter(
    (e) => e.age >= 36 && e.age <= 55 && e.voted == true
  ).length;
  result[5] = arr.filter((e) => e.age >= 36 && e.age <= 55).length;

  return {
    text1: `numYungVotes ${result[0]}`,
    text2: `numYungPeople ${result[1]}`,
    text3: `numMidVotes ${result[2]}`,
    text4: `numMidPeople ${result[3]}`,
    text5: `numOldVotes ${result[4]}`,
    text6: `numOldPeople ${result[5]}`,
  };
}

console.log(voterResults(voters));
