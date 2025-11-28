const employees = [
  { name: "Jonas", department: "IT", salary: 2000 },
  { name: "Ona", department: "HR", salary: 1800 },
  { name: "Petras", department: "IT", salary: 2200 },
  { name: "Greta", department: "HR", salary: 2100 }
];

let sortingDepartment = (arr) => {
 arr.sort((a, b) => a.department.localeCompare(b.department))
 return arr
} 
let sortingSalary = (arr) => {
 arr.sort((a, b) => b.salary - a.salary)
 return arr
} 


console.log(sortingDepartment(employees));
console.log(sortingSalary(employees));