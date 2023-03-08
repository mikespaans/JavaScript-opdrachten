var promptNumber = prompt("Voer een getal in.");
var promptArray = [];

function CreatePyramide() {
    for (let i = 0; i <= promptNumber; i++) {
        promptArray.push(i);
    }

    const pyramideHeader = document.createElement("h1");
    const pyramideArrayText = document.createElement("p");
    const pyramideText = document.createElement("p");

    pyramideHeader.innerHTML = "Pyramide Aflopend";
    pyramideArrayText.innerHTML = "Array : " + promptArray;

    for (let i = promptNumber; i >= 0; i--) {
        let numbers = ""; // reset numbers variable as a string
        for (let addNumber = 0; addNumber <= i; addNumber++) {
            numbers += promptArray[addNumber].toString(); // add each number to the string
        }
        pyramideText.innerHTML += numbers + "<br>";
    }

    document.body.appendChild(pyramideHeader);
    document.body.appendChild(pyramideArrayText);
    document.body.appendChild(pyramideText);
}

CreatePyramide();
