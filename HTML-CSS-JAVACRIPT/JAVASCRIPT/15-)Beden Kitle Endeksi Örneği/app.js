let kilo = Number(prompt("Kilonuzu giriniz"));

let boy = Number(prompt("Boyunuzu giriniz"));

let sonuc = kilo/(boy*2);

if(sonuc<18.5){
    console.log("İdeal Kilonun Altında");
}else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal Kilonun Altında");
}else if(sonuc>=25 && sonuc<=29.9){
    console.log("İdeal Kilo");
}
