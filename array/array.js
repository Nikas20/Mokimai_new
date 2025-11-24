"uee strict;";
let task1 = () => {
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
};

// task1();

let task2 = () => {
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
};
// task2();
let task3 = () => {
  const array = [1, 2, 4, 6, 2, 7, 42];
  const res = Math.max(...array);
  console.log(res);
};
// task3();
let task4 = () => {
  let sumNumbers = ([...array]) => {
    let sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sum;
  };

  console.log(sumNumbers([1, 4, 8]));
};
// task4();
let task5 = () => {
  let allPositive = ([...array]) => {
    return array.every((num) => num > 0);
  };
  console.log(allPositive([1, 2, 3, 4, 5]));
  console.log(allPositive([1, 2, -3, 4, 5]));
  console.log(allPositive([0, 0, 1]));
};
// task5();
let task6 = () => {
  let product = ([...array]) => {
    return array.reduce((a, b) => a * b);
  };
  console.log(product([2, 4, 6]));
  console.log(product([-10, 10]));
};
// task6();
let task7 = () => {
  let anyPositive = ([...array]) => {
    return array.some((num) => num > 0);
  };
  console.log(anyPositive([1, 2, 3, 4, 5]));
  console.log(anyPositive([1, 2, -3, 4, 5]));
  console.log(anyPositive([0, 0, 1]));
  console.log(anyPositive([-10, -10, -10]));
  console.log(anyPositive([-10, -10, 1]));
};
// task7();
let task8 = () => {
  let positives = ([...array]) => {
    return array.filter((num) => num > 0);
  };
  console.log(positives([1, -3, 5, -3, 0]));
  console.log(positives([1, 2, 3]));
  console.log(positives([-1, -2, -3]));
};
// task8();
let task9 = () => {
  let mean = ([...array]) => {
    return array.reduce((a, b) => a + b) / array.length;
  };
  console.log(mean([30, 10, 20]));
  console.log(mean([-10, 10]));
};
// task9();
let task10 = () => {
  let evens = ([...array]) => {
    let arr2 = [...array.filter((a) => a % 2 == 0)];
    return arr2;
  };
  console.log(evens([1, 2, 3, 4, 5, 6]));
};
// task10();
let task11 = () => {
  let odds = ([...array]) => {
    let arr2 = [...array.filter((a) => a % 2 != 0)];
    return arr2;
  };
  console.log(odds([1, 2, 3, 4, 5, 6]));
};
// task11();
let task12 = () => {
  let integers = ([...array]) => {
    let arr2 = [...array.filter((a) => Number.isInteger(a))];
    return arr2;
  };
  console.log(integers([3.14, 2.4, 7, 8.1, 2]));
};
// task12();
let task13 = () => {
  let countEvens = ([...array]) => {
    let arr2 = [...array.filter((a) => a % 2 == 0)];
    return arr2.length;
  };
  console.log(countEvens([1, 2, 3, 4, 5]));
  console.log(countEvens([10, 10, 10]));
  console.log(countEvens([1, 1, 1, 2]));
};
// task13();
let task14 = () => {
  let countLessThan = ([...array], num) => {
    return array.filter((a) => a < num).length;
  };
  console.log(countLessThan([1, 2, 3, 4, 5], 2));
  console.log(countLessThan([1, 2, 3, 4, 5], 17));
  console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
  console.log(countLessThan([10, 10, 10, -10, 15, 7], 10));
};
// task14();
let task15 = () => {
  let squareDance = ([...array]) => {
    return array.map((num) => num * num);
  };
  console.log(squareDance([1, 2, 3]));
};
// task15();
let task16 = () => {
  let glueArrays = ([...array], [...array2]) => {
    return array.concat(array2);
  };
  console.log(glueArrays([1, 2, 3], [4, 5, 6]));
  console.log(glueArrays([-10, undefined], [true, "waffles"]));
  console.log(glueArrays([], []));
  console.log(glueArrays([20, 104], []));
  console.log(glueArrays([], ["hello", "world"]));
};
// task16();
let task17 = () => {
  let countValue = ([...array], num) => {
    return array.filter((a) => a == num).length;
  };
  console.log(countValue([1, 2, 3, 4, 5], 2));
  console.log(countValue([1, 2, 3, 4, 5], 17));
  console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1));
  console.log(countValue([10, 10, 10, -10], 10));
  console.log(countValue(["hello", "bananas", "hello"], "hello"));
  console.log(countValue(["hello", "bananas", "hello"], "giraffe"));
};
// task17();
let task18 = () => {
  let findInHaystack = ([...array], num) => {
    return array.includes(num);
  };
  console.log(findInHaystack([1, 2, 30, -10], 480));
  console.log(findInHaystack([1, 2, 30, -10], 30));
  console.log(findInHaystack(["waffle", "giraffe", "banana"], "giraffe"));
  console.log(findInHaystack(["waffle", "giraffe", "banana"], "lemons"));
};
// task18();
let task19 = () => {
  let firstIndexOf = ([...array], num) => {
    return array.indexOf(num);
  };
  console.log(firstIndexOf([10, 20, 30, 20], 20));
  console.log(firstIndexOf([10, 20, 30, 20], 17));
  console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "giraffe"));
  console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "banana"));
};
// task19();
let task20 = () => {
  let isVowel = (str) => {
    const array = ["a", "e", "i", "o", "u"];
    return array.includes(String(str).toLowerCase());
  };
  console.log(isVowel("c"));
  console.log(isVowel("e"));
  console.log(isVowel("A"));
  console.log(isVowel(99));
  console.log(isVowel({ e: "Elephant" }));
};
// task20();
let task21 = () => {
  let removeZAnimals = () => {
    const animals = ["alligator", "zebra", "crocodile", "giraffe"];
    let animalsWithoutZ = [];
    for (let i = 0; i < animals.length; i++) {
      if (
        animals[i].split("").filter((w) => w == "z") != "z" &&
        animals[i].split("").filter((w) => w == "Z") != "Z"
      ) {
        animalsWithoutZ.push(animals[i]);
      }
    }
    return animalsWithoutZ;
  };
  console.log(removeZAnimals());
};
// task21();
let task22 = () => {
  let removeAnyWordWithZ = ([...words]) => {
    let wordsWithoutZ = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes("z") == false && words[i].includes("Z") == false) {
        wordsWithoutZ.push(words[i]);
      }
    }
    return wordsWithoutZ;
  };
  console.log(removeAnyWordWithZ(["aaaa", "weae", "ZZZ", "zzz"]));
};
// task22();
let task23 = () => {
  let removeWordsWithChar = ([...array], char) => {
    let lc = char.toLowerCase();
    let uc = char.toUpperCase();
    const array2 = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(lc) == false && array[i].includes(uc) == false) {
        array2.push(array[i]);
      }
    }
    return array2;
  };
  console.log(removeWordsWithChar(["aaa", "bbb", "ccc"], "b"));
  console.log(removeWordsWithChar(["pizza", "beer", "cheese"], "E"));
};
// task23();
let task24 = () => {
  let reverse = (str) => {
    const arg = str.split("");
    return arg.reverse().join("").toString();
  };
  console.log(reverse("skoob"));
};
// task24();
let task25 = () => {
  let findLongestWord = (str) => {
    const array = str.split(" ");
    let longest = 0;
    let word = null;
    array.forEach(function (str) {
      if (longest < str.length) {
        longest = str.length;
        word = str;
      }
    });
    return word;
  };
  console.log(findLongestWord("a book full of dogs"));
};
// task25();
let task26 = () => {
  let nicer = (str) => {
    let array = str.split(" ");
    let id = 0;

    if (array.find((word) => word == "heck")) {
      id = array.findIndex((word) => word == "heck");
      array.splice(id, 1);
      return array.join(" ").toString();
    } else if (array.find((word) => word == "darn")) {
      id = array.findIndex((word) => word == "darn");
      array.splice(id, 1);
      return array.join(" ").toString();
    } else if (array.find((word) => word == "dang")) {
      id = array.findIndex((word) => word == "dang");
      array.splice(id, 1);
      return array.join(" ").toString();
    } else if (array.find((word) => word == "crappy")) {
      id = array.findIndex((word) => word == "crappy");
      array.splice(id, 1);
      return array.join(" ").toString();
    } else {
      array.splice(id, 1);
      return array.join(" ").toString();
    }
  };
  console.log(nicer("mom get the heck in here and bring me a darn sandwich."));
};
// task26();
let task27 = () => {
  let capitalizeAll = (str) => {
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array.join(" ").toString();
  };
  console.log(capitalizeAll("hello world"));
  console.log(capitalizeAll("every day is like sunday"));
};
// task27();
let task28 = () => {
  let split = (str, operator) => {
    return str.split(operator);
  };
  console.log(split("a-b-c", "-"));
  console.log(split("APPLExxBANANAxxCHERRY", "xx"));
  console.log(split("xyz", "r"));
};
// task28();
let task29 = () => {
  let longLongVowels = (str) => {
    let array = str.split("");

    for (let i = 0; i < array.length; i++) {
      if (array[i] == array[i - 1]) {
        array.splice(i, 0, array[i] + array[i]);
      }
    }
    return array.join("").toString();
  };
  console.log(longLongVowels("Good"));
  console.log(longLongVowels("Cheese"));
  console.log(longLongVowels("Man"));
};
// task29();
let task30 = () => {
  let leetspeak = (str) => {
    let array = str.toLowerCase().split("");
    return array
      .map((char) =>
        char == "a"
          ? (char = 4)
          : char == "e"
          ? (char = 3)
          : char == "g"
          ? (char = 6)
          : char == "i"
          ? (char = 1)
          : char == "o"
          ? (char = 0)
          : char == "s"
          ? (char = 5)
          : char == "t"
          ? (char = 7)
          : (char = char)
      )
      .join("")
      .toString();
  };
  console.log(leetspeak("Leet"));
  console.log(leetspeak("ORANGE"));
};
// task30();
let task31 = () => {
  let recognizeEmployees = ([...array], [...array2]) => {
    let a = array.filter((e) => !array2.includes(e));
    const b = [].concat(
      a.map((e) => `Great job, ${e}!`),
      array2.map((e) => `Outstanding  job, ${e}!`)
    );
    return b;
  };
  console.log(recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill"]));
  console.log(
    recognizeEmployees(["Susan", "Anthony", "Bill"], ["Bill", "Susan"])
  );
  console.log(
    recognizeEmployees(["Susan", "Anthony", "Bill"], ["Jennifer", "Dylan"])
  );
};
// task31();
let task32 = () => {
  let alphaSort = ([...array]) => {
    return array.sort();
  };
  console.log(alphaSort(["b", "a", "c"]));
};
// task32();
let task33 = () => {
  let strLengthSort = ([...array]) => {
    return array.sort((a, b) => a.length - b.length);
  };
  console.log(strLengthSort(["Apple", "Banana", "Cherry"]));
};
// task33();
let task34 = () => {
  let sumSort = ([...array]) => {
    return array.sort();
  };
  console.log(sumSort([[9, 1, 9], [2], [4, 5]]));
};
// task34();
let task35 = () => {
  let sortArray = ([...array]) => {
    return array.sort((a, b) => {
      a - b;
    });
  };
  console.log(sortArray([23, 11, 4, 35, 6]));
};
// task35();
let task36 = () => {
  let result;
  let task = ["1", "2", "3", "4", "5"];

  result = task.map((e) => Number(e));

  console.log(result);
};
// task36();
let task37 = () => {
  let array = ["apple", "pear", "cherry"];
  let result;
  result = array.map((e) => e.toUpperCase());
  console.log(result);
};
// task37();
let task38 = () => {
  let array = [5, 4.23, 6.4, 8.09, 3.2];
  let result;
  result = array.map((e) => `$${e.toFixed(2)}`);
  console.log(result);
};
// task38();
let task39 = () => {
  let array = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let result;
  result = array.map((e) => `$${e.slice(0, 3)}`);
  console.log(result);
};
// task39();
