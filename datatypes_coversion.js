let score=33
console.log(typeof score) //number


//if we want to convert the data type of score from number to string we can use the following methods
score=score.toString()
console.log(typeof score) //string


//let assuem the number is in string format and we want to convert it to number we can use the following methods
let result="33"
result=Number(result)
console.log(typeof result) //number


//parseInt and parseFloat are used to convert string to number


result = parseInt(result);

console.log(result); // converted into integer


result = parseFloat(result);

console.log(result); // 33.5 converted into float

let a = "33";
let b = 10;

console.log(a + b);        // "3310"
console.log(Number(a) + b); // 43
console.log(+a + b);        // 43