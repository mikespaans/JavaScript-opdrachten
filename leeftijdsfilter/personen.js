let Main = document.getElementById("main");
let InputField = document.createElement("input");
let Button = document.createElement("button");



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


Button.innerHTML = "Filter";
Button.addEventListener("click", function () {
    let InputValue = InputField.value;
    console.log(InputValue);
    Main.innerHTML = "";
    Filter(InputValue);

});


function Filter(InputValue) {
    fetch('opdracht2_bijlage.json')
        .then(response => response.json())
        .then(data => {
            // Do something with the JSON data
            for (let i = 0; i < data.length; i++) {
                if (data[i]["leeftijd"] == InputValue) {
                    Main.innerHTML += data[i]["voornaam"] + " " + data[i]["achternaam"] + "<br>";
                    console.log("test")
                }
            }
        })
        .catch(error => console.error(error));

}

document.body.appendChild(InputField);
document.body.appendChild(Button);
