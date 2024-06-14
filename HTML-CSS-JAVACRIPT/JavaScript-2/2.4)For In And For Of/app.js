let names = ["Enes", "Ali", "Mehmet", "Yusuf", "Betül", "Ceyda"];

names.forEach(function (name) {
    console.log(name);
});

names.forEach(name => console.log(name));


//For In Dongusu
//Değişken tanımlama , in , dizi isimi
for (let name in names) {
    console.log(name, names[name])
}


//For Of Dongusu
for (let isim of names) {
    console.log(isim, names.indexOf(isim))
}