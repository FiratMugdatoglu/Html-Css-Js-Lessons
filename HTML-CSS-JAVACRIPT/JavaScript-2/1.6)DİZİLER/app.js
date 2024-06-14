//DİZİLER

let sayilar = [0, 1, 2, 3, 4, 5, "FIRAT", 7, 8, 9, 10];
console.log(sayilar[6]);
sayilar[10] = "Mehmet";
console.log(sayilar[10]);


let karisikDizi = [1, "Fırat", 5.7, true, null, undefined];
console.log(karisikDizi);

let dizi1=[];
let dizi2=new Array();
let dizi3=new Array("enes","ali");

dizi1[0]="enes";
dizi1[1]="ali";

dizi2[0]="enes";
dizi2[1]="ali";
 
//FOREACH DÖNGÜSÜ

let isimler2=["enes","hilal","kübra","hande","cansu"];

for(let i=0;i<isimler2.length;i++){
    console.log(isimler2[i]);
}

isimler2.forEach(function(isim){
console.log(isim);
});