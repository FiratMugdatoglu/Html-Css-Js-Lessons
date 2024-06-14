//Parametresiz metot tanımlamak

/*
function yazdir(){
    console.log("Fırat");
}

yazdir();
yazdir();
*/

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Parametreli metot tanımlamak

/*
function yazdir(isim,soyisim){
    console.log(isim + " " + soyisim);
}

yazdir("Fırat","Muğdatoğlu");
yazdir("Ali","Cevher");



function cube(sayi){
    console.log(sayi*sayi*sayi);
}

cube(5);


let yas = Number(prompt("Yasinizi giriniz"));

kontrolEt(yas);

function kontrolEt(yas){
    if(yas>18){
        console.log("Ehliyeti alabilirsiniz");
    }
    else{
        console.log("Ehliyeti alamazsiniz");
    }
}

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------


//Geriye değer döndüren metot tanımlamak


function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;
}

let donenDeger = cube(3);
console.log(donenDeger);