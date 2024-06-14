// var: function scope gibi davranır  -- ram bellekte çok fazla yer kaplar.


function selamVer() {
    var selam = "Herkese Selam";//function scope
    if (true) {
        var b = 10;
    }//Block Scope
    console.log(b);
    console.log(selam);
}



selamVer();


// let/const:Block scope özelliğine sahiptir.



function helloWorld() {

    if (true) {
        const c = 25;
        const d = 39;
        console.log(d);
    }//Block Scope
    //console.log(c); burada bunu kullanamayız hata alırız.
}


helloWorld();


// Var la aynı değişken isminden 2 tane oluşturulabilir
// var z = 12;
// var z=3232;
// console.log(z);



// let/const la aynı değişken isminden 2 tane oluşturulamaz.
// if (true) {
//     let q = 232;
//     let q = 5454;
//      console.log(q);
// }



//LET & CONST arasındaki fark ?

//const(constant) : sabit , değişmez

//let : değişebilir

//consta bir değer atadık mı birdaha değişmez ama let değişir.



const user = {
    usurname: "fırat",
    password: "123"
}

// user{age:23}   Bunu Yapamıyoruz const değişmezdi

user.usurname = "Fırat Muğdatoğlu";//Bunu yapabiliyoruz ama objelerde.