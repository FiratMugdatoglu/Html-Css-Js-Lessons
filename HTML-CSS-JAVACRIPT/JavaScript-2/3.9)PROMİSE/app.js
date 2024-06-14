// ? -----------PROMİSE----------
//Asenkron yapıları senkrona çevirmek için kullanılır
//Callback lerin alternatifi
let check = true;

const promise1 = new Promise((resolve, reject) => {
    if (check) {
        resolve("Promise Başarılı");
    } else {
        reject("Promise Başarısız...");
    }
})

console.log(promise1)

function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise te herhangi bir sıkıntı yok")
        } else {
            reject("Sıkıntı büyük")
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => console.log("Her zaman çalışır"))

// ? Promise + Xmlhttprequest

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
            })
        } catch (error) {
            reject(error)
        }
        xhr.open("GET", url)
        xhr.send();
    })
}

readStudents("students.json")
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }

            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url)
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
        // console.log(data)
        data.forEach(user => {
            console.log(user.name)
        });
        console.log("Daha sonra farklı asenkron kodlarını çalıştırabilirsiniz.")
    })
    .catch((err) => console.log(err))
    .finally(() => {
        //Mail atma kodlarını yazarsınız.
    })

const p1 = Promise.resolve("1. promise başarılı")
const p2 = Promise.resolve("2. promise başarılı")
const p3 = new Promise((resolve, reject) => {
    resolve("3. promise başarılı")
})

Promise.all([p1, p2, p3])
    .then((res) => {
        for (let value of res) {
            console.log(value);
        }
    })

//eğer tüm promisler başarılı ise resolve 1 tane başarız olursa catch e girer.