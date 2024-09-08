// Contoh Properti pada Class
class Mail {
    constructor(from, to, subject, body) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;
    }
}

const mail = new Mail('deni@lumoshive.com', 'siti@lumoshive.com', 'Hello', 'Hello world!');
console.log(mail);

// Contoh Getter dan Setter pada Class
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter untuk properti fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter untuk properti fullName
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('John', 'Doe');
console.log(user.fullName); // Output: John Doe
user.fullName = 'Jane Smith'; // Menggunakan setter
console.log(user.fullName); // Output: Jane Smith

// Contoh Method pada Class
class MailWithMethod {
    constructor(sender, message) {
        this.sender = sender;
        this.message = message;
    }

    // Method untuk mengirim pesan
    send() {
        console.log(`Mail sent: ${this.sender} - ${this.message}`);
    }
}

const mailWithMethod = new MailWithMethod('deni@lumoshive.com', 'Hello how are you?');
mailWithMethod.send(); // Output: Mail sent: deni@lumoshive.com - Hello how are you?

// Contoh Visibility Pada Class
class Member {
    #id = null; // Private property

    constructor(name) {
        this.name = name;
        this.#id = this.#createId();
    }

    #createId() {
        return Date.now().toString(36);
    }

    // Method untuk mendapatkan nilai ID yang private
    getId() {
        return this.#id;
    }
}

const member = new Member('Alice');
console.log(member.getId()); // Output: nilai ID private
