"uee strict;";
function task1() {
  let people = [
    "Lebron",
    "Aaliyah",
    "Diamond",
    "Dominique",
    "Aliyah",
    "Jazmin",
    "Darnell",
    "Hatfield",
    "Hawkins",
    "Hayden",
    "Hayes",
    "Haynes",
    "Hays",
    "Head",
    "Heath",
    "Hebert",
    "Henderson",
    "Hendricks",
    "Hendrix",
    "Henry",
    "Hensley",
    "Henson",
    "Herman",
    "Hernandez",
    "Herrera",
    "Herring",
    "Hess",
    "Hester",
    "Hewitt",
    "Hickman",
    "Hicks",
    "Higgins",
    "Hill",
    "Hines",
    "Hinton",
    "Hobbs",
    "Hodge",
    "Hodges",
    "Hoffman",
    "Hogan",
    "Holcomb",
    "Holden",
    "Holder",
    "Holland",
    "Holloway",
    "Holman",
    "Holmes",
    "Holt",
    "Hood",
    "Hooper",
    "Hoover",
    "Hopkins",
    "Hopper",
    "Horn",
    "Horne",
    "Horton",
    "House",
    "Houston",
    "Howard",
    "Howe",
    "Howell",
    "Hubbard",
    "Huber",
    "Hudson",
    "Huff",
    "Waldo",
    "Hughes",
    "Hull",
    "Humphrey",
    "Hunt",
    "Hunter",
    "Hurley",
    "Hurst",
    "Hutchinson",
    "Hyde",
    "Ingram",
    "Irwin",
    "Jackson",
    "Jacobs",
    "Jacobson",
    "James",
    "Jarvis",
    "Jefferson",
    "Jenkins",
    "Jennings",
    "Jensen",
    "Jimenez",
    "Johns",
    "Johnson",
    "Johnston",
    "Jones",
    "Jordan",
    "Joseph",
    "Joyce",
    "Joyner",
    "Juarez",
    "Justice",
    "Kane",
    "Kaufman",
    "Keith",
    "Keller",
    "Kelley",
    "Kelly",
    "Kemp",
    "Kennedy",
    "Kent",
    "Kerr",
    "Key",
    "Kidd",
    "Kim",
    "King",
    "Kinney",
    "Kirby",
    "Kirk",
    "Kirkland",
    "Klein",
    "Kline",
    "Knapp",
    "Knight",
    "Knowles",
    "Knox",
    "Koch",
    "Kramer",
    "Lamb",
    "Lambert",
    "Lancaster",
    "Landry",
    "Lane",
    "Lang",
    "Langley",
    "Lara",
    "Larsen",
    "Larson",
    "Lawrence",
    "Lawson",
    "Le",
    "Leach",
    "Leblanc",
    "Lee",
    "Leon",
    "Leonard",
    "Lester",
    "Levine",
    "Levy",
    "Lewis",
    "Lindsay",
    "Lindsey",
    "Little",
    "Livingston",
    "Lloyd",
    "Logan",
    "Long",
    "Lopez",
    "Lott",
    "Love",
    "Lowe",
    "Lowery",
    "Lucas",
    "Luna",
    "Lynch",
    "Lynn",
    "Lyons",
    "Macdonald",
    "Macias",
    "Mack",
    "Madden",
    "Maddox",
    "Maldonado",
    "Malone",
    "Mann",
    "Manning",
    "Marks",
    "Marquez",
    "Marsh",
    "Marshall",
    "Martin",
    "Martinez",
    "Mason",
    "Massey",
    "Mathews",
    "Mathis",
    "Matthews",
    "Maxwell",
    "May",
    "Mayer",
    "Maynard",
    "Mayo",
    "Mays",
    "Mcbride",
    "Mccall",
    "Mccarthy",
    "Mccarty",
    "Mcclain",
    "Mcclure",
    "Mcconnell",
    "Mccormick",
    "Mccoy",
    "Mccray",
    "Waldo",
    "Mcdaniel",
    "Mcdonald",
    "Mcdowell",
    "Mcfadden",
    "Mcfarland",
    "Mcgee",
    "Mcgowan",
    "Mcguire",
    "Mcintosh",
    "Mcintyre",
    "Mckay",
    "Mckee",
    "Mckenzie",
    "Mckinney",
    "Mcknight",
    "Mclaughlin",
    "Mclean",
    "Mcleod",
    "Mcmahon",
    "Mcmillan",
    "Mcneil",
    "Mcpherson",
    "Meadows",
    "Medina",
    "Mejia",
    "Melendez",
    "Melton",
    "Mendez",
    "Mendoza",
    "Mercado",
    "Mercer",
    "Merrill",
    "Merritt",
    "Meyer",
    "Meyers",
    "Michael",
    "Middleton",
    "Miles",
    "Miller",
    "Mills",
    "Miranda",
    "Mitchell",
    "Molina",
    "Monroe",
    "Lucas",
    "Jake",
    "Scott",
    "Amy",
    "Molly",
    "Hannah",
    "Lucas",
  ];

  const result = people.findIndex((person) => person === "Waldo");
  console.log(result);
  const result2 = people.filter((person) => person === "Waldo").length;
  console.log(result2);
}

// task1();

function task2() {
  let myArray = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  console.log(myArray[2]);

  myArray[4] = null;
  console.log(myArray[4]);
}
// task2();
function task3() {
  const array = [1, 2, 4, 6, 2, 7, 42];
  const res = Math.max(...array);
  console.log(res);
}
// task3();
function task4() {
  function sumNumbers([...array]) {
    let sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sum;
  }

  console.log(sumNumbers([1, 4, 8]));
}
// task4();
function task5() {
  function allPositive([...array]) {
    return array.every((num) => num > 0);
  }
  console.log(allPositive([1, 2, 3, 4, 5]));
  console.log(allPositive([1, 2, -3, 4, 5]));
  console.log(allPositive([0, 0, 1]));
}
// task5();
function task6() {
  function product([...array]) {
    return array.reduce((a, b) => a * b);
  }
  console.log(product([2, 4, 6]));
  console.log(product([-10, 10]));
}
// task6();
function task7() {
  function anyPositive([...array]) {
    return array.some((num) => num > 0);
  }
  console.log(anyPositive([1, 2, 3, 4, 5]));
  console.log(anyPositive([1, 2, -3, 4, 5]));
  console.log(anyPositive([0, 0, 1]));
  console.log(anyPositive([-10, -10, -10]));
  console.log(anyPositive([-10, -10, 1]));
}
// task7();
function task8() {
  function positives([...array]) {
    return array.filter((num) => num > 0);
  }
  console.log(positives([1, -3, 5, -3, 0]));
  console.log(positives([1, 2, 3]));
  console.log(positives([-1, -2, -3]));
}
// task8();
function task9() {}
// task9();
function task10() {}
// task10();
function task11() {}
// task11();
function task12() {}
// task12();
function task13() {}
// task13();
function task14() {}
// task14();
function task15() {}
// task15();
function task16() {}
// task16();
function task17() {}
// task17();
function task18() {}
// task18();
function task19() {}
// task19();
function task20() {}
// task20();
function task21() {}
// task21();
function task22() {}
// task22();
function task23() {}
// task23();
function task24() {}
// task24();
