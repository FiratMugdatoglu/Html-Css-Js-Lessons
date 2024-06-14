//Document write ile çıktı verme

document.write("Hello World <br>");
document.write("Fırat Muğdatoğlu <br>");
document.write(55 + "<br>");
document.write(true + "<br>");


//console log metodunu kullanırız.

console.log("Hello World");
console.log("Fırat Muğdatoğlu");
console.log(true);
console.log(5.5);
console.log({ Name: "Fırat", Surname: "Muğdatoğlu" });



let a = 5;
let b = 10;

console.log("İki Sayının Toplamı: " + (a + b));


//Window en dış objedir.Document onun içinde yer alır.

console.log(document.location.host);


//Alert (Uyarıcı) popup ile çıktı verme işlemleri.

let c = 22;
let d = 23;

alert("Hello World");
alert("İki Sayının Toplamı: " + (c + d));