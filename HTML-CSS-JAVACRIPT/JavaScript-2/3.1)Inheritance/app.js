

class Person {
    firstName = "Enes";

    write() {
        console.log("Person Write", this.firstName);
    }

}

const person = new Person();
person.write();

class Student extends Person {

    write() {
        console.log("Studen Write", this.firstName);
        super.write();//Person sınıfındaki write metodunu yazar miras aldığımız için.
    }

}

const student1 = new Student();
student1.write();