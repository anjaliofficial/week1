class Person {
  static species = "Human";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  // getter and setter
  set setAge(newAge) {
    this.age = newAge;
  }

  get getAge() {
    return this.age;
  }
}

const person1 = new Person("Anjali", 19);
console.log(Person.species); // Human
person1.info(); // Name: Anjali, Age: 19
person1.setAge = 20;
console.log(person1.getAge); // 20
