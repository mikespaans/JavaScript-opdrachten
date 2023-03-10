let Main = document.getElementById("main");
let ObjectArray = ["voornaam", "achternaam", "nationaliteit", "leeftijd", "gewicht"]
fetch('opdracht1_bijlage.json')
    .then(response => response.json())
    .then(data => {
        // Do something with the JSON data
        for (let info of ObjectArray) {
            console.log(data[info]);
            Main.innerHTML += data[info] + "<br>";
        }
    })
    .catch(error => console.error(error));
