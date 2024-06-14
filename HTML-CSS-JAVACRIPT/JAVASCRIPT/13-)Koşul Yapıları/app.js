// let not = 65;

// if(not>50){
//     console.log("Geçtiniz , notunuz: " + not)

// }
// else{
//     console.log("Kaldınız , notunuz: " + not)

// }



// let yas = Number(prompt("Yaşınız: ")); 
// let para = Number(prompt("Bütçeniz: "));

// if(yas>=18 && para>=3000){
// alert("Ehliyet Sınavına Katılabilirsiniz");

// }
// else{
//     alert("Ehliyet Sınavına Katılamazsınız...");
// }


let vize1 = Number(prompt("Vize 1 notunuzu giriniz: "));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz: "));
let final = Number(prompt("Final notunuzu giriniz: "));

let ortalama = (vize*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("Dersten geçtiniz tebrikler");
    console.log("Dersten geçtiniz tebrikler");
}
else{
    alert("Kaldınız , geçmiş olsun");
    console.log("Kaldınız , geçmiş olsun");
}


