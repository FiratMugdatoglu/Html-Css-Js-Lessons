


// --------------------SCOPE----------------------
//global scope
//function scope
//bock scope


//var degiskenIsmi = 10;

//console.log(degiskenIsmi);

//--------------------------------------------------------
//global scope
var a = 5;

while(a>6){

}

//--------------------------------------------------------

if(true){

console.log(a);

}


//--------------------------------------------------------
function method1(){

    console.log(a);

}

method1();

//--------------------------------------------------------




function method2(){
var b = 10; // functipn scope

    if(true){
// block scope
var b = 10;
        
        }

}