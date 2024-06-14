let urun1 = {
    isim : "ACER SWIFT",
    kategori : "Teknoloji",
    fiyat : 6.219
}
let urun2 = {
    isim : "ACER Nitro 5",
    kategori : "Teknoloji",
    fiyat : 15.000
}
let urun3 = {
    isim : "ACER Gaming",
    kategori : "Teknoloji",
    fiyat : 13.232
}
let urun4 = {
    isim : "LENOVA",
    kategori : "Teknoloji",
    fiyat : 16.219
}
let urun5 = {
    isim : "LENOVA SWIFT",
    kategori : "Teknoloji",
    fiyat : 26.219
}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);


function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
        filtreliUrunler.push(urun);
        }
        });
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("-----------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("-----------------------------------");
    });
}