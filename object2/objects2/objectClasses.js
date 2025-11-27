"use strict;"

class MinMax {
    constructor(min, max) {
       this.min = min
       this.max = max 
    }
    getMin(){
        return this.min
    }
    getMax(){
        return this.max
    }
}

class Scrabble {
    constructor(tile, score) {
        this.tile = tile
        this.score = score
    }
}

export {MinMax, Scrabble}