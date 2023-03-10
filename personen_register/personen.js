let Main = document.getElementById("main");
let ObjectArray = ["voornaam", "achternaam", "nationaliteit", "leeftijd", "gewicht"]
fetch('opdracht2_bijlage.json')
    .then(response => response.json())
    .then(data => {
        // Do something with the JSON data
        for (let i = 0; i < data.length; i++) {
            for (let info of ObjectArray) {

                Main.innerHTML += data[i][info] + "<br>";
            }
        }
    })
    .catch(error => console.error(error));
