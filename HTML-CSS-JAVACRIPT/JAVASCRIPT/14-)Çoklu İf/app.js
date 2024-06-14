let ad = prompt("İsminizi Giriniz :");
let tckn = prompt("TCKN giriniz :");

kontrolEt(ad , tckn);


function kontrolEt(ad , tckn){
if(ad!=""){
    if(tckn.length==11){
        console.log("İsim ve tckn problemsiz girildi");
    }else{
        console.log("Lütfen tc nizi 11 karakter olarak giriniz");
    }
}else{
    console.log("Lütfen isim alanını boş bırakmayınız!!");
}
}