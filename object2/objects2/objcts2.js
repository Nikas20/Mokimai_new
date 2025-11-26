"use strict"
import { MinMax } from "./objectClasses.js"

let task1 = (num , minMax) => {
   return num > minMax.getMin() && num < minMax.getMax() ? true : false
   // 
}

// console.log(task1(4,new MinMax(0, 5)));

