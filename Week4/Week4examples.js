// The last data type: Object
console.log(typeof new Object());
console.log(typeof new Array());
console.log(typeof new Function()); // because the ECMASpec says if it's callable then type is function


// Built In Prototypes
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Function.prototype));


// ES5 Classes
// **changes to that prototype propagate to the new object, even after instantiation
// This is a dog class
function Dog(type, name) {
    this.type = type;
    this.name = name;
}
const puppy = new Dog('dalmation', 'snoopy');
Dog.prototype.speak = function(word) {
    console.log(`This ${this.type} says ${word}`);
}
puppy.speak('woof');

// Dangers of Prototypes

// ES6 CLASSES SLIDES
class Bear {
    constructor(type) {
        this.type = type;
    }

    speak(word) {
        console.log(`The ${this.type} bear says '${word}'`);
    }
}

class Polar extends Bear {
    constructor(type) {
        super(type);
    }

    speak(word) {
        super.speak(word);
        console.log(`${this.type} it is too cold.`);
    }
}


// ES6 CLASSES DEMO
class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }

    get area() {
        return this.height * this.width;
    }
}

const rectangle = new Polygon(10, 15);
console.log(rectangle.getArea());
console.log(rectangle.area); // immediately sometimes if we dont need to pass any args.


// CLASSES WITH INHERITANCE
class Square extends Polygon {
    constructor(height, width) {
        super(height, width);
    }

    getArea() {
        return `This square is ${super.getArea()}`;
    }
}
const square = new Square(10, 10);
console.log(square.getArea());


// ES6 CLASSES WITH DOT CHAINING
class Calculator {
    constructor(number = 0) {
        this.number = number;
    }

    add(n) {
        this.number = this.number + n;
        return this;
    }

    subtract(n) {
        this.number = this.number - n;
        return this;
    }

    get total() {
        return this.number;
    }
}

const calc = new Calculator();
const total = calc.add(2).add(2).subtract(3).add(4).total;
console.log(total);