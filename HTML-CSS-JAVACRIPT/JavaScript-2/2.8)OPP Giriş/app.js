//OOP GİRİŞ

class Insan { //sınıf
    /*
    1-özellikler
    2-yapıcı metot
    3-function
    
    
    */
    constructor(isim, soyisim, yas, maas) { // yapıcı metod
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster() {
        console.log(
            `İsim : ${this.isim} 
Soyisim : ${this.soyisim} 
Maaş : ${this.maas} 
Yaş : ${this.yas}`)
    }
}

//Nesne oluşturmak
const insan1 = new Insan("enes", "bayram", 23, 10000);
insan1.bilgileriGoster();