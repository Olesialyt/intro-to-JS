//********************************* 1 *********************************
class Circle {
  constructor(x, y, radius) {
    this._center = { x: x, y: y };
    this._radius = radius;
  }
  calcPerimeter() {
    return 2 * Math.PI * this._radius;
  }
  static perimeter(radius) {
    return 2 * Math.PI * radius;
  }
  circleCopy() {
    return new CircleCopy(...Object.values(this));
  }
  static circleObject(x, y, radius) {
    return new Circle(x, y, radius);
  }
  isPointInside(x, y) {
    //prettier-ignore
    const formula = (x ** 2) + (y ** 2) - (this._radius ** 2);
    formula <= 0 ? console.log("inside") : console.log("outside");
  }
  toString() {
    return `Center is: ${this._center}; Radius is: ${this._radius}`; //???метод перетворення >>> toString()).
  }
}
const circle1 = new Circle(0, 0, 5);
circle1.isPointInside(2, 10);
console.log(circle1._center);

// ********************************* 2. *********************************

let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
const propsCount = currentObject => Object.keys(currentObject).length;
// console.log(propsCount(mentor));

// ********************************* 3. *********************************
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
    return `Name is: ${this._name}; Middle name is: ${midleName}; Surname is: ${this._surname}`;
  }
  showCourse() {
    try {
      const date = new Date();
      const course = date.getFullYear() - this._year;
      if (course < 1 || course > 6) {
        throw new RangeError("The course number is out of range");
      }
      return course;
    } catch (error) {
      console.error(error);
    }
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
  static sort(arr) {
    //динамiчний??
    arr = arr.sort((a, b) => a.showExp - b.showExp);
    arr.forEach(el => {
      console.log(`${el.fullName}: ${el.showSalaryWithExperience()}`);
    });
  }
}

//instances для класiв:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName + " salary: " + worker1.showSalary());
console.log("New experience: " + worker1.showExp);

console.log(
  worker1.fullName + " salary: " + worker1.showSalaryWithExperience()
);
worker1.setExp = 2.5;
console.log("New experience: " + worker1.showExp);

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 2;
console.log("New experience: " + worker2.showExp);
console.log(
  worker2.fullName + " salary: " + worker2.showSalaryWithExperience()
);

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(
  worker2.fullName + " salary: " + worker3.showSalaryWithExperience()
);

Worker.sort([worker1, worker2, worker3]);
