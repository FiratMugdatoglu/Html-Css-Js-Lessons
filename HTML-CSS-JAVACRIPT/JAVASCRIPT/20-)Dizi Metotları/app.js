let arabalar = ["BMW","AUDİ","MERCEDES","FERRARİ","PORSCHE"];
let arabalar2 = ["ŞAHİN","TOFAŞ"];
//Dizinin başına eleman ekler ve dizinin uzunluğunu döner
arabalar.unshift("TOYOTA");
console.log(arabalar);

//Dizinin sonuna eleman ekler ve dizinin uzunluğunu döner
arabalar.push("OPEL");
console.log(arabalar);

//Dizinin sonundan eleman siler ve dizinin uzunluğunu döner
arabalar.pop();
console.log(arabalar);

//Dizinin başından eleman siler ve dizinin uzunluğunu döner
arabalar.shift();
console.log(arabalar);

//Eleman eklemek ve silmek için kullanılır
//Ekler
arabalar.splice(2,0,"hundai");
console.log(arabalar);
//Siler
arabalar.splice(1,2);
console.log(arabalar);


//TOSTRİNG
console.log(typeof arabalar);
let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar);
console.log(stringArabalar);



//JOIN METOT strınge çevirir ek olarak araya eleman ekliyebileriz
let stringArabalar1 = arabalar.join("-");
console.log(stringArabalar1);

//Concat dizileri birleştirir
let birlesmisDizi = arabalar.concat(arabalar2);
console.log(birlesmisDizi);


//Slice diziyi istediğimiz yerden bölüp 2 dizi yaparız
console.log(arabalar);
let ayriDizi = arabalar.slice(2);
console.log(ayriDizi);

//Reverse ters çevirir
console.log(arabalar);
arabalar.reverse;
console.log(arabalar);

//Split belirli bir ifadeye göre bölüp diziye çevirmek
let isimler = "Enes,Ali,Veli";
let isimlerDizi = isimler.split(",");
console.log(typeof isimlerDizi);



//INCLUDES METOT dizinin içinde var mı yok mu diye kontrol eder
let sonuc = arabalar.includes("BMW");
console.log(sonuc);