# Properti dan Method Pada Class

Proyek ini menjelaskan konsep **Properti** dan **Method** dalam sebuah class di JavaScript. Class digunakan untuk membuat cetak biru objek dengan properti dan method yang sudah didefinisikan. Selain itu, proyek ini juga mencakup penggunaan getter, setter, dan visibility (hak akses) pada properti dan method di dalam class.

## Properti Pada Class

**Properti** adalah nilai-nilai yang didefinisikan di dalam sebuah class. Properti ini menggambarkan karakteristik dari sebuah instance class. Dalam JavaScript, properti biasanya dideklarasikan di dalam method `constructor`.

Contoh:

```javascript
class Mail {
  constructor(from, to, subject, body) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

const mail = new Mail(
  "deni@lumoshive.com",
  "siti@lumoshive.com",
  "Hello",
  "Hello world!"
);
console.log(mail);
```

Pada contoh di atas, `from, to, subject, dan body` adalah properti yang dideklarasikan di dalam `class Mail`.

## Getter dan Setter Pada Class

Getter dan setter memungkinkan Anda untuk mengakses dan mengubah properti class dengan cara yang lebih fleksibel. Getter digunakan untuk mengambil nilai properti, sedangkan setter digunakan untuk mengatur nilai properti.

### Contoh penggunaan getter dan setter:

```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user.fullName); // Output: John Doe
user.fullName = "Jane Smith";
console.log(user.fullName); // Output: Jane Smith
```

## Method Pada Class

Method adalah fungsi yang berada di dalam class dan biasanya menggambarkan aksi atau perilaku yang dapat dilakukan oleh objek. Method ini dapat diakses melalui instance dari class tersebut.

### Contoh:

```javascript
class MailWithMethod {
  constructor(sender, message) {
    this.sender = sender;
    this.message = message;
  }

  send() {
    console.log(`Mail sent: ${this.sender} - ${this.message}`);
  }
}

const mailWithMethod = new MailWithMethod(
  "deni@lumoshive.com",
  "Hello how are you?"
);
mailWithMethod.send(); // Output: Mail sent: deni@lumoshive.com - Hello how are you?
```

Pada contoh di atas, `send()` adalah method yang digunakan untuk mengirim pesan.

## Visibility Pada Class

**Visibility** menentukan hak akses dari properti dan method di dalam class. Ada dua jenis visibilitas di JavaScript:

- `Public`: Properti dan method yang dapat diakses di luar class.
- `Private`: Properti dan method yang hanya dapat diakses di dalam class.

### Contoh private property:

```javascript
class Member {
  #id = null; // Private property

  constructor(name) {
    this.name = name;
    this.#id = this.#createId();
  }

  #createId() {
    return Date.now().toString(36);
  }

  getId() {
    return this.#id;
  }
}

const member = new Member("Alice");
console.log(member.getId()); // Output: nilai ID private
```

Pada contoh di atas, properti `#id` bersifat private dan hanya bisa diakses melalui method `getId()`.

## Kesimpulan

Properti dan Method pada class merupakan dasar dari pemrograman berorientasi objek. Dengan memahami konsep properti, method, getter, setter, dan visibility, Anda dapat membuat kode yang lebih terstruktur dan mudah dipelihara. Class memberikan fleksibilitas dan keteraturan dalam pengelolaan data dan perilaku objek.
