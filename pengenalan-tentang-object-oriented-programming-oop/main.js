// Pembuatan objek secara langsung
const car = {
    color: "red",
    price: 23000,
    km: 1200,
    model: "BMW",
    start: function () {
        console.log("Mobil dinyalakan");
    },
    stop: function () {
        console.log("Mobil dimatikan");
    }
};

car.start(); // Output: Mobil dinyalakan
car.stop();  // Output: Mobil dimatikan

// Pembuatan class di JavaScript (diperkenalkan di ES6)
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Halo, nama saya ${this.name}`);
    }
}

const person = new Person('John');
person.greet(); // Output: Halo, nama saya John

// Contoh class dengan properti dan method
class Car {
    constructor(name, year, maxSpeed) {
        this.name = name;
        this.year = year;
        this.maxSpeed = maxSpeed;
    }

    drive() {
        console.log(`${this.name} sedang berjalan`);
    }

    stop() {
        console.log(`${this.name} berhenti`);
    }
}

const car1 = new Car('BMW', 2010, 250);
const car2 = new Car('Mercedes', 2015, 300);

car1.drive(); // Output: BMW sedang berjalan
car1.stop();  // Output: BMW berhenti

car2.drive(); // Output: Mercedes sedang berjalan
car2.stop();  // Output: Mercedes berhenti
