# Pengenalan tentang Object-Oriented Programming (OOP)

Proyek ini memperkenalkan konsep dasar **Object-Oriented Programming (OOP)** dalam JavaScript. OOP adalah paradigma pemrograman yang berfokus pada penggunaan objek untuk merepresentasikan entitas dunia nyata. Di dalam OOP, objek memiliki **properti** (data) dan **method** (fungsi) yang menggambarkan perilaku objek.

## Apa itu Object-Oriented Programming?

**Object-Oriented Programming (OOP)** adalah pendekatan dalam pemrograman yang menggunakan objek untuk menyimpan data dan fungsi yang bekerja dengan data tersebut. OOP mempermudah pengorganisasian kode dan mencerminkan bagaimana entitas di dunia nyata berfungsi.

## Properti dan Method

- **Properti**: Adalah nilai yang tersimpan di dalam objek dan menggambarkan karakteristik objek tersebut.
- **Method**: Adalah fungsi yang ada di dalam objek dan menggambarkan aksi atau perilaku yang dapat dilakukan oleh objek tersebut.

Contoh pembuatan objek secara langsung:

```javascript
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
  },
};

car.start(); // Output: Mobil dinyalakan
car.stop(); // Output: Mobil dimatikan
```

## Blueprint Objek dengan Class

Di JavaScript, Anda dapat membuat blueprint objek menggunakan class. Class diperkenalkan di ECMAScript 2015 (ES6) dan memberikan cara yang lebih terstruktur untuk membuat objek dengan properti dan method yang sudah didefinisikan.

### Contoh penggunaan class:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Halo, nama saya ${this.name}`);
  }
}

const person = new Person("John");
person.greet(); // Output: Halo, nama saya John
```

## Contoh Class dengan Properti dan Method

Class memungkinkan kita untuk mendefinisikan properti dan method yang dapat digunakan oleh objek yang dibuat dari class tersebut. Berikut adalah contoh class Car dengan properti dan method.

```javascript
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

const car1 = new Car("BMW", 2010, 250);
const car2 = new Car("Mercedes", 2015, 300);
```

- `car1.drive()`: Memanggil method `drive()` pada objek `car1`.
- `car2.stop()`: Memanggil method `stop()` pada objek `car2`.

## Kesimpulan

Object-Oriented Programming (OOP) memungkinkan kita membuat struktur kode yang lebih terorganisir dengan merepresentasikan entitas dunia nyata sebagai objek yang memiliki properti dan method. Di JavaScript, kita bisa membuat objek secara langsung atau dengan menggunakan class yang lebih terstruktur dan efisien.

Dengan menguasai OOP, kita dapat membangun aplikasi yang lebih mudah dipahami, dipelihara, dan diperluas di masa depan.
