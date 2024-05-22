class person {
  name = "abul";
  address = "sadar ghat";
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
}

const person1 = new person(23, "faysal");
// console.log(person1);

function car(model, brand, name) {
  this.model = model;
  this.brand = brand;
  this.name = name;
}

const tesla = new car("BWD45", "Premio", "BMW");
// console.log(tesla);

const name = "Bubt";
const department = "CSE";
const intake = 42;

const dog = { name, department, intake };
// console.log(dog);

const name1 = "amon chena";
const color = "White";
const age = 23;

const brek = function () {
  console.log("Woof Woof!");
};

const anotherDog = { name1, color, age, brek };
anotherDog.brek();
// console.log(anotherDog);
