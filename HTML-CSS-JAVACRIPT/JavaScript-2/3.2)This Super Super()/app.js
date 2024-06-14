//super : Üst sınıfı gösterir
//super()
class Person {

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    }
}



class Studen extends Person {

    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary);
    }

    writeInfo() {
        super.writeInfo();
    }

}

const student1 = new Studen("Enes", "Bayram", 10000);
student1.writeInfo();