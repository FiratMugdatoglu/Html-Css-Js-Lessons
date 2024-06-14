//!   STATIC NEDİR ?

class Matematik {
    static topla(a, b) {
        console.log(a + b)
    }

    cikar(a, b) {
        console.log(a - b)
    }

    carp(a, b) {
        console.log(a * b)
    }

    bol(a, b) {
        console.log(a / b)
    }
}

const matematik = new Matematik();
matematik.cikar(5, 3);


// Static olarak tanımlanmamışsa NESNE üzerinden erişilir.
// Static olarak tanımlanmışsa CLASS İSMİ üzerinden erişilir.
Matematik.topla(10, 7);


class Insan {

    static languagesCount = 10;

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary, this.languagesCount)
    }
}

const insan1 = new Insan("enes", "bayram", 10000);
insan1.writeInfo();
console.log(Insan.languagesCount)