class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
    }
    const person1 = new Person('ram', 22);
    person1.sayHello();
    class Student extends Person {
        constructor(name, age, university) {
            super(name, age);
            this.university = university;
        }
        sayHello() {
            super.sayHello();
            console.log(`I am a student of ${this.university}`);
        }
    }
    const student1 = new Student('swapnil', 25, 'SPPU');
    student1.sayHello();

