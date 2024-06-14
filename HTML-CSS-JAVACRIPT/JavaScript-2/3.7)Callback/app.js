//CALLBACK NEDİR

function getName(callback) {
    setTimeout(() => {
        let name = "Enes";
        callback(name);
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "Bayram";
        callback(surname)
    }, 500);
}

// getName(getSurname);

getName((name) => {
    getSurname(name, (surname) => {
        console.log(name, surname);
    });
});

// getName();
// getSurname();