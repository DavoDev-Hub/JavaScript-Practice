// - 1 -
// Create a "Course" class which has three properties: "title", "length"
// and "price" (all set up in the constructor). Instantiate the class twice
// (two dummy courses of your choice). Output the objects to the console.

// - 2 -

// Add two methods to the "Course" class: A method which calculates the
// length/price value ("how much length do you get for the amount paid")
// and one method that outputs a nice course summary (including title,
// length and price). Call these methods thereafter (and output the result
// to the console).

// - 3 -
// Create two new, more specialized, classes: "PracticalCourse" and
// "TheoreticalCourse". Both should be based on the "Course" class but
// "PracticalCourse" should also have a "numOfExercises" property,
// "TheoreticalCourse" should have a "publish()" method (which just prints
// something to the console). Instantiate both and use the new AND old
// properties and methods.

// - 4 -
// Use getters and setters to ensure that the "price" property can only be
// set to a positive value and is returned with a "$" in front of it.

class Course {
  title;
  length;
  price;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  } // Constructor to initialize the properties

  calculateValue() {
    return ((this.length / this.price) * 100).toFixed(2);
  } // Calculates the value of length per price

  getCourseSummary() {
    return `Course Title: ${this.title}, Length: ${this.length}, Price: $${this.price}`;
  } // Returns a summary of the course
}

class PracticalCourse extends Course {
  numOfExercises;

  constructor(title, length, price, numOfExercises) {
    super(title, length, price); // Llama al constructor de la clase base
    this.numOfExercises = numOfExercises; // Inicializa la nueva propiedad
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price); // Llama al constructor de la clase base
  }

  publish() {
    console.log("Course published successfully!");
  }
}

console.log("-------1-------");
const course1 = new Course("JavaScript Basics", 3, 199.99);
const course2 = new Course("Advanced CSS", 2, 149.99);

console.log(course1.calculateValue());
console.log(course2.calculateValue());
console.log(course1.getCourseSummary());
console.log(course2.getCourseSummary());

console.log("--------------");
const practicalCourse = new PracticalCourse("React Basics", 4, 299.99, 10);
console.log(practicalCourse.getCourseSummary());
console.log(`Number of Exercises: ${practicalCourse.numOfExercises}`);

console.log("--------------");
const theoreticalCourse = new TheoreticalCourse("Angular Basics", 5, 249.99);
console.log(theoreticalCourse.getCourseSummary());
theoreticalCourse.publish();
