
//Parametresiz ve geriye değer döndürmeyen metot

function yazdir() {
    console.log("FIRAT");
}


function topla() {
    console.log(5 + 7);
}

yazdir();
topla();

//Parametreli metot tanımlamak

function yazdir2(isim, soyisim) {
    console.log(isim + " " + soyisim);
}

function cube(sayi) {
    console.log(sayi * sayi * sayi);
}

let yas = Number(prompt("Lütfen Yaşınızı Giriniz:"));

function kontrolEt(yas) {
    if (yas >= 18) {
        console.log("Ehliyet Alabilir.");
    }
    else {
        console.log("Ehliyet Alamaz.")
    }
}

yazdir2("FIRAT", "MUĞDATOĞLU");
cube(3);
kontrolEt(yas);


//Geriye değer döndüren metot

function cube1(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc
}

let donenDeger = cube(5);
console.log(donenDeger);