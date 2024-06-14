function getStudents(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getStudents("students.json");

function saveStudents() {
    fetch("studenst.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify( {
            "id": 3,
            "firstname": "Sena",
            "lastname": "Kaymazalp"
        })
    })
}