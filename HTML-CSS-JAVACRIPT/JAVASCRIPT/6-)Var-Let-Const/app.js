// var : function scope -- ram bellekte cok fazla yer kaplar
// let/const : block scope özelliğine sahiptir.
function selamVer(){
    var selam = "Herkese Selam"; // function scope
    if(true){
        var b = 10;
        let c = 7;
        const d = 8; 
        console.log(c);
        console.log(d);
    }
    console.log(b);//normalde bu block scope ama var olduğu için her yerden erişiliyor o yüzden burdada function scope gibi oluyor
    console.log(selam);
}
selamVer();




// varda böyle yapabiliyoruz a 10 oluyor 
//var a = 5;
//var a = 10;
//console.log(a);



// let & const arasındaki fark
// const : sabit , değişmez

//const buna izin vermez ama let olursa izin verir


//const a = 5;
//const a = 10;
//console.log(a);


//BU OLUR AMA
//const user = {usurname :"enes" , password:"123"};

//user.usurname = {"enesbayram"};

//console.log(user);