"use strict"
import { MinMax, Scrabble } from "./objectClasses.js"

let task1 = (num, minMax) => {
   return num > minMax.getMin() && num < minMax.getMax() ? true : false
   // 
}

// console.log(task1(4,new MinMax(0, 5)));

let separatekey = (obj) => {
   return [Object.keys(obj), Object.values(obj)]
}

// console.log(separatekey({ a: 1, b: 2, c: 3 }));

let scrabble = (arr) => {
   return arr.map(e => e.score).reduce((x, y) => x + y)
}

// console.log(scrabble([{ tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 }]));

let emptyObject = (obj) => {
   return Object.keys(obj).length === 0;
}

// console.log(emptyObject({}));
// console.log(emptyObject({ a: 1 }));
