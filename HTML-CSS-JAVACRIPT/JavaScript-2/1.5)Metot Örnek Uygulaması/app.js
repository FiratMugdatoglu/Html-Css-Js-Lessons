// //Kelimedeki veya cümledeki istediğimiz harften kaç tane olduğunu bulan uygulama.
// let metin = prompt("Cümle Giriniz:").toLowerCase();
// let harf = prompt("Bir harf giriniz:").toLowerCase();

// function kontrolEt(harf) {
//     let toplam = 0;
//     for (let i = 0; i < metin.length; i++) {
//         if (metin.charAt(i) === harf) {
//             toplam += 1;
//         }
//     }
//     return toplam;
// }

// let sonuc = kontrolEt(harf);
// alert("Harf Sayısı: " + sonuc);

// //Mükemmel sayı uygulaması

// let sayi = Number(prompt("Mükemmel sayı kontrolü:"));

// function mukemmelSayi(sayi) {
//     let toplam = 0;
//     for (let i = 0; i <= sayi; i++) {
//         if (sayi % i == 0) {
//             toplam += i;
//         }
//     }
//     if(sayi*2==toplam){
//         console.log(sayi + " Mükemmel Sayıdır.");

//     }
//     else{
//         console.log(sayi + " Mükemmel Sayı Değildir.");
//     }
// }

// mukemmelSayi(6);

//Decimal to Binary Conversion

// let number = Number(prompt("Sayı Giriniz:"));

// function toBinary(number) {
//     let binary = "";
//     while (true) {
//         binary += (number % 2).toString();
//         number = Math.floor(number / 2);
//         if (number == 1) {
//             binary += "1";
//             break;
//         }
//     }
//     let result = reverse(binary);
//     console.log("Sonuc : " + result);
// }

// function reverse(binary) {
//     let reverseBinary = "";
//     for (let i = binary.length - 1; i >= 0; i--) {
//         reverseBinary += binary.charAt(i);
//     }
//     return reverseBinary
// }

// toBinary(number);


//Binary  to Decimal Conversion

let number1 = prompt("Sayi giriniz.");

function binaryToDecimalConversion(binary) {
    let toplam = 0;
    let ust = 0;
    for (let i = binary.length-1 ; i>= 0 ; i--){
        toplam += Number(binary.charAt(i)) * Math.pow(2,ust);  
        ust++;
    }
    console.log("Sonuc: " + toplam);
}

binaryToDecimalConversion(number1);