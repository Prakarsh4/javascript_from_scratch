/*
Create an object for a student with name, age, and CGPA.
Add a new property called branch.
Delete the age property.
Print all keys using Object.keys().
Print all values using Object.values().
Check if cgpa exists.
Loop through the object and print each key/value
*/
 const student={
    name:"Prakarsh",
    age:20,
    cgpa:8.5
 }
 student.branch="CSE"
 delete student.age
 console.log(Object.keys(student))
 console.log(Object.values(student))
console.log(student.hasOwnProperty("cgpa"))
Object.entries(student).forEach(([key,value])=>{
    console.log(`${key}: ${value}`)
});
console.log(Object.entries(student))
const result = Object.entries(student).map(([key, value]) => {
  return `${key}: ${value}`;
});

console.log(result);