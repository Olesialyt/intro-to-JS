//********************************* 1 *********************************

// let x = +prompt("Координати центру кола по x: ");
// let y = +prompt("Координати центру кола по у: ");
// let radius = +prompt("Pадіус: ");

// class Circle {
//   constructor(x, y, radius) {
//     this._center = { x: x, y: y };
//     this._radius = radius;
//   }
//   get perimeter() {
//     return this.calcPerimeter();
//   }
//   calcPerimeter() {
//     return 2 * Math.PI * this._radius;
//   }
//   static perimeter(radius) {
//     return 2 * Math.PI * radius;
//   }
//     circleCopy() {
//     return new CircleCopy(...Object.values(this));
//   }
//   static circleObject(center, radius) {

//   }
// }


// ********************************* 2. *********************************

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
const propsCount = currentObject => Object.keys(currentObject).length;
// console.log(propsCount(mentor));


// ********************************* 3. *********************************

//, який виводитиме поточний курс студента (від 1 до 6)<<<. Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
class Person {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }
  showFullName() {
    return `Name is: ${this._name}; Surname is: ${this._surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
  }
  showFullName(midleName) {
    //polymorphism??
    return `Name is: ${this._name}; Middle name is: ${midleName}; Surname is: ${this._surname}`;
  }
  showCourse() {
    const date = new Date();
    return date.getFullYear() - this._year;
  }
}

// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());


//********************************* 4. *********************************

const text = `ABCDEFGHIJKLMNOPQRSTUVWXYZ⁂•~&#`;
class Marker {
  constructor(color, inkQuantity) {
    this.color = color;
    this.inkQuantity = inkQuantity;
  }
  print(text) {
    text.split("").forEach(char => {
      document.write(
        `<span style="color: ${this.color};
            opacity: ${this.inkQuantity};">${char} </span>`
      );
      this.inkQuantity -= 0.05; //"витікання чорнила" з кожним наступним символом.
    });
  }
}
class RefillableMarker extends Marker {
  constructor(color, inkQuantity) {
    super(color, inkQuantity);
  }
  print(text) {
    text.split("").forEach(char => {
      while (this.inkQuantity < 1) {
        // чорнила менше нiж 1 -> викликає метод refill, i "дозаправляє".
        this.refill();
      }
      document.write(
        `<span style="color: ${this.color};
              opacity: ${this.inkQuantity};">${char} </span>`
      );
      this.inkQuantity -= 0.05;
    });
  }

  refill() {
    this.inkQuantity += 0.05;
  }
}

let marker = new Marker("#FFA500", 1); // instance для першого класу
marker.print(text);
let marker2 = new Marker("#FFFFFF", 0.5); // instance для першого класу
marker2.print(text);
let refillableMarker = new RefillableMarker("#FF8C00", 1); // instance для другого класу яка додадково викликає метод refill.
refillableMarker.print(text);
let refillableMarker2 = new RefillableMarker("#B0C4DE", 0.4); // instance для другого класу яка додадково викликає метод refill.
refillableMarker2.print(text);

//********************************* 5. *********************************

// Create several instances of the class (employees) with different salaries, as shown in the example below. Sort the employee salaries with the highest experience in ascending order and output the result in the format: worker_fullName: salary_value
// Implement dynamic sorting for any number of employee instances of the Worker class.

class Worker {
  #experience = 1.2;

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  showSalary() {
    return this.dayRate * this.workingDays;
  }
  set setExp(value) {
    this.#experience = value;
  }
  get showExp() {
    return this.#experience;
  }

  showSalaryWithExperience() {
    return this.showSalary() * this.#experience;
  }
}

//instances для класiв:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName + " salary: " + worker1.showSalary());
console.log("New experience: " + worker1.showExp);

console.log(
  worker1.fullName + " salary: " + worker1.showSalaryWithExperience()
);
worker1.setExp = 1.5; //тобто я можу присвоїти??? до сет
console.log("New experience: " + worker1.showExp);

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 2;
console.log("New experience: " + worker2.showExp);
console.log(
  worker2.fullName + " salary: " + worker2.showSalaryWithExperience()
);

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 2.5;
console.log("New experience: " + worker3.showExp);
console.log(
  worker2.fullName + " salary: " + worker3.showSalaryWithExperience()
);
