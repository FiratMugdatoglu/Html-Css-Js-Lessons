/*
1-JS senkron çalışan bir programlama dilidir.

Asenkron çalıştığı yerler
1-Timing
2-Event(olay)
3-Http isteklerinde

*/


console.log("Enes");

setTimeout(() => {
    console.log("1000 ms Süre doldu ve çalıştı")
}, 1000);

setTimeout(() => {
    console.log("500 ms de bekledi ve çelıştı")
}, 500);

setTimeout(() => {
    console.log("750 ms süre doldu ve çalıştı")
}, 750);

console.log("Bayram");