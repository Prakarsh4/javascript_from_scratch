/*Medium
Merge two objects.
Count the number of properties in an object.
Find the key with the largest numeric value.
Swap keys and values (assuming values are unique).
Convert an object into an array using Object.entries()
*/

const obj1={
    name:"Prakarsh",
    age:20,
    cgpa:8.5
}
const obj2={
    branch:"CSE",
    year:2024,
    internship:true
}
const mergedObj= Object.assign({},obj1,obj2)
console.log(mergedObj)
 const merged = {
  ...obj1,
  ...obj2
};

console.log(merged);

//Count the number of properties in an object.
 let count= 0;
 for(let key in mergedObj){
    if(mergedObj.hasOwnProperty(key)){
        count++;
    }
 }
 //or we can use Object.keys() method to count the number of properties in an object.
 console.log(count);
 const num= Object.keys(mergedObj).length;
 console.log(num);

 //Find the key with the largest numeric value.
 const marks={
    math: 90,
    science: 85,
    english: 95,
    history: 80
 }
 const maxKey= Object.keys(marks).reduce((a,b)=>marks[a]>marks[b]?a:b)
 console.log(maxKey)
 const maxValue= Object.values(marks).reduce((a,b)=>a>b?a:b)
 console.log(maxValue)

 //or we can use Object.entries() method to find the key with the largest numeric value.
 const [maxKeys, maxValues] = Object.entries(marks).reduce(
  (max, current) => (current[1] > max[1] ? current : max)
);

console.log(maxKeys, maxValues);


//Swap keys and values (assuming values are unique).
const swapped = {};

for (const [key, value] of Object.entries(student)) {
  swapped[value] = key;
}

console.log(swapped);