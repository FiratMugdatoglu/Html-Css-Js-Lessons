//Map    key(anahtar)  value(değer)

const map1 = new Map();
let value;
//SET
map1.set(34, "İstanbul");
map1.set(35, "İzmir");
map1.set(6, "Ankara");
map1.set(1, "Adana");

//GET
console.log(map1.get(35));

//SİZE
value = map1.size;
console.log(value);

//delete
value = map1.delete(1);
console.log(value);

value = map1.size;
console.log(value);

//has
value = map1.has(35);
console.log(value);

//For Of metoduyla map üzerinde dönmke
for (let [key, value] of map1) {//Destructing
    console.log(key, value)
};


const keys = Array.from(map1.keys());
keys.forEach(function (key) {
    console.log(key, map1.get(key))
});

for (let key of map1.keys()) {
    console.log(key)
};

for (let value of map1.values()) {
    console.log(value)
};


//Mapten Arreye çevirmek
const array = Array.from(map1);
console.log(array);


//Array i mape çevirmek
const array2 = [
    [34, "istanbul"],
    [35, "izmir"],
    [33, "Mersin"]
];

const myMap = new Map(array2);
console.log(myMap);

//Buradaki çıktı undefined olur çünkü referans olduğu için 
map1.set([1, 2, 3], "Array");
console.log(map1.get([1, 2, 3]));