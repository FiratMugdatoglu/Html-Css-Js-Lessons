//Arrow Function

const yazdir = () => {
    console.log("Merhaba");
}

yazdir();


//Eğer ki yazdığımız kod tek satırdan oluşuyorsa kıvırcık parantez kullanmayabiliriz.
//Eğer ki birden fazla satır varsa js karışık olarak yazdırır.
const yazdir1 = (firstname, lastname) => console.log("Merhaba", firstname, lastname);


yazdir1("Fırat", "Muğdatoğlu");

//Eğer ki 1 tane parametreden oluşuyorsa parantezlerde silinebilir.
const yazdir2 = firstname => console.log("Merhaba", firstname);


yazdir2("Fırat");

const kupAl = x => x * x * x;

console.log("Değer", kupAl(3));