const input =
  "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

const splt = input.split("\n");

const tegs = splt[0].split(",");

const rezult = [];

for (let i = 1; i < splt.length; i++) {
  let task = splt[i].split(",");
  rezult.push({
    [tegs[0]]: `${task[0]}`,
    [tegs[1]]: `${task[1]}`,
    [tegs[2]]: `${task[2]}`,
  });
}

console.log(rezult);
