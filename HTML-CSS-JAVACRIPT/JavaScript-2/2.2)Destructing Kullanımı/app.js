let langs = ["C#", "C++", "JS", "Python"]


// let lang1,lang2,lang3,lang4

// lang1=langs[0]
// lang2=langs[1]
// lang3=langs[2]
// lang4=langs[3]

// console.log(lang1,lang2,lang3,lang4)

let [lang1, lang2, lang3, lang4] = langs


console.log(lang1, lang2, lang3, lang4)



const calculate = (a, b) => {
    const toplam = a + b
    const cıkar = a - b
    const carp = a * b
    const bol = a / b

    const dizi = [toplam, cıkar, carp, bol]
    return dizi
}

let [a, b, c, d] = calculate(10, 2)
console.log(a, b, c, d)

const person = {
    firstName: "Fırat",
    lastName: "Muğdatoğlu",
    age: 23,
    salary: 5000

}

// let isim,soyisim,maas,yas

// isim=person.firstName
// soyisim=person.lastName
// maas=person.salary
// yas=person.age

// console.log(isim,soyisim,yas,maas)

//Persondaki değerleri almak için aynı isimde değişken atamalıyız.
let { firstName, lastName, age, salary } = person
console.log(firstName, lastName, age, salary)


//Kendi istediğimiz adın olmasını istiyorsak aşağıdaki gibi yapmalıyız.
let { firstName: isim, lastName: soyisim, age: yas, salary: maas } = person
console.log(isim, soyisim, yas, maas)