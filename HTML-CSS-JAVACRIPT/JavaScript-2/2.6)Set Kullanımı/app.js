//SET
//setlerde 1 değer 1 kere tutulur.
const set = new Set();

//add metodu
set.add(true);
set.add(3.14);
set.add("Enes");
// set.add("Enes");
// set.add("Enes");
// set.add("Enes");
set.add(7);
set.add({ username: "enes", password: "1" });
set.add([1, 2, 3, 4]);

//size
console.log(set.size);

set.delete("Enes");
set.delete(7);
console.log(set.size);


console.log(set.has(3.14));

for (let value of set) {
    console.log(value)
};

//setten array oluşturmak
const values = Array.from(set);
console.log(values);
values.forEach((value) => {
    console.log(value)
})

//arrayden set oluşturmak
let array = [1, "enes", true, "kamil", 15, [1, 2, 3]];
const newSet = new Set(array);
console.log(newSet);