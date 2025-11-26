"use strict;";

class Person {
  constructor(firstName, lastName, age, job, conty) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.job = job;
    this.conty = conty;
  }

  introduce() {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.conty}`
    );
  }
}

class Student {
  constructor(firstName, lastName, class1) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.class = class1;
  }

  fullInf() {
    console.log(this.firstName + " " + this.lastName + " " + this.class);
  }
}

class Book {
    constructor(author, title, readingStatus){
        this.author = author,
        this.title = title,
        this.readingStatus = readingStatus
    }
    allInfBook(){
        return `${this.author} , ${this.title}`
    }
}

export { Person, Student, Book};
