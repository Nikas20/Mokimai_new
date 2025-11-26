"use strict;";

import { Person, Student, Book } from "./Person.js";

let task1 = () => {
  const student = new Student("John", "Smith", 12);
  student.fullInf();
};

// task1()

let task2 = () => {
  const person = new Person("John", "Smith", 41, "engineer", "France");
  person.introduce();
};

// task2()

let task3 = () => {
  const student = new Student("John", "Smith", 12);
  delete student.class;
  return student;
};

// console.log(task3());

let task4 = () => {
  const student = new Student("John", "Smith", 12);
  const objectLenght = Object.keys(student).length;
  return objectLenght;
};

// console.log(task4());

let task5 = () => {
  const book1 = new Book(
    "J.K. Rowling",
    "Harry Potter and the Chamber of Secrets",
    true
  );
  const book2 = new Book("Homer", "The Odyssey", true);
  const book3 = new Book("Harper Lee", "To Kill a Mockingbird", false);

  const library = [book1, book2, book3];
  let leftToRead = [];
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus) {
    } else {
      leftToRead.push(library[i]);
    }
  }
  return leftToRead.map((e) => e.allInfBook());
};

console.log(task5());
