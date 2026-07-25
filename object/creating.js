// Creating Objects
//Method 1 (Most Common)
const car = {
    brand: "BMW",
    model: "M5",
    year: 2024
};
//Method 2

//Using new Object()

const car = new Object();

car.brand = "BMW";
car.model = "M5";
//Method 3

//Constructor Function

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const s1 = new Student("Rahul",20);
//Method 4

//Object.create()

const obj = Object.create(null);

//Used for creating objects with custom prototype.